export function SearchIcon({ ...props }) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path
                d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
                fill={props.color}
            ></path>
        </svg>
    );
}

export function HomeIcon({ ...props }) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 15 15" {...props}>
            <g fill="none">
                <path
                    d="M7.825.12a.5.5 0 0 0-.65 0L0 6.27v7.23A1.5 1.5 0 0 0 1.5 15h4a.5.5 0 0 0 .5-.5v-3a1.5 1.5 0 0 1 3 0v3a.5.5 0 0 0 .5.5h4a1.5 1.5 0 0 0 1.5-1.5V6.27L7.825.12z"
                    fill={props.color}
                ></path>
            </g>
        </svg>
    );
}

export function PlayListIcon({ ...props }) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path
                d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6m16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-8 12.5v-9l6 4.5l-6 4.5z"
                fill={props.color}
            ></path>
        </svg>
    );
}

export function ProfileIcon({ ...props }) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"
                fill={props.color}
            ></path>
        </svg>
    );
}

export function LikeIcon({ ...props }) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 256 256" {...props}>
            <path
                d="M236.023 92c0 30.565-17.713 62.005-52.648 93.446a317.34 317.34 0 0 1-51.442 37.534a8 8 0 0 1-7.819 0c-4.25-2.38-104.09-59.117-104.09-130.98a60.02 60.02 0 0 1 108-36.04a60.02 60.02 0 0 1 108 36.04z"
                fill={props.color}
            ></path>
        </svg>
    );
}

export function WatchLaterIcon({ ...props }) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm3.55 13.8l-4.08-2.51c-.3-.18-.48-.5-.48-.85V7.75c.01-.41.35-.75.76-.75s.75.34.75.75v4.45l3.84 2.31c.36.22.48.69.26 1.05c-.22.35-.69.46-1.05.24z"
                fill={props.color}
            ></path>
        </svg>
    );
}

export function HistoryIcon({ ...props }) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path
                d="M13.26 3C8.17 2.86 4 6.95 4 12H2.21c-.45 0-.67.54-.35.85l2.79 2.8c.2.2.51.2.71 0l2.79-2.8a.5.5 0 0 0-.36-.85H6c0-3.9 3.18-7.05 7.1-7c3.72.05 6.85 3.18 6.9 6.9c.05 3.91-3.1 7.1-7 7.1c-1.61 0-3.1-.55-4.28-1.48a.994.994 0 0 0-1.32.08c-.42.42-.39 1.13.08 1.49A8.858 8.858 0 0 0 13 21c5.05 0 9.14-4.17 9-9.26c-.13-4.69-4.05-8.61-8.74-8.74zm-.51 5c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26c.21-.36.09-.82-.26-1.03l-2.88-1.71v-3.4c0-.4-.34-.74-.75-.74z"
                fill={props.color}
            ></path>
        </svg>
    );
}

export function PlaylistNumIcon({ ...props }) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path
                d="M5 10h10c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm0-4h10c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm0 8h6c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm9 .88v4.23c0 .39.42.63.76.43l3.53-2.12c.32-.19.32-.66 0-.86l-3.53-2.12a.508.508 0 0 0-.76.44z"
                fill={props.color}
            ></path>
        </svg>
    );
}

export function MoreIcon({ ...props }) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                fill={props.color}
            ></path>
        </svg>
    );
}

export function AddToPlayListIcon({ ...props }) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path
                d="M13 10H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm5 8v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3zM3 16h6c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1z"
                fill={props.color}
            ></path>
        </svg>
    );
}

export function CloseIcon({ ...props }) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path
                d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                fill={props.color}
            ></path>
        </svg>
    );
}

export function AddIcon({ ...props }) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path
                d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
                fill={props.color}
            ></path>
        </svg>
    );
}

export function SettingsIcon({ ...props }) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path
                d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z"
                fill={props.color}
            ></path>
        </svg>
    );
}

export function LogOutIcon({ ...props }) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path
                d="M16 17v-3H9v-4h7V7l5 5l-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9z"
                fill={props.color}
            ></path>
        </svg>
    );
}
