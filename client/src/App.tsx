import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
    Home,
    Playlists,
    WatchLater,
    History,
    Liked,
    Profile,
    Settings,
    Login,
    Signup,
    Page404,
    VideoPlayer,
    PlaylistPage,
} from "./pages";
import {
    BottomNav,
    Header,
    PrivateRoute,
    AddToPlayListModal,
    SidePannel,
    SidePannelMinimal,
} from "./components";
import { getUserFromLocalStorage } from "./utils/localStorageOperations";
import { useReducerContext } from "./context/ReducerContext";
import {
    setupAuthExceptionHandler,
    setupAuthHeaderForServiceCalls,
} from "./services/authHandlers";
import { loadInitialData } from "./utils/loadInitialData";
import { useAppContext } from "./context/AppContext";

function App() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { dispatch } = useReducerContext();
    const { setDisplayActionMenu, showAddToPlaylistMenu } = useAppContext();

    const user = JSON.parse(getUserFromLocalStorage());
    useEffect(() => {
        setupAuthHeaderForServiceCalls(user?.jwt);
        setupAuthExceptionHandler(dispatch, navigate);
        loadInitialData(user, dispatch);
    }, []);

    return (
        <div onClick={() => setDisplayActionMenu(false)}>
            {showAddToPlaylistMenu && <AddToPlayListModal />}
            <Header />
            <SidePannel />
            <SidePannelMinimal />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:videoId" element={<VideoPlayer />} />
                <Route
                    path="/liked"
                    element={
                        <PrivateRoute path="/liked">
                            <Liked />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/playlists"
                    element={
                        <PrivateRoute path="/playlists">
                            <Playlists />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/playlist/:playlistId"
                    element={
                        <PrivateRoute path={`${pathname}`}>
                            <PlaylistPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/watchlater"
                    element={
                        <PrivateRoute path="/watchlater">
                            <WatchLater />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/history"
                    element={
                        <PrivateRoute path="/history">
                            <History />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute path="/profile">
                            <Profile />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <PrivateRoute path="/settings">
                            <Settings />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
            <BottomNav />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}

export default App;
