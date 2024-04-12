import { useStore } from "react-admin";
import { Group } from "../types";

const useLocalStoreCurrentGroup = () => {
    return useStore<Group | null>("currentGroup", null);
};

export default useLocalStoreCurrentGroup;
