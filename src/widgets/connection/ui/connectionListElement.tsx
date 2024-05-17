import BaseDatagrid from "@entities/list/baseDatagrid";
import { TextField } from "react-admin";

const ConnectionListElement = () => {
    return (
        <BaseDatagrid
            additionColumns={
                <TextField
                    source="connection_data.type"
                    label={"Connection Type"}
                />
            }
        />
    );
};

export default ConnectionListElement;
