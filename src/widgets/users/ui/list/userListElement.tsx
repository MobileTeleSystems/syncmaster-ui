import { BaseButtonStyle } from "@entities/types";
import UserRoleElement from "@widgets/users/ui/list/userRoleElement";
import { Datagrid, DeleteButton, EditButton, TextField } from "react-admin";

const UserListElement = ({ group }: { group: string }) => {
    return (
        <Datagrid rowClick="show" resource={"users"}>
            <TextField source={"username"} />
            <TextField source="description" />
            <UserRoleElement source="role" />
            <EditButton resource={"users"} sx={BaseButtonStyle} label={"Edit role"}/>
            <DeleteButton
                mutationMode={"pessimistic"}
                sx={BaseButtonStyle}
                mutationOptions={{ meta: { group: group } }}
                redirect={"groups/" + group + "/show"}
                resource={"users"}
                confirmContent="Are you sure you would like to remove the user from the group?"
                confirmTitle="Remove the user from the group"
            />
        </Datagrid>
    );
};
export default UserListElement;
