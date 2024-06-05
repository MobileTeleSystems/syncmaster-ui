import { BaseButtonStyle } from "@entities/types";
import UserRoleElement from "@widgets/users/ui/list/userRoleElement";
import {
    Button,
    Datagrid,
    EditButton,
    TextField,
    useDelete,
    useRecordContext,
} from "react-admin";
import Error from "@shared/ui/error";

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
        <>
            <Button
                variant="text"
                disabled={isLoading}
                onClick={handleClick}
                label={"Delete"}
                sx={{ ...BaseButtonStyle, color: "crimson" }}
            ></Button>
        </>
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
