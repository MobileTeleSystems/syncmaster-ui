import BaseList from "@entities/list/baseList";
import Connections from "@widgets/connection/ui/connectionListElement";

const ConnectionList = () => {
    return (
        <BaseList
            type={"connections"}
            title={"Connections"}
            element={<Connections />}
        />
    );
};

export default ConnectionList;
