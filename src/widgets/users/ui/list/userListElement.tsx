import { BaseButtonStyle } from "@entities/types";
import UserRoleElement from "@widgets/users/ui/list/userRoleElement";
import {
    Datagrid,
    DeleteButton,
    EditButton,
    TextField,
    useRecordContext,
    useRefresh,
} from "react-admin";

const UserListElement = () => {
    const refresh = useRefresh();
    const record = useRecordContext();
    const redirectTo = (resource: string, id: string, data: any) => {
        refresh();
        return "groups/" + record.currentUserGroup + "/show";
    };
    return (
        <Datagrid rowClick="show" resource={"users"}>
            <TextField source={"username"} />
            <TextField source="description" />
            <UserRoleElement source="role" />
            {/* TODO: It is possible to implement the SelectInput component with role selection without opening a new window */}
            <EditButton
                resource={"users"}
                sx={BaseButtonStyle}
                label={"Edit role"}
            />
            <DeleteButton
                mutationMode={"pessimistic"}
                sx={BaseButtonStyle}
                mutationOptions={{ meta: { group: record.currentUserGroup } }}
                redirect={redirectTo}
                resource={"users"}
                confirmContent="Are you sure you would like to remove the user from the group?"
                confirmTitle="Remove the user from the group"
            />
        </Datagrid>
    );
};
export default UserListElement;
