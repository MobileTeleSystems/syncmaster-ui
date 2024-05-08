import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
import useLocalStoreGroupList from "@hooks/useLocalStoreGroupList";
import Warning from "@shared/ui/warning";
import ConnectionList from "@widgets/connections/ui/connectionList";

const ConnectionListWrapper = () => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    const [groupList] = useLocalStoreGroupList();

    if (groupList.length == 0)
        return <Warning message="No groups available." />;

    if (groupList.length > 0 && currentGroup.label == "")
        return <Warning message="Please, select a group." />;

    return <ConnectionList />;
};

export default ConnectionListWrapper;
