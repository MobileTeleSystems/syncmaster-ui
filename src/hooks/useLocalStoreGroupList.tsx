import { useStore } from "react-admin";
import { GroupStateType } from "../types";

const useLocalStoreGroupList = () => {
    return useStore<GroupStateType[]>("groupList", []);
};

export default useLocalStoreGroupList;
