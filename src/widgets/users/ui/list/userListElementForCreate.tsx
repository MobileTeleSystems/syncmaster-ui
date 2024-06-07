import { Datagrid, TextField } from "react-admin";

const UserListElementForCreate = ({ setUser }) => {
    return (
        <Datagrid
            rowClick={(id, resource, element) => {
                setUser({ user: element.username, id: id });
            }}
        >
            <TextField source={"username"} name={"username"} />
            <TextField source="description" name={"description"} />
        </Datagrid>
    );
};

export default UserListElementForCreate;
