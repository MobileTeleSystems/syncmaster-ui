import { useStore } from "react-admin";

const useGroupIdInGroupMenuPage = () => {
    return useStore<string | undefined>("currentUserGroup", undefined);
};

export default useGroupIdInGroupMenuPage;
