import { Datagrid, Identifier, TextField } from "react-admin";

const UserListElementForCreate = ({
    setUser,
}: {
    setUser: ({ user, id }: { user: string; id: Identifier }) => void;
}) => {
    return (
        <Datagrid
            // @ts-expect-error rowClick type
            rowClick={(id, resource, element) => {
                setUser({ user: element.username, id: id });
            }}
        >
            <TextField source={"username"} name={"username"} />
            <TextField source="description" name={"description"} />
        </Datagrid>
    );
};

export default UserListElementForCreate;
