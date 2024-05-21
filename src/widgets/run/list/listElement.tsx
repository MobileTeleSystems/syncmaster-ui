import { Datagrid, DeleteButton, TextField } from "react-admin";

const RunListElement = (): JSX.Element => {
    return (
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="started_at" />
            <TextField source="ended_at" />
            <TextField source="status" />
            <TextField source="log_url" />
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

export default RunListElement;
