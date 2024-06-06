import EditToolbar from "@entities/editToolbar";
import TitleElement from "@entities/titleElement";
import useLocalStoreCurrentMenuGroup from "@hooks/useLocalStoreCurrentMenuGroup";
import { roles } from "@widgets/types";
import { Edit, required, SelectInput, SimpleForm } from "react-admin";
import { useParams } from "react-router";

const UserEditRole = () => {
    const { id: userID } = useParams();
    const [currentUserGroup] = useLocalStoreCurrentMenuGroup();

    const transform = (data) => ({
        ...data,
        userId: userID,
        currentUserGroup: currentUserGroup,
    });
    const redirectTo = (resource: string, id: string, data: any) =>
        "groups/" + data.group + "/show";
    return (
        <Edit
            mutationMode="pessimistic"
            redirect={redirectTo}
            transform={transform}
            title={<TitleElement title={`Edit user role`} />}
        >
            <SimpleForm toolbar={<EditToolbar isDeletable={false} />}>
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
