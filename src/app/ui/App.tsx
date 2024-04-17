import {
    Admin,
    localStorageStore,
    Resource,
    StoreContextProvider,
    useStore,
} from "react-admin";

import authProvider from "../api/authProvider";
import { Layout, Login } from "../../widgets/layout/ui";
import { ThemeName, themes } from "../../themes/themes";
import dataProvider from "../api/dataProvider";
import ConnetionListProvider from "../../widgets/connections/ui/connetionListProvider";
import showPostgresConnection from "../../widgets/connections/ui/showConnection/connection";

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
            <Resource name="connections" list={ConnetionListProvider} show={showPostgresConnection} />
        </Admin>
    );
};

const AppWrapper = () => (
    <StoreContextProvider value={store}>
        <App />
    </StoreContextProvider>
);

export default AppWrapper;
