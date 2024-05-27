import { useStore } from "react-admin";

const useLocalStoreChangeGroup = () => {
    return useStore<true | false>("isChangeGroup", false);
};

export default useLocalStoreChangeGroup;
