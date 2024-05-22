import ConnectionCreate from "@entities/connection/connectionCreate";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import MoveUpIcon from "@mui/icons-material/MoveUp";
import authProvider from "@shared/api/authProvider";
import dataProvider from "@shared/api/dataProvider";
import { ThemeName, themes } from "@themes/themes";
import ConnectionEditWrapper from "@widgets/connection/ui/wrappers/connectionEditWrapper";
import ConnectionListWrapper from "@widgets/connection/ui/wrappers/connectionListWrapper";
import ConnectionShowWrapper from "@widgets/connection/ui/wrappers/connectionShowWrapper";
import { Layout } from "@widgets/layout/ui";
import QueueList from "@widgets/queue/ui/list/queueList";
import QueueCreate from "@widgets/queue/ui/queueCreate";
import QueueEdit from "@widgets/queue/ui/queueEdit";
import QueueShow from "@widgets/queue/ui/queueShow";
import TransferList from "@widgets/transfer/ui/list/transferList";
import TransferCreate from "@widgets/transfer/ui/transferCreate";
import TransferEdit from "@widgets/transfer/ui/edit/transferEdit";
import TransferShow from "@widgets/transfer/ui/transferShow";
import {
    Admin,
    localStorageStore,
    Login,
    Resource,
    StoreContextProvider,
    useStore,
} from "react-admin";
import RunShow from "@widgets/run/ui/runShow";

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
                name="transfers"
                list={TransferList}
                show={TransferShow}
                edit={TransferEdit}
                create={TransferCreate}
                icon={MoveUpIcon}
            />
            <Resource
                name="connections"
                list={ConnectionListWrapper}
                show={ConnectionShowWrapper}
                edit={ConnectionEditWrapper}
                create={ConnectionCreate}
            />
            <Resource
                name="queues"
                list={QueueList}
                show={QueueShow}
                edit={QueueEdit}
                create={QueueCreate}
                icon={LayersRoundedIcon}
            />
            <Resource
                name="runs"
                show={RunShow}
                icon={CompareArrowsIcon}
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
