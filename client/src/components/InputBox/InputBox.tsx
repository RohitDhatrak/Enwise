import { Input } from "../Shared";

type InputProps = {
    label: string;
    type: string;
    placeholder?: string;
    onChangeFunction: Function;
};

export function InputBox({
    type,
    label,
    placeholder = label,
    onChangeFunction,
}: InputProps) {
    return (
        <>
            <label htmlFor="email">{label}</label>
            <Input
                type={type}
                id={label}
                placeholder={placeholder}
                onChange={onChangeFunction}
                bgc="transparent"
                b="1px solid var(--border-color)"
                h="2.8em"
                mt="0.5em"
                p="1em"
                color="var(--font-color-2)"
                fs="1rem"
                br="0.4em"
            />
        </>
    );
}
