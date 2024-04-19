import { Datagrid, DateField, TextField } from "react-admin";

const ConnectionListElement = () => {
    return (
        <Datagrid rowClick="show">
            <TextField source="id"/>
            <TextField source="name" />
            <DateField source="description" />
        </Datagrid>
    );
};

export default ConnectionListElement;
