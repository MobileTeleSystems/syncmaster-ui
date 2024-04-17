import useLocalStoreCurrentGroup from "../../../hooks/useLocalStoreCurrentGroup";
import NotSelectedGroup from "../../../shared/ui/notSelectedGroup";
import ConnectionList from "./connectionList";
import useLocalStoreGroupList from "../../../hooks/useLocalStoreGroupList";
import NotAnyGroupAvailable from "../../../shared/ui/notAnyGroupAvailable";

const ConnetionListProvider = () => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    const [groupList] = useLocalStoreGroupList();

    if (groupList.length == 0) return <NotAnyGroupAvailable />;

    if (groupList.length > 0 && currentGroup == "") return <NotSelectedGroup />;

    return <ConnectionList />;
};

export default ConnetionListProvider;
