import { useStore } from "react-admin";
import { GroupSelectorElement } from "src/hooks/types";

const useLocalStoreCurrentGroup = () => {
    return useStore<GroupSelectorElement | "">("currentGroup", "");
};

export default useLocalStoreCurrentGroup;
