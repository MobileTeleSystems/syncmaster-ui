import { Datagrid, DeleteButton, TextField } from "react-admin";

const ConnectionListElement = () => {
    return (
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
    );
};

export default ConnectionListElement;
