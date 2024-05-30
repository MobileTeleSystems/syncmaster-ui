import type { BaseListColumns } from "@entities/types";
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
                sx={{
                    bgcolor: "background.paper",
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                }}
            />
        </Datagrid>
    );
};

export default BaseDatagrid;
