import { useStore } from "react-admin";

const useLocalStoreCurrentGroup = () => {
    return useStore<string>("currentGroup", "");
};

export default useLocalStoreCurrentGroup;
