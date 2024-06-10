import { useStore } from "react-admin";

const useEnableGroupSelector = () => {
    return useStore<true | false>("isChangeGroup", false);
};

export default useEnableGroupSelector;
