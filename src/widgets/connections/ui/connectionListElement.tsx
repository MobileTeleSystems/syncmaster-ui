import {
    CreateButton,
    Datagrid,
    DateField,
    DeleteButton,
    EditButton,
    TextField
} from "react-admin";

const ConnectionListElement = () => {
    return (
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DeleteButton />
        </Datagrid>
    );
};

export default ConnectionListElement;
