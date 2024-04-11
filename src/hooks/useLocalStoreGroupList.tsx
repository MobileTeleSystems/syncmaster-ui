import { useStore } from "react-admin";
import { GroupState } from "../types";

const useLocalStoreGroupList = () => {
    return useStore<GroupState[]>("groupList", []);
};

export default useLocalStoreGroupList;
