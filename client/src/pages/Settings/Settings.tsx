import React, { useEffect, useState } from "react";
import { Container, FlexContainer, Input } from "../../components/Shared";
import { ActionButton, InputBox } from "../../components";
import { InputEvent } from "../../types/types";
import { validatePassword } from "../../utils/validatePassword";
import { updatePassword } from "../../services/postUserData";
import { useReducerContext } from "../../context/ReducerContext";

export function Settings() {
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isChecked, setIsChecked] = useState("");
    const [message, setMessage] = useState("");
    const { user } = useReducerContext();

    async function verifyAndSetNewPassword() {
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

    useEffect(() => {
        (async function () {
            const;
        })();
    }, []);

    return (
        <FlexContainer m="0 auto" direction="column" maxW="80vw" w="20em">
            <Container fs="1.2rem" m="1.5em 0">
                Account
            </Container>
            <FlexContainer direction="column" ml="1em">
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
                <Container color="var(--success-color)">{message}</Container>
                <Container color="var(--error-color)">{error}</Container>
                {!error && (
                    <ActionButton
                        onClickFunction={verifyAndSetNewPassword}
                        width="unset"
                    >
                        Change Password
                    </ActionButton>
                )}
            </FlexContainer>
            <Container fs="1.2rem" m="1.5em 0">
                Privacy
            </Container>
            <FlexContainer direction="column" ml="1em">
                <FlexContainer justify="space-between" w="100%" fs="1.1rem">
                    <label htmlFor="history-checkbox">
                        Don't track history
                    </label>
                    <Input
                        id="history-checkbox"
                        type="checkbox"
                        mb="1em"
                        mt="0.5em"
                        float="right"
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
                >
                    Clear History
                </Container>
            </FlexContainer>
        </FlexContainer>
    );
}
