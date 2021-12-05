import axios, { AxiosError } from "axios";
import { Video, ServerError } from "../types/types";

export async function getVideos(): Promise<Video[]> {
    try {
        const { data: videos } = await axios.get<Video[]>(
            `${process.env.REACT_APP_API_ENDPOINT}/video`
        );
        return videos;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            if (serverError.response && serverError.response?.data) {
                console.log(serverError.response.data.message);
                return [];
            }
        }
        console.log({ error });
        return [];
    }
}
