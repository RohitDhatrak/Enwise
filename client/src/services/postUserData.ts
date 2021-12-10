import axios, { AxiosError } from "axios";
import {
    Liked,
    ServerError,
    Playlist,
    History,
    WatchLater,
} from "../types/types";

export async function addPlaylist(
    userId: number,
    title: string
): Promise<Playlist> {
    try {
        const { data: playlist } = await axios.post<Playlist>(
            `${process.env.REACT_APP_API_ENDPOINT}/playlists`,
            {
                userId,
                title,
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

export async function addToPlaylist(
    userId: number,
    videoId: string,
    playlistId: number
): Promise<Playlist[]> {
    try {
        const { data: playlist } = await axios.post<Playlist[]>(
            `${process.env.REACT_APP_API_ENDPOINT}/playlistVideos/${playlistId}`,
            {
                userId,
                videoId,
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

export async function addLikedVideo(
    userId: number,
    videoId: string
): Promise<Liked> {
    try {
        const { data: likedVideos } = await axios.post<Liked>(
            `${process.env.REACT_APP_API_ENDPOINT}/liked`,
            {
                userId,
                videoId,
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

export async function addHistory(
    userId: number,
    videoId: string
): Promise<History> {
    try {
        const { data: history } = await axios.post<History>(
            `${process.env.REACT_APP_API_ENDPOINT}/history`,
            {
                userId,
                videoId,
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

export async function addToWatchLater(
    userId: number,
    videoId: string
): Promise<WatchLater> {
    try {
        const { data: watchLater } = await axios.post<WatchLater>(
            `${process.env.REACT_APP_API_ENDPOINT}/watchlater`,
            {
                userId,
                videoId,
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

export async function updatePassword(
    oldPassword: string,
    newPassword: string,
    userId: number
) {
    try {
        const { data } = await axios.post(
            `${process.env.REACT_APP_API_ENDPOINT}/user/password`,
            {
                oldPassword,
                newPassword,
                userId,
            }
        );
        return data;
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
            success: false,
            message: "Couldn't change the password please try again later",
        };
    }
}
