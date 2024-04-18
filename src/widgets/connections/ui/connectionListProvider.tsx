import useLocalStoreCurrentGroup from "src/hooks/useLocalStoreCurrentGroup";
import useLocalStoreGroupList from "src/hooks/useLocalStoreGroupList";
import NoGroupsAvailable from "src/shared/ui/noGroupsAvailable";
import NotSelectedGroup from "src/shared/ui/notSelectedGroup";
import ConnectionList from "src/widgets/connections/ui/connectionList";

const ConnectionListProvider = () => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    const [groupList] = useLocalStoreGroupList();

    if (groupList.length == 0) return <NoGroupsAvailable />;

    if (groupList.length > 0 && currentGroup.label == "")
        return <NotSelectedGroup />;

    return <ConnectionList />;
};

export default ConnectionListProvider;
