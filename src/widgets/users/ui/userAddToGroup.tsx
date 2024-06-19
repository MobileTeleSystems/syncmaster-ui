import useGroupIdInGroupMenuPage from "@hooks/useGroupIdInGroupMenuPage";
import { Card, TextField as Field } from "@mui/material";
import Error from "@shared/ui/error";
import { roles } from "@widgets/types";
import UserListElementForCreate from "@widgets/users/ui/list/userListElementForCreate";
import { object } from "prop-types";
import { useState } from "react";
import {
    Create,
    Identifier,
    ListContextProvider,
    Loading,
    Pagination,
    required,
    SelectInput,
    SimpleForm,
    useGetList,
} from "react-admin";

const UserAddToGroup = () => {
    // useRecordContext doesn't work so localStore is used
    const [currentUserGroupId] = useGroupIdInGroupMenuPage();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [selectedUser, setSelectedUser] = useState<{
        user: string;
        id: Identifier;
    }>();
    const [selectedRole, setSelectedRole] = useState();
    const {
        data: users,
        total,
        isLoading,
        error,
    } = useGetList("users", {
        meta: object,
        pagination: { page, perPage },
    });
    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;
    const sort: { field: string; order: "ASC" | "DESC" } = {
        field: "name",
        order: "ASC",
    };

    const transform = () => ({
        group_id: currentUserGroupId,
        user_id: selectedUser?.id,
        role: selectedRole,
    });

    const redirectTo = () => "groups/" + currentUserGroupId + "/show";

    return (
        <div style={{ paddingTop: "1em" }}>
            <Create
                transform={transform}
                resource={"users"}
                redirect={redirectTo}
            >
                <SimpleForm>
                    <Field
                        label="User"
                        margin={"normal"}
                        value={
                            selectedUser === undefined
                                ? "Select user"
                                : selectedUser.user
                        }
                    />
                    <SelectInput
                        source="role"
                        name="role"
                        label={"Role"}
                        choices={roles}
                        validate={required()}
                        value={selectedRole}
                        onChange={(event) => {
                            setSelectedRole(event.target.value);
                        }}
                    />
                    {/* TODO: Replace with the Autocomplete component when filtering is implemented on the backend */}
                    <ListContextProvider
                        // @ts-expect-error must implement other fields
                        value={{
                            data: users || [],
                            total: total || 0,
                            setPerPage: setPerPage,
                            page: page,
                            perPage: perPage,
                            setPage: setPage,
                            sort: sort,
                        }}
                    >
                        <div>
                            <Card>
                                <UserListElementForCreate
                                    setUser={setSelectedUser}
                                />
                            </Card>
                            <Pagination />
                        </div>
                    </ListContextProvider>
                </SimpleForm>
            </Create>
        </div>
    );
};
export default UserAddToGroup;
