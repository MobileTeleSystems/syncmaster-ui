import { useStore } from "react-admin";
import { ConnectionData } from "src/app/types";

const useConnectionsList = () => {
    return useStore<ConnectionData[]>("connectionsList", []);
}

export default useConnectionsList;