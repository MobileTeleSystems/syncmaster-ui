import { Datagrid, TextField } from "react-admin";

const UserListElementForCreate = ({ setUser, setUserId }) => {
    return (
        <Datagrid
            rowClick={(id, resource, element) => {
                setUser(element.username);
                setUserId(id);
            }}
        >
            <TextField source={"username"} name={"username"} />
            <TextField source="description" name={"description"} />
        </Datagrid>
    );
};

export default UserListElementForCreate;
