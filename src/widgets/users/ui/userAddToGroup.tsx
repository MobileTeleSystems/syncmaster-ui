import useLocalStoreCurrentMenuGroup from "@hooks/useLocalStoreCurrentMenuGroup";
import { Card, TextField as Field } from "@mui/material";
import Error from "@shared/ui/error";
import { roles } from "@widgets/types";
import { useState } from "react";
import {
    Create,
    Datagrid,
    ListContextProvider,
    Loading,
    Pagination,
    required,
    SelectInput,
    SimpleForm,
    TextField,
    useGetList,
} from "react-admin";

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

const UserAddToGroup = () => {
    const [currentUserGroup] = useLocalStoreCurrentMenuGroup();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [selectedUser, setSelectedUser] = useState();
    const [selectedUserId, setSelectedUserId] = useState();
    const [selectedRole, setSelectedRole] = useState();
    const {
        data: users,
        total,
        isLoading,
        error,
    } = useGetList("users", {
        meta: {},
        pagination: { page, perPage },
    });
    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;
    const sort = { field: "name", order: "ASC" };

    const transform = (data) => ({
        group_id: currentUserGroup,
        user_id: selectedUserId,
        role: selectedRole,
    });

    const redirectTo = (resource: string, id: string, data: any) =>
        "groups/" + currentUserGroup + "/show";

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
                        value={
                            selectedUser === undefined
                                ? "Select user"
                                : selectedUser
                        }
                        sx={{
                            overflowY: "auto",
                            width: "500px",
                            paddingRight: "50px",
                        }}
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
                    <ListContextProvider
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
                                    setUserId={setSelectedUserId}
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
