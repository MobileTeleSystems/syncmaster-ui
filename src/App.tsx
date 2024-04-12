import {
    Admin,
    localStorageStore,
    Resource,
    StoreContextProvider,
    useStore,
} from "react-admin";

import authProvider from "./authProvider";
import { Layout, Login } from "./layout";
import { ThemeName, themes } from "./themes/themes";
import syncMasterDataProvider from "./dataProvider/syncMasterDataProvider";
import DummyList from "./components/dummyList";

const store = localStorageStore(undefined, "SyncMaster");

const App = () => {
    const [themeName] = useStore<ThemeName>("themeName", "soft");
    const lightTheme = themes.find((theme) => theme.name === themeName)?.light;
    const darkTheme = themes.find((theme) => theme.name === themeName)?.dark;
    return (
        <Admin
            title="SyncMaster"
            dataProvider={syncMasterDataProvider}
            store={store}
            authProvider={authProvider}
            loginPage={Login}
            layout={Layout}
            disableTelemetry
            lightTheme={lightTheme}
            darkTheme={darkTheme}
            defaultTheme="light"
        >
            <Resource name="dummy" list={DummyList} />
        </Admin>
    );
};

const AppWrapper = () => (
    <StoreContextProvider value={store}>
        <App />
    </StoreContextProvider>
);

export default AppWrapper;
