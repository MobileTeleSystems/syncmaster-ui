import EditToolbar from "@entities/editToolbar";
import TitleElement from "@entities/titleElement";
import useGroupIdInGroupMenuPage from "@hooks/useGroupIdInGroupMenuPage";
import { roles } from "@widgets/types";
import { Edit, required, SelectInput, SimpleForm } from "react-admin";
import { useParams } from "react-router";

const UserEditRole = () => {
    const { id: userId } = useParams();
    // useRecordContext doesn't work so localStore is used
    const [currentUserGroupId] = useGroupIdInGroupMenuPage();
    const transform = (data) => ({
        ...data,
        user_id: userId,
        group_id: currentUserGroupId,
    });
    const redirectTo = (resource: string, id: string, data: any) =>
        "groups/" + data.group_id + "/show";
    return (
        <Edit
            mutationMode="pessimistic"
            redirect={redirectTo}
            transform={transform}
            title={<TitleElement title={`Edit user role`} />}
        >
            <SimpleForm toolbar={<EditToolbar isDeletable={false} />}>
                {/* TODO: Implement automatic selection of the current role when filtering is implemented on the backend */}
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
