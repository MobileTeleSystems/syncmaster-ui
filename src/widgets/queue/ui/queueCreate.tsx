import { Create, SimpleForm, TextInput, useRecordContext } from "react-admin";
import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";

const QueueCreate = () => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    return (
        <Create>
            <SimpleForm>
                <TextInput source="name" name="name" required={true} />
                <TextInput
                    source="Group"
                    label={"Group"}
                    name="group"
                    defaultValue={currentGroup.id}
                    style={{ display: "none" }}
                />
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
