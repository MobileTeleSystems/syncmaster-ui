import useLocalStoreCurrentGroup from "src/hooks/useLocalStoreCurrentGroup";
import useLocalStoreGroupList from "src/hooks/useLocalStoreGroupList";
import NotAnyGroupAvailable from "src/shared/ui/notAnyGroupAvailable";
import NotSelectedGroup from "src/shared/ui/notSelectedGroup";
import ConnectionList from "src/widgets/connections/ui/connectionList";

const ConnetionListProvider = () => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    const [groupList] = useLocalStoreGroupList();

    if (groupList.length == 0) return <NotAnyGroupAvailable />;

    if (groupList.length > 0 && currentGroup.label == "")
        return <NotSelectedGroup />;

    return <ConnectionList />;
};

export default ConnetionListProvider;
