import {
    Admin,
    localStorageStore,
    Login,
    Resource,
    StoreContextProvider,
    useStore,
} from "react-admin";
import authProvider from "src/shared/api/authProvider";
import dataProvider from "src/shared/api/dataProviderCombiner";
import { ThemeName, themes } from "src/themes/themes";
import ConnectionListProvider from "src/widgets/connections/ui/connectionListProvider";
import ShowConnectionProvider from "src/widgets/connections/ui/showConnectionProvider";
import { Layout } from "src/widgets/layout/ui";

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
                list={ConnectionListProvider}
                show={ShowConnectionProvider}
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
