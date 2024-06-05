import EditToolbar from "@entities/editToolbar";
import useLocalStoreCurrentUserGroup from "@hooks/useLocalStoreCurrentUserGroup";
import { Edit, required, SelectInput, SimpleForm } from "react-admin";
import { useParams } from "react-router";

const roles = [
    { id: "Maintainer", name: "Maintainer" },
    { id: "Developer", name: "Developer" },
    { id: "Guest", name: "Guest" },
];

const UserEditRole = () => {
    const { id: userID } = useParams();
    const [currentUserGroup] = useLocalStoreCurrentUserGroup();

    const transform = (data) => ({
        ...data,
        userId: userID,
        currentUserGroup: currentUserGroup,
    });
    const redirectTo = (resource, id, data) => "groups/" + data.group + "/show";
    return (
        <Edit
            mutationMode="pessimistic"
            redirect={redirectTo}
            transform={transform}
        >
            <SimpleForm toolbar={<EditToolbar />}>
                <SelectInput
                    source="role"
                    name="role"
                    label={"Role"}
                    choices={roles}
                    validate={required()}
                />
            </SimpleForm>
        </Edit>
    );
};

export default UserEditRole;
