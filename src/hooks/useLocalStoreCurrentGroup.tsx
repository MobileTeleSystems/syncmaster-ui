import { useStore } from "react-admin";
import { GroupSelectorElement } from "@hooks/types";

const useLocalStoreCurrentGroup = () => {
    return useStore<GroupSelectorElement>("currentGroup", { label: "" });
};

export default useLocalStoreCurrentGroup;
