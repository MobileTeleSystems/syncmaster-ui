import { BaseButtonStyle } from "@entities/types";
import UserRoleElement from "@widgets/users/ui/list/userRoleElement";
import {
    Datagrid,
    DeleteButton,
    EditButton,
    TextField,
    useRefresh,
} from "react-admin";

const UserListElement = ({ group }: { group: string }) => {
    const refresh = useRefresh();
    const redirectTo = (resource: string, id: string, data: any) => {
        refresh();
        return "groups/" + group + "/show";
    };
    return (
        <Datagrid rowClick="show" resource={"users"}>
            <TextField source={"username"} />
            <TextField source="description" />
            <UserRoleElement source="role" />
            <EditButton
                resource={"users"}
                sx={BaseButtonStyle}
                label={"Edit role"}
            />
            <DeleteButton
                mutationMode={"pessimistic"}
                sx={BaseButtonStyle}
                mutationOptions={{ meta: { group: group } }}
                redirect={redirectTo}
                resource={"users"}
                confirmContent="Are you sure you would like to remove the user from the group?"
                confirmTitle="Remove the user from the group"
            />
        </Datagrid>
    );
};
export default UserListElement;
