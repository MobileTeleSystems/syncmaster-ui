import { useStore } from "react-admin";

const useLocalStoreCurrentMenuGroupId = () => {
    return useStore<string | undefined>("currentUserGroup", undefined);
};

export default useLocalStoreCurrentMenuGroupId;
