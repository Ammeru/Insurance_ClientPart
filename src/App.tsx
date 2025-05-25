import { useEffect } from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter.tsx";
import { useUserStore} from "./store/UserStore.ts";

function App() {
    const checkAuth = useUserStore((state) => state.checkAuth);

    useEffect(() => {
        void checkAuth();
    }, [checkAuth]);

    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}

export default App
