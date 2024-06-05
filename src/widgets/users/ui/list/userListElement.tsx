import { BaseButtonStyle } from "@entities/types";
import UserRoleElement from "@widgets/users/ui/list/userRoleElement";
import { Datagrid, DeleteButton, EditButton, TextField } from "react-admin";

const UserListElement = () => {
    return (
        <Datagrid rowClick="show" resource={"users"}>
            <TextField source={"username"} />
            <TextField source="description" />
            <UserRoleElement source="role" />
            <EditButton resource={"users"} sx={BaseButtonStyle} />
            <DeleteButton mutationMode="pessimistic" sx={BaseButtonStyle} resource={"users"}/>
        </Datagrid>
    );
};

export default UserListElement;
