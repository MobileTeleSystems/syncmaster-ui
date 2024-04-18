import { useStore } from "react-admin";
import { Group } from "src/hooks/types";

const useLocalStoreGroupList = () => {
    return useStore<Group[]>("groupList", []);
};

export default useLocalStoreGroupList;