import { useStore } from "react-admin";

const useLocalStoreCurrentUserGroup = () => {
    return useStore<string | undefined>("currentUserGroup", undefined);
};

export default useLocalStoreCurrentUserGroup;
