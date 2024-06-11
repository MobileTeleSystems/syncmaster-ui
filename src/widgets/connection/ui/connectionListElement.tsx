import BaseDatagrid from "@entities/base/list/baseDatagrid";
import { TextField } from "react-admin";

const ConnectionListElement = () => {
    return (
        <BaseDatagrid
            additionColumns={[
                <TextField
                    source="connection_data.type"
                    label={"Connection Type"}
                />,
            ]}
            resource={"connections"}
        />
    );
};

export default ConnectionListElement;
