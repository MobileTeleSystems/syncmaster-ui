import { useStore } from "react-admin";

const useLocalStoreCurrentMenuGroup = () => {
    return useStore<string | undefined>("currentUserGroup", undefined);
};

export default useLocalStoreCurrentMenuGroup;
