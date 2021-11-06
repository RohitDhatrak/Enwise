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

export function FavIcon({ ...props }) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 256 256" {...props}>
            <path
                d="M236.023 92c0 30.565-17.713 62.005-52.648 93.446a317.34 317.34 0 0 1-51.442 37.534a8 8 0 0 1-7.819 0c-4.25-2.38-104.09-59.117-104.09-130.98a60.02 60.02 0 0 1 108-36.04a60.02 60.02 0 0 1 108 36.04z"
                fill={props.color}
            ></path>
        </svg>
    );
}

export function WatchLater({ ...props }) {
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
                class="uim-primary"
                d="M12 2a10.017 10.017 0 0 0-6.994 2.872V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2H6.218A7.98 7.98 0 1 1 4 12a1 1 0 0 0-2 0A10 10 0 1 0 12 2z"
                fill="currentColor"
            ></path>
            <path
                class="uim-primary"
                d="M14 13h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2h1a1 1 0 0 1 0 2z"
                fill="currentColor"
            ></path>
            <path
                class="uim-tertiary"
                d="M12 4a8.008 8.008 0 0 0-5.782 2.5h2.288a1 1 0 0 1 0 2h-4.5a.99.99 0 0 1-.978-.889A9.922 9.922 0 0 0 2 12a1 1 0 0 1 2 0a8 8 0 1 0 8-8zm2 9h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2h1a1 1 0 0 1 0 2z"
                opacity=".5"
                fill="currentColor"
            ></path>
        </svg>
    );
}
