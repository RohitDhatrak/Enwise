import { InputEvent } from "../types/types";

export function validatePassword(
    e: InputEvent,
    isRetyped: boolean,
    setError: Function,
    setRetypedPassword: Function,
    setPassword: Function,
    password: string
) {
    var regularExpression =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    setError("");

    if (password !== e.target.value) {
        setError("Passwords do not match");
    }

    if (isRetyped) {
        setRetypedPassword(e.target.value);
        if (!regularExpression.test(password)) {
            setError(
                "The password should be 6-16 characters and should contain atleast 1 number & 1 special character"
            );
        }
    } else {
        setPassword(e.target.value);
        if (!regularExpression.test(e.target.value)) {
            setError(
                "The password should be 6-16 characters and should contain atleast 1 number & 1 special character"
            );
        }
    }
}
