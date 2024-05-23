import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
import { useEffect } from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import useLocalStoreChangeGroup from "@hooks/useLocalStoreChangeGroup";

const QueueCreate = () => {
    const [, setIsChange] = useLocalStoreChangeGroup();
    useEffect(() => {
        setIsChange(true);
    }, []);

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
