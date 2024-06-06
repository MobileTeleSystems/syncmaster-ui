import EditToolbar from "@entities/editToolbar";
import TitleElement from "@entities/titleElement";
import useLocalStoreCurrentMenuGroup from "@hooks/useLocalStoreCurrentMenuGroup";
import Error from "@shared/ui/error";
import {
    Edit,
    Loading,
    required,
    SelectInput,
    SimpleForm,
    useDataProvider,
} from "react-admin";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { roles } from "@widgets/types";


const UserEditRole = () => {
    const { id: userID } = useParams();
    const [currentUserGroup] = useLocalStoreCurrentMenuGroup();

    const dataProvider = useDataProvider();
    const { data, isLoading, error } = useQuery(
        ["groups", "getGroupUsers"],
        () => dataProvider.getGroupUsers(currentUserGroup),
    );
    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;

    const userToEdit = data.items.filter((item) => item.id == userID)[0];

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
            title={
                <TitleElement title={`Edit user ${userToEdit.username} role`} />
            }
        >
            <SimpleForm toolbar={<EditToolbar isDeletable={false} />}>
                <SelectInput
                    source="role"
                    name="role"
                    label={"Role"}
                    choices={roles}
                    validate={required()}
                    defaultValue={userToEdit.role}
                />
            </SimpleForm>
        </Edit>
    );
};

export default UserEditRole;
