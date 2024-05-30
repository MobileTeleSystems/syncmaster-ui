import { type BaseListColumns, DeleteButtonStyle } from "@entities/types";
import { Datagrid, DeleteButton, TextField } from "react-admin";

const BaseDatagrid = ({
    additionColumns = [],
    name = "name",
    resource,
}: BaseListColumns) => {
    return (
        <Datagrid rowClick="show" resource={resource}>
            <TextField source={name} />
            <TextField source="description" />
            {additionColumns.map((column) => column)}
            <DeleteButton
                mutationMode="pessimistic"
                sx={DeleteButtonStyle}
            />
        </Datagrid>
    );
};

export default BaseDatagrid;
