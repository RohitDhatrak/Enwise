import { useContext, createContext, useState } from "react";
import { Children, Category } from "../types/types";

type AppContextTypes = {
    displayActionMenu: boolean | number;
    setDisplayActionMenu: Function;
    showAddToPlaylistMenu: boolean;
    toggleAddToPlaylistMenu: Function;
    videoToBeAddedToPlaylist: string;
    setVideoToBeAddedToPlaylist: Function;
    actionMenuId: string | number;
    setActionMenuId: Function;
    searchQuery: string;
    setSearchQuery: Function;
    categories: Category[];
    setCategories: Function;
};

const AppContext = createContext<AppContextTypes>({} as AppContextTypes);

export function AppContextProvider({ children }: Children) {
    const [displayActionMenu, setDisplayActionMenu] = useState(false);
    const [actionMenuId, setActionMenuId] = useState<string | number>("");
    const [showAddToPlaylistMenu, toggleAddToPlaylistMenu] = useState(false);
    const [videoToBeAddedToPlaylist, setVideoToBeAddedToPlaylist] =
        useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [categories, setCategories] = useState([]);

    const data: AppContextTypes = {
        displayActionMenu,
        setDisplayActionMenu,
        showAddToPlaylistMenu,
        toggleAddToPlaylistMenu,
        videoToBeAddedToPlaylist,
        setVideoToBeAddedToPlaylist,
        actionMenuId,
        setActionMenuId,
        searchQuery,
        setSearchQuery,
        categories,
        setCategories,
    };
    return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    return useContext(AppContext);
}
