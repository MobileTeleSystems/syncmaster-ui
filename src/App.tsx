import ConnectionCreate from "@entities/ConnectionCreate";
import authProvider from "@shared/api/authProvider";
import dataProvider from "@shared/api/dataProvider";
import { ThemeName, themes } from "@themes/themes";
import ConnectionEditWrapper from "@widgets/connections/ui/wrappers/connectionEditWrapper";
import ConnectionListWrapper from "@widgets/connections/ui/wrappers/connectionListWrapper";
import ConnectionShowWrapper from "@widgets/connections/ui/wrappers/connectionShowWrapper";
import { Layout } from "@widgets/layout/ui";
import {
    Admin,
    localStorageStore,
    Login,
    Resource,
    StoreContextProvider,
    useStore,
} from "react-admin";

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
                show={ConnectionShowWrapper}
                edit={ConnectionEditWrapper}
                create={ConnectionCreate}
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
