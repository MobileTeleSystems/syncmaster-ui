import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
import useLocalStoreGroupList from "@hooks/useLocalStoreGroupList";
import Warning from "@shared/ui/warning";
import GroupList from "@widgets/groups/ui/list/groupList";

const GroupListWrapper = () => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    const [groupList] = useLocalStoreGroupList();

    if (groupList.length == 0)
        return <Warning message="No groups available." />;

    if (groupList.length > 0 && currentGroup.label == "")
        return <Warning message="Please, select a group." />;

    return <GroupList />;
};

export default GroupListWrapper;
