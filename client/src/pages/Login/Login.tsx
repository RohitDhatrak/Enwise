import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useReducerContext } from "../../context/ReducerContext";
import { setupAuthHeaderForServiceCalls } from "../../services/authHandlers";
import { User, InputEvent, ButtonEvent, ServerError } from "../../types/types";
import { FlexContainer, Container } from "../../components/Shared";
import { InputBox, ActionButton } from "../../components";
import {
    getPlaylists,
    getLikedVideos,
    getHistory,
    getWatchLater,
} from "../../services/getUserData";

export function Login() {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [error, setError] = useState<string>();
    const { user, dispatch } = useReducerContext();
    const navigate = useNavigate();
    const {
        state: { previousPath },
    } = useLocation();

    useEffect(() => {
        if (user?.id) {
            navigate(previousPath, { replace: true });
        }
    }, [user]);

    function updatePassword(e: InputEvent) {
        setError("");
        setPassword(e.target.value);
    }

    function updateEmail(e: InputEvent) {
        setError("");
        setEmail(e.target.value);
    }

    async function loginAndRedirect(e: ButtonEvent) {
        e.preventDefault();
        try {
            const { data: user } = await axios.post<User>(
                `${process.env.REACT_APP_API_ENDPOINT}/login`,
                {
                    email,
                    password,
                },
                { withCredentials: true }
            );

            if (user.id) {
                dispatch({
                    type: "SAVE_USER_SESSION",
                    payload: { user },
                });
                setupAuthHeaderForServiceCalls(user.jwt);

                const playlists = await getPlaylists(user.id);
                const likes = await getLikedVideos(user.id);
                const watchLater = await getWatchLater(user.id);
                const history = await getHistory(user.id);
                dispatch({
                    type: "SAVE_USER_DATA",
                    payload: {
                        playlists,
                        likes,
                        watchLater,
                        history,
                    },
                });
                navigate(previousPath, { replace: true });
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<ServerError>;
                if (serverError.response && serverError.response?.data) {
                    setError(serverError.response.data.message);
                    return;
                }
            }
            setError("Something went wrong");
        }
    }

    return (
        <FlexContainer
            align="center"
            justify="center"
            h="80vh"
            color="var(--font-color-2)"
        >
            <FlexContainer
                direction="column"
                align="center"
                justify="center"
                b="1px solid var(--border-color)"
                w="30em"
                m="0 auto"
                p="2em"
                br="1em"
                maxW="85vw"
            >
                <Container mb="1em" fs="2rem" color="var(--action-btn)">
                    Login
                </Container>
                <FlexContainer direction="column" w="100%" m="0.5em">
                    <InputBox
                        type="email"
                        label="Email"
                        onChangeFunction={updateEmail}
                    />
                </FlexContainer>
                <FlexContainer direction="column" w="100%" m="0.5em">
                    <InputBox
                        type="password"
                        label="Password"
                        onChangeFunction={updatePassword}
                    />
                </FlexContainer>
                <Container color="var(--error-color)">{error}</Container>
                {email && password && !error && (
                    <ActionButton onClickFunction={loginAndRedirect}>
                        Login
                    </ActionButton>
                )}
                <Container mt="0.5em">
                    <Container display="inline" mr="0.2em">
                        Don't have an account yet?
                    </Container>
                    <Link
                        to="/signup"
                        state={{ previousPath: `${previousPath}` }}
                    >
                        <Container display="inline" color="var(--action-btn)">
                            Signup
                        </Container>
                    </Link>
                </Container>
            </FlexContainer>
        </FlexContainer>
    );
}