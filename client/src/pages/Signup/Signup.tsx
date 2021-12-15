import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useReducerContext } from "../../context/ReducerContext";
import { setupAuthHeaderForServiceCalls } from "../../services/authHandlers";
import { User, FormEvent, ServerError, InputEvent } from "../../types/types";
import { FlexContainer, Container } from "../../components/Shared";
import { InputBox, ActionButton } from "../../components";
import { validatePassword } from "../../utils/validatePassword";

export function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypedPassword, setRetypedPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { dispatch } = useReducerContext();
    const navigate = useNavigate();
    const { state } = useLocation();
    const previousPath = state?.previousPath || "/";

    function validateEmail(e: InputEvent) {
        const emailRegex = /\S+@\S+\.\S+/;
        setEmail(e.target.value);
        if (!emailRegex.test(e.target.value.toLowerCase())) {
            setError("Enter a valid email address");
        } else {
            setError("");
        }
    }

    async function signupAndRedirect(e: FormEvent) {
        e.preventDefault();
        try {
            const { data: user } = await axios.post<User>(
                `${process.env.REACT_APP_API_ENDPOINT}/signup`,
                {
                    email,
                    password,
                }
            );

            if (user.id) {
                dispatch({ type: "SAVE_USER_SESSION", payload: { user } });
                setupAuthHeaderForServiceCalls(user.jwt);
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
            as="form"
            onSubmit={signupAndRedirect}
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
                    Signup
                </Container>
                <FlexContainer direction="column" w="100%" m="0.5em">
                    <InputBox
                        type="email"
                        label="Email"
                        onChangeFunction={validateEmail}
                    />
                </FlexContainer>
                <FlexContainer direction="column" w="100%" m="0.5em">
                    <InputBox
                        type="password"
                        label="Password"
                        onChangeFunction={(e: InputEvent) =>
                            validatePassword(
                                e,
                                false,
                                setError,
                                setRetypedPassword,
                                setPassword,
                                password
                            )
                        }
                    />
                </FlexContainer>
                <FlexContainer direction="column" w="100%" m="0.5em">
                    <InputBox
                        type="password"
                        label="Confirm Password"
                        onChangeFunction={(e: InputEvent) =>
                            validatePassword(
                                e,
                                true,
                                setError,
                                setRetypedPassword,
                                setPassword,
                                password
                            )
                        }
                    />
                </FlexContainer>
                <Container color="var(--error-color)">{error}</Container>
                {email && password && retypedPassword && !error && (
                    <ActionButton>Signup</ActionButton>
                )}
                <Container mt="0.5em">
                    <Container display="inline" mr="0.2em">
                        Already have an account?
                    </Container>
                    <Link
                        to="/login"
                        state={{ previousPath: `${previousPath}` }}
                    >
                        <Container display="inline" color="var(--action-btn)">
                            Login
                        </Container>
                    </Link>
                </Container>
            </FlexContainer>
        </FlexContainer>
    );
}
