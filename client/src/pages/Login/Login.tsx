import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useReducerContext } from "../../context/ReducerContext";
import { setupAuthHeaderForServiceCalls } from "../../services/authHandlers";
import { User, InputEvent, FormEvent, ServerError } from "../../types/types";
import { FlexContainer, Container } from "../../components/Shared";
import { InputBox, ActionButton } from "../../components";
import {
    getPlaylists,
    getLikedVideos,
    getHistory,
    getWatchLater,
} from "../../services/getUserData";
import { useAppContext } from "../../context/AppContext";

export function Login() {
    const [email, setEmail] = useState(process.env.REACT_APP_GUEST_EMAIL);
    const [password, setPassword] = useState(
        process.env.REACT_APP_GUEST_PASSWORD
    );
    const [error, setError] = useState("");
    const [asGuest, setAsGuest] = useState(true);
    const [loading, setLoading] = useState(false);
    const { user, dispatch } = useReducerContext();
    const { setIsUserDataFetched } = useAppContext();
    const navigate = useNavigate();
    const { state } = useLocation();
    const previousPath = state?.previousPath || "/";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (user?.id) {
            navigate(previousPath, { replace: true });
        }
    }, [user]);

    function updatePassword(e: InputEvent) {
        setError("");
        setPassword(e.target.value);
        setAsGuest(false);
    }

    function updateEmail(e: InputEvent) {
        setError("");
        setEmail(e.target.value);
    }

    async function loginAndRedirect(e: FormEvent) {
        e.preventDefault();
        setLoading(true);
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
                setIsUserDataFetched(false);

                const [playlists, likes, watchLater, history] =
                    await Promise.all([
                        getPlaylists(user.id),
                        getLikedVideos(user.id),
                        getWatchLater(user.id),
                        getHistory(user.id),
                    ]);

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
                setIsUserDataFetched(true);
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
        setLoading(false);
    }

    return (
        <FlexContainer
            align="center"
            justify="center"
            h="80vh"
            color="var(--font-color-2)"
            as="form"
            onSubmit={loginAndRedirect}
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
                {asGuest && <Container>OR</Container>}
                {email && password && !error && !asGuest && (
                    <ActionButton>
                        {loading ? "Logging In..." : "Login"}
                    </ActionButton>
                )}
                {asGuest && (
                    <ActionButton>
                        {loading ? "Logging In..." : "Login as Guest"}
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
