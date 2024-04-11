import { useStore } from "react-admin";
import { GroupState } from "../types";

const useLocalStoreCurrentGroup = () => {
    return useStore<GroupState | null>("currentGroup", null);
};

export default useLocalStoreCurrentGroup;
