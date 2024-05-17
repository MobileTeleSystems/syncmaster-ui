import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
import { Create, SimpleForm, TextInput } from "react-admin";

const QueueCreate = () => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    const groupId = () => ({ group_id: currentGroup.id });
    return (
        <Create>
            <SimpleForm defaultValues={groupId}>
                <TextInput source="name" name="name" required={true} />
                <TextInput
                    source="description"
                    name={"description"}
                    label={"Description"}
                    required={true}
                />
            </SimpleForm>
        </Create>
    );
};

export default QueueCreate;
