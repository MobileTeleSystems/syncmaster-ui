import { type BaseListColumns, BaseButtonStyle } from "@entities/types";
import { Datagrid, DeleteButton, TextField } from "react-admin";

const BaseDatagrid = ({
    additionColumns = [],
    name = "name",
    resource,
    isDeletable = true,
}: BaseListColumns) => {
    return (
        <Datagrid rowClick="show" resource={resource}>
            <TextField source={name} />
            <TextField source="description" />
            {additionColumns.map((column) => column)}
            {isDeletable && (
                <DeleteButton mutationMode="pessimistic" sx={BaseButtonStyle} />
            )}
        </Datagrid>
    );
};

export default BaseDatagrid;
