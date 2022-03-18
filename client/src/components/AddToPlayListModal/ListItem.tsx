import { useState } from "react";
import { FlexContainer } from "../Shared";
import { addOrRemoveFromPlaylist } from "../../utils/dataOperations";
import { InputEvent, PlaylistVideo, User, Playlist } from "../../types/types";
import { useAppContext } from "../../context/AppContext";

interface ListItemProps {
    playlistArray: PlaylistVideo[];
    user: User;
    playlist: Playlist;
    playlists: Playlist[];
    dispatch: Function;
    loading: boolean;
}

export function ListItem({
    playlistArray,
    user,
    playlist,
    playlists,
    dispatch,
    loading,
}: ListItemProps) {
    const { videoToBeAddedToPlaylist } = useAppContext();
    const [isAddingToPlaylist, setIsAddingToPlaylist] = useState(false);
    const [isRemovingFromPlaylist, setIsRemovingFromPlaylist] = useState(false);

    function isChecked(playlistId: number) {
        return !!playlistArray.find(
            (playlist: PlaylistVideo) => playlist.playlistId === playlistId
        );
    }

    return (
        <FlexContainer
            color="#fff"
            p="0.5em 0"
            align="center"
            onChange={(e: InputEvent) =>
                addOrRemoveFromPlaylist(
                    e,
                    user.id,
                    videoToBeAddedToPlaylist,
                    playlist.id,
                    playlists,
                    dispatch,
                    isAddingToPlaylist,
                    setIsAddingToPlaylist,
                    isRemovingFromPlaylist,
                    setIsRemovingFromPlaylist,
                    loading
                )
            }
        >
            <input
                type="checkbox"
                id={playlist.title + playlist.id}
                name={playlist.title}
                checked={isChecked(playlist.id)}
                style={{ cursor: "pointer" }}
            />
            <label
                htmlFor={playlist.title + playlist.id}
                style={{
                    cursor: "pointer",
                    paddingLeft: "1em",
                }}
            >
                {playlist.title}
                {isAddingToPlaylist && " (adding...)"}
                {isRemovingFromPlaylist && " (removing...)"}
            </label>
        </FlexContainer>
    );
}
