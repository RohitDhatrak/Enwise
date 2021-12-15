import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, FlexContainer, Input } from "../../components/Shared";
import { ActionButton, InputBox } from "../../components";
import { InputEvent, FormEvent } from "../../types/types";
import { validatePassword } from "../../utils/validatePassword";
import { updatePassword } from "../../services/postUserData";
import { useReducerContext } from "../../context/ReducerContext";
import { toggleSaveHistory } from "../../utils/dataOperations";
import { clearHistory } from "../../services/deleteUserData";

export function Settings() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [historyError, setHistoryError] = useState("");
    const [historyMessage, setHistoryMessage] = useState("");
    const { user, dispatch } = useReducerContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    async function verifyAndSetNewPassword(e: FormEvent) {
        e.preventDefault();
        const response = await updatePassword(password, newPassword, user.id);
        if (response.success) {
            setMessage(response.message);
            setPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } else {
            setError(response.message);
        }
    }

    async function deleteHistory() {
        const isConfirmed = window.confirm(
            "Are you sure you want to clear your watch history?"
        );
        if (isConfirmed) {
            const response = await clearHistory(user.id);
            if (response.success) {
                setHistoryMessage(response.message);
                dispatch({ type: "SAVE_HISTORY", payload: { history: [] } });
            } else {
                setHistoryError(response.message);
            }
            setTimeout(() => {
                setHistoryError("");
                setHistoryMessage("");
            }, 6000);
        }
    }

    function logOut() {
        dispatch({ type: "DELETE_USER_SESSION" });
        navigate("/login");
    }

    return (
        <FlexContainer
            m="0 auto"
            direction="column"
            maxW="80vw"
            w="20em"
            mb="5em"
        >
            <Container fs="1.2rem" m="1.5em 0">
                Account
            </Container>
            <FlexContainer
                direction="column"
                ml="1em"
                as="form"
                onSubmit={verifyAndSetNewPassword}
            >
                <InputBox
                    type="password"
                    label="Old Password"
                    value={password}
                    onChangeFunction={(e: InputEvent) => {
                        setError("");
                        setPassword(e.target.value);
                    }}
                />
                <InputBox
                    type="password"
                    label="New Password"
                    value={newPassword}
                    onChangeFunction={(e: InputEvent) => {
                        validatePassword(
                            e,
                            false,
                            setError,
                            setConfirmPassword,
                            setNewPassword,
                            newPassword
                        );
                        setNewPassword(e.target.value);
                    }}
                />
                <InputBox
                    type="password"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChangeFunction={(e: InputEvent) => {
                        validatePassword(
                            e,
                            true,
                            setError,
                            setConfirmPassword,
                            setNewPassword,
                            newPassword
                        );
                        setConfirmPassword(e.target.value);
                    }}
                />
                <Container m="0 auto" textAlign="center">
                    <Container color="var(--success-color)">
                        {message}
                    </Container>
                    <Container color="var(--error-color)">{error}</Container>
                </Container>
                {!error && password && newPassword && confirmPassword && (
                    <ActionButton width="unset">Change Password</ActionButton>
                )}
            </FlexContainer>

            <Container fs="1.2rem" m="1.5em 0">
                Privacy
            </Container>
            <FlexContainer direction="column" ml="1em" fs="1rem">
                <FlexContainer justify="space-between" w="100%" fs="1.1rem">
                    <label htmlFor="history-checkbox">
                        Track watch history
                    </label>
                    <Input
                        id="history-checkbox"
                        type="checkbox"
                        mb="1em"
                        mt="0.5em"
                        float="right"
                        checked={user.saveHistory}
                        onChange={(e: InputEvent) =>
                            toggleSaveHistory(e, user, dispatch)
                        }
                    />
                </FlexContainer>

                <Container
                    as="button"
                    fs="1rem"
                    h="2.5em"
                    br="0.4em"
                    b="none"
                    bgc="var(--error-color)"
                    cursor="pointer"
                    fw={600}
                    onClick={deleteHistory}
                >
                    Clear History
                </Container>
                {(historyMessage || historyError) && (
                    <Container m="0.5em auto" textAlign="center">
                        <Container color="var(--success-color)">
                            {historyMessage}
                        </Container>
                        <Container color="var(--error-color)">
                            {historyError}
                        </Container>
                    </Container>
                )}
            </FlexContainer>
            <Container fs="1.2rem" m="1.5em 0">
                Logout
            </Container>
            <FlexContainer direction="column" ml="1em" fs="1rem">
                <Container
                    as="button"
                    fs="1rem"
                    h="2.5em"
                    br="0.4em"
                    b="none"
                    bgc="var(--error-color)"
                    cursor="pointer"
                    fw={600}
                    onClick={logOut}
                >
                    Logout
                </Container>
            </FlexContainer>
        </FlexContainer>
    );
}
