import { useStore } from "react-admin";
import { ConnectionData } from "src/widgets/connections/types";

const useConnectionsList = () => {
    return useStore<ConnectionData[]>("connectionsList", []);
}

export default useConnectionsList;