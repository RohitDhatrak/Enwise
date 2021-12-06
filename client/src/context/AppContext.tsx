import { useContext, createContext, useState } from "react";
import { Children } from "../types/types";

type AppContextTypes = {
    displayActionMenu: boolean | number;
    setDisplayActionMenu: Function;
};

const AppContext = createContext<AppContextTypes>({} as AppContextTypes);

export function AppContextProvider({ children }: Children) {
    const [displayActionMenu, setDisplayActionMenu] = useState<
        boolean | number
    >(false);

    const data: AppContextTypes = {
        displayActionMenu,
        setDisplayActionMenu,
    };
    return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    return useContext(AppContext);
}
