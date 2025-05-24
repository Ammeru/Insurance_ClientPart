import type { ReactElement } from "react";

import HomePage from "../pages/HomePage.tsx";
import AuthPage from "../pages/AuthPage.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import InfoCargoInsurancePage from "../pages/InfoCargoInsurancePage.tsx";
import InfoResponsibilityInsurancePage from "../pages/InfoResponsibilityInsurancePage.tsx";
import InfoMultipleInsurancePage from "../pages/InfoMultipleInsurancePage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";

import UserMainProfilePage from "../pages/AuthPages/UserPages/UserMainProfilePage.tsx";
import ProfileSettingsPage from "../pages/AuthPages/UserPages/ProfileSettingsPage.tsx";
import MyPolicyDetailsPage from "../pages/AuthPages/UserPages/MyPolicyDetailsPage.tsx";

import CreateCargoInsurancePage from "../pages/AuthPages/InsurancePages/CreateCargoInsurancePage.tsx";
import CreateResponsibilityInsurancePage from "../pages/AuthPages/InsurancePages/CreateResponsibilityInsurancePage.tsx";
import CreateMultipleInsurancePage from "../pages/AuthPages/InsurancePages/CreateMultipleInsurancePage.tsx";

import AdminMainInsuranceListPage from "../pages/AdminPages/AdminMainInsuranceListPage.tsx";
import InsuranceDetailsPage from "../pages/AdminPages/InsuranceDetailsPage.tsx";
import UserListPage from "../pages/AdminPages/UsersListPage.tsx";
import UserDetailsPage from "../pages/AdminPages/UserDetailsPage.tsx";

import {
    HOME_ROUTE,
    AUTH_ROUTE,
    ABOUT_ROUTE,
    INFO_CARGO_ROUTE,
    INFO_RESPONSIBILITY_ROUTE,
    INFO_MULTIPLE_ROUTE,
    NOT_FOUND_ROUTE,
    PROFILE_ROUTE,
    PROFILE_SETTINGS_ROUTE,
    MY_POLICY_DETAILS_ROUTE,
    CREATE_CARGO_ROUTE,
    CREATE_RESPONSIBILITY_ROUTE,
    CREATE_MULTIPLE_ROUTE,
    ADMIN_ROUTE,
    INSURANCE_DETAILS_ROUTE,
    USER_LIST_ROUTE,
    USER_DETAILS_ROUTE
} from '../utils/consts.ts';

interface AppRoute {
    path: string;
    element: ReactElement;
}

export const publicRoutes: AppRoute[] = [
    { path: HOME_ROUTE, element: <HomePage/> },
    { path: AUTH_ROUTE, element: <AuthPage/> },
    { path: ABOUT_ROUTE, element: <AboutPage/> },
    { path: INFO_CARGO_ROUTE, element: <InfoCargoInsurancePage/> },
    { path: INFO_RESPONSIBILITY_ROUTE, element: <InfoResponsibilityInsurancePage/> },
    { path: INFO_MULTIPLE_ROUTE, element: <InfoMultipleInsurancePage/> },
    { path: NOT_FOUND_ROUTE, element: <NotFoundPage/> },
];

export const authRoutes: AppRoute[] = [
    { path: PROFILE_ROUTE, element: <UserMainProfilePage/> },
    { path: PROFILE_SETTINGS_ROUTE, element: <ProfileSettingsPage/> },
    { path: MY_POLICY_DETAILS_ROUTE + '/:id', element: <MyPolicyDetailsPage/> },
    { path: CREATE_CARGO_ROUTE, element: <CreateCargoInsurancePage/> },
    { path: CREATE_RESPONSIBILITY_ROUTE, element: <CreateResponsibilityInsurancePage/> },
    { path: CREATE_MULTIPLE_ROUTE, element: <CreateMultipleInsurancePage/> },
    { path: ADMIN_ROUTE, element: <AdminMainInsuranceListPage/> },
    { path: INSURANCE_DETAILS_ROUTE + '/:id', element: <InsuranceDetailsPage/> },
    { path: USER_LIST_ROUTE, element: <UserListPage/> },
    { path: USER_DETAILS_ROUTE + '/:id', element: <UserDetailsPage/> },
];