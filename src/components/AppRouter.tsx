import { Route, Routes, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../router/routes.tsx';
import { NOT_FOUND_ROUTE } from "../utils/consts.ts";
import {useUserStore} from "../store/UserStore.ts";

function AppRouter() {
    const isAuth = useUserStore((state) => state.isAuth);

    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}

            {publicRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}

            <Route path='*' element={<Navigate to={NOT_FOUND_ROUTE} replace />} />
        </Routes>
    )
}

export default AppRouter;