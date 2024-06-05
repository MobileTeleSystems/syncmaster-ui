import { BaseButtonStyle } from "@entities/types";
import Error from "@shared/ui/error";
import UserRoleElement from "@widgets/users/ui/list/userRoleElement";
import {
    Button,
    Datagrid,
    EditButton,
    TextField,
    useDelete,
    useRecordContext,
    useRedirect,
} from "react-admin";

const DeleteButton = ({ group }: { group: string }) => {
    const record = useRecordContext();
    const [deleteOne, { isLoading, error }] = useDelete("users", {
        id: record.id,
        previousData: record,
        meta: { group: group },
    });

    const handleClick = () => {
        deleteOne();
    };

    if (error) return <Error message={error} />;
    return (
        <div>
            <Button
                variant="text"
                disabled={isLoading}
                onClick={handleClick}
                label={"Delete from group"}
                sx={{ ...BaseButtonStyle, color: "crimson" }}
            ></Button>
        </div>
    );
};

const UserListElement = ({ group }: { group: string }) => {
    return (
        <Datagrid rowClick="show" resource={"users"}>
            <TextField source={"username"} />
            <TextField source="description" />
            <UserRoleElement source="role" />
            <EditButton resource={"users"} sx={BaseButtonStyle} />
            <DeleteButton group={group} />
        </Datagrid>
    );
};
export default UserListElement;
