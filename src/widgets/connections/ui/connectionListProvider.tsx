import useLocalStoreCurrentGroup from "src/hooks/useLocalStoreCurrentGroup";
import useLocalStoreGroupList from "src/hooks/useLocalStoreGroupList";
import Warning from "src/shared/ui/warning";
import ConnectionList from "src/widgets/connections/ui/connectionList";

const ConnectionListProvider = () => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    const [groupList] = useLocalStoreGroupList();

    if (groupList.length == 0)
        return <Warning message="No groups available." />;

    if (groupList.length > 0 && currentGroup.label == "")
        return <Warning message="Please, select a group." />;

    return <ConnectionList />;
};

export default ConnectionListProvider;
