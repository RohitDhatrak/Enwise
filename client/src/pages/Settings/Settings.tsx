import React from "react";
import { Container, FlexContainer, Input } from "../../components/Shared";

export function Settings() {
    return (
        <FlexContainer m="0 auto" direction="column" maxW="80vw" w="20em">
            <Container fs="1.2rem" m="1.5em 0">
                Account
            </Container>
            <FlexContainer direction="column" ml="1em">
                <label htmlFor="old-password">Old Password</label>
                <Input id="old-password" mb="1em" mt="0.5em" />
                <label htmlFor="new-password">New Password</label>
                <Input id="new-password" mb="1em" mt="0.5em" />
                <label htmlFor="confirm-password">Confirm Password</label>
                <Input id="confirm-password" mb="1em" mt="0.5em" />
                <button>Change Password</button>
            </FlexContainer>
            <Container fs="1.2rem" m="1.5em 0">
                Privacy
            </Container>
            <FlexContainer direction="column" ml="1em">
                <FlexContainer justify="space-between" w="100%">
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
                <button>Clear History</button>
            </FlexContainer>
        </FlexContainer>
    );
}
