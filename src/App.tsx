import TransferListWrapper from "@entities/transfer/ui/list/transferListWrapper";
import GroupsIcon from "@mui/icons-material/Groups";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import MoveUpIcon from "@mui/icons-material/MoveUp";
import authProvider from "@shared/api/authProvider";
import dataProvider from "@shared/api/dataProvider";
import { ThemeName, themes } from "@themes/themes";
import ConnectionCreate from "@widgets/connection/ui/connectionCreate";
import ConnectionEditWrapper from "@widgets/connection/ui/wrappers/connectionEditWrapper";
import ConnectionListWrapper from "@widgets/connection/ui/wrappers/connectionListWrapper";
import ConnectionShowWrapper from "@widgets/connection/ui/wrappers/connectionShowWrapper";
import GroupCreate from "@widgets/groups/ui/groupCreate";
import GroupEdit from "@widgets/groups/ui/groupEdit";
import GroupShow from "@widgets/groups/ui/groupShow";
import GroupList from "@widgets/groups/ui/list/groupList";
import { Layout } from "@widgets/layout/ui";
import QueueListWrapper from "@widgets/queue/ui/list/queueListWrapper";
import QueueCreate from "@widgets/queue/ui/queueCreate";
import QueueEdit from "@widgets/queue/ui/queueEdit";
import QueueShow from "@widgets/queue/ui/queueShow";
import RunList from "@widgets/run/ui/list/runList";
import RunShow from "@widgets/run/ui/show/runShow";
import TransferCreate from "@widgets/transfer/ui/transferCreate";
import TransferEdit from "@widgets/transfer/ui/transferEdit";
import TransferShow from "@widgets/transfer/ui/transferShow";
import UserAddToGroup from "@widgets/users/ui/userAddToGroup";
import UserEditRole from "@widgets/users/ui/userEditRole";
import UserShow from "@widgets/users/ui/userShow";
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
                name="transfers"
                list={TransferListWrapper}
                show={TransferShow}
                edit={TransferEdit}
                create={TransferCreate}
                icon={MoveUpIcon}
            />
            <Resource name="runs" list={RunList} show={RunShow} />
            <Resource
                name="connections"
                list={ConnectionListWrapper}
                show={ConnectionShowWrapper}
                edit={ConnectionEditWrapper}
                create={ConnectionCreate}
            />
            <Resource
                name="queues"
                list={QueueListWrapper}
                show={QueueShow}
                edit={QueueEdit}
                create={QueueCreate}
                icon={LayersRoundedIcon}
            />
            <Resource
                name="groups"
                list={GroupList}
                show={GroupShow}
                edit={GroupEdit}
                create={GroupCreate}
                icon={GroupsIcon}
            />
            <Resource
                name="users"
                show={UserShow}
                edit={UserEditRole}
                create={UserAddToGroup}
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
