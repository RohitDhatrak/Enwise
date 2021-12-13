import axios, { AxiosError } from "axios";
import {
    Liked,
    ServerError,
    Playlist,
    History,
    WatchLater,
    PlaylistVideo,
    Category,
} from "../types/types";

export async function getPlaylists(userId: number): Promise<Playlist[]> {
    try {
        const { data: playlists } = await axios.get<Playlist[]>(
            `${process.env.REACT_APP_API_ENDPOINT}/playlists/${userId}`
        );
        return playlists;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            if (serverError.response && serverError.response?.data) {
                console.log(serverError.response.data.message);
            }
        }
        console.log({ error });
        return [];
    }
}

export async function getLikedVideos(userId: number): Promise<Liked[]> {
    try {
        const { data: likedVideos } = await axios.get<Liked[]>(
            `${process.env.REACT_APP_API_ENDPOINT}/liked/${userId}`
        );
        return likedVideos;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            if (serverError.response && serverError.response?.data) {
                console.log(serverError.response.data.message);
            }
        }
        console.log({ error });
        return [];
    }
}

export async function getHistory(userId: number): Promise<History[]> {
    try {
        const { data: history } = await axios.get<History[]>(
            `${process.env.REACT_APP_API_ENDPOINT}/history/${userId}`
        );
        return history;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            if (serverError.response && serverError.response?.data) {
                console.log(serverError.response.data.message);
            }
        }
        console.log({ error });
        return [];
    }
}

export async function getWatchLater(userId: number): Promise<WatchLater[]> {
    try {
        const { data: watchLater } = await axios.get<WatchLater[]>(
            `${process.env.REACT_APP_API_ENDPOINT}/watchlater/${userId}`
        );
        return watchLater;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            if (serverError.response && serverError.response?.data) {
                console.log(serverError.response.data.message);
            }
        }
        console.log({ error });
        return [];
    }
}

export async function getPlaylistsByVideo(
    videoId: string,
    userId: number
): Promise<PlaylistVideo[]> {
    try {
        const { data: playlists } = await axios.get<PlaylistVideo[]>(
            `${process.env.REACT_APP_API_ENDPOINT}/playlistVideos/${userId}/${videoId}`
        );
        return playlists;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            if (serverError.response && serverError.response?.data) {
                console.log(serverError.response.data.message);
            }
        }
        console.log({ error });
        return [];
    }
}

export async function getPlaylistVideos(
    playlistId: string
): Promise<PlaylistVideo[]> {
    try {
        const { data: playlists } = await axios.get<PlaylistVideo[]>(
            `${process.env.REACT_APP_API_ENDPOINT}/playlistVideos/${playlistId}`
        );
        return playlists;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            if (serverError.response && serverError.response?.data) {
                console.log(serverError.response.data.message);
            }
        }
        console.log({ error });
        return [];
    }
}

export async function getUserData(userId: number) {
    try {
        const { data: userData } = await axios.get(
            `${process.env.REACT_APP_API_ENDPOINT}/user/${userId}`
        );
        return userData;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            if (serverError.response && serverError.response?.data) {
                console.log(serverError.response.data.message);
            }
        }
        console.log({ error });
        return {};
    }
}

export async function getCategories(): Promise<Category[]> {
    try {
        const { data: categories } = await axios.get<Category[]>(
            `${process.env.REACT_APP_API_ENDPOINT}/categories`
        );
        return categories;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            if (serverError.response && serverError.response?.data) {
                console.log(serverError.response.data.message);
            }
        }
        console.log({ error });
        return [];
    }
}
