import { useStore } from "react-admin";
import { Group } from "@hooks/types";

const useLocalStoreGroupList = () => {
    return useStore<Group[]>("groupList", []);
};

export default useLocalStoreGroupList;
