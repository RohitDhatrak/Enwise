import axios, { AxiosError } from "axios";
import {
    Liked,
    ServerError,
    Playlist,
    History,
    WatchLater,
} from "../types/types";

export async function deletePlaylist(
    userId: number,
    playlistId: number
): Promise<Playlist> {
    try {
        const { data: playlist } = await axios.delete<Playlist>(
            `${process.env.REACT_APP_API_ENDPOINT}/playlists`,
            {
                data: {
                    userId,
                    playlistId,
                },
            }
        );
        return playlist;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            if (serverError.response && serverError.response?.data) {
                console.log(serverError.response.data.message);
            }
        }
        console.log({ error });
        return {} as Playlist;
    }
}

export async function deleteFromPlaylist(
    userId: number,
    videoId: string,
    playlistId: number
): Promise<Playlist[]> {
    try {
        const { data: playlist } = await axios.delete<Playlist[]>(
            `${process.env.REACT_APP_API_ENDPOINT}/playlistVideos/${playlistId}`,
            {
                data: {
                    userId,
                    videoId,
                },
            }
        );
        return playlist;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            if (serverError.response && serverError.response?.data) {
                console.log(serverError.response.data.message);
            }
        }
        console.log({ error });
        return [] as Playlist[];
    }
}

export async function deleteLikedVideo(
    userId: number,
    videoId: string
): Promise<Liked> {
    try {
        const { data: likedVideos } = await axios.delete<Liked>(
            `${process.env.REACT_APP_API_ENDPOINT}/liked`,
            {
                data: {
                    userId,
                    videoId,
                },
            }
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
        return {} as Liked;
    }
}

export async function deleteHistory(
    userId: number,
    videoId: string
): Promise<History> {
    try {
        const { data: history } = await axios.delete<History>(
            `${process.env.REACT_APP_API_ENDPOINT}/history`,
            {
                data: {
                    userId,
                    videoId,
                },
            }
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
        return {} as History;
    }
}

export async function clearHistory(userId: number) {
    try {
        const { data: response } = await axios.delete(
            `${process.env.REACT_APP_API_ENDPOINT}/history/clear`,
            {
                data: {
                    userId,
                },
            }
        );
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            if (serverError.response && serverError.response?.data) {
                console.log(serverError.response.data.message);
                return serverError.response.data;
            }
        }
        console.log({ error });
        return {
            sucess: false,
            message:
                "There was some problem while deleting your watch history please try again later",
        };
    }
}

export async function deleteWatchLater(
    userId: number,
    videoId: string
): Promise<WatchLater> {
    try {
        const { data: watchLater } = await axios.delete<WatchLater>(
            `${process.env.REACT_APP_API_ENDPOINT}/watchlater`,
            {
                data: {
                    userId,
                    videoId,
                },
            }
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
        return {} as WatchLater;
    }
}
