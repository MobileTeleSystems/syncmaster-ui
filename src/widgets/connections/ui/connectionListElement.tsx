import { Datagrid, DeleteButton, TextField } from "react-admin";

const ConnectionListElement = () => {
    return (
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField
                source="connection_data.type"
                label={"Connection Type"}
            />
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

export default ConnectionListElement;
