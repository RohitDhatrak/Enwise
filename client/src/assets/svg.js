import { setTimeout } from "timers";

export function SearchIcon() {
    return (
        <svg
            className="search-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
        >
            <path
                d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function HomeIcon() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="footer-icons"
        >
            <path
                d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function PlayListIcon() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="footer-icons"
        >
            <path
                d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6m16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-8 12.5v-9l6 4.5l-6 4.5z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function ProfileIcon() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="footer-icons"
        >
            <path
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"
                fill="currentColor"
            ></path>
        </svg>
    );
}
