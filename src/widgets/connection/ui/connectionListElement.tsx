import BaseListDatagridColumns from "@entities/list/baseListDatagridColumns";
import { TextField } from "react-admin";

const ConnectionListElement = () => {
    return (
        <BaseListDatagridColumns
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
