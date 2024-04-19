import {
    Admin,
    localStorageStore,
    Login,
    Resource,
    StoreContextProvider,
    useStore,
} from "react-admin";
import authProvider from "@shared/api/authProvider";
import dataProvider from "@shared/api/dataProvider";
import { ThemeName, themes } from "@themes/themes";
import ConnectionListWrapper from "@widgets/connections/ui/connectionListWrapper";
import ConnectionWrapper from "@widgets/connections/ui/connectionWrapper";
import { Layout } from "@widgets/layout/ui";

const store = localStorageStore(undefined, "SyncMaster");

const App = () => {
    const [themeName] = useStore<ThemeName>("themeName", "soft");
    const lightTheme = themes.find((theme) => theme.name === themeName)?.light;
    const darkTheme = themes.find((theme) => theme.name === themeName)?.dark;
    return (
        <Admin
            title="SyncMaster"
            dataProvider={dataProvider}
            store={store}
            authProvider={authProvider}
            loginPage={Login}
            layout={Layout}
            disableTelemetry
            lightTheme={lightTheme}
            darkTheme={darkTheme}
            defaultTheme="light"
        >
            <Resource
                name="connections"
                list={ConnectionListWrapper}
                show={ConnectionWrapper}
            />
        </Admin>
    );
};

const AppWrapper = () => (
    <StoreContextProvider value={store}>
        <App />
    </StoreContextProvider>
);

export default AppWrapper;
