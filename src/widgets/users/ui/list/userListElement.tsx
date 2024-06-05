import { DeleteButtonStyle } from "@entities/types";
import UserRoleElement from "@widgets/users/ui/list/userRoleElement";
import { Button, Datagrid, DeleteButton, TextField } from "react-admin";

const UserListElement = () => {
    return (
        <Datagrid rowClick="show" resource={"users"}>
            <TextField source={"username"} />
            <TextField source="description" />
            <UserRoleElement source="role" />
            <Button label={"Change role"} sx={DeleteButtonStyle} />
            <DeleteButton mutationMode="pessimistic" sx={DeleteButtonStyle} />
        </Datagrid>
    );
};

export default UserListElement;
