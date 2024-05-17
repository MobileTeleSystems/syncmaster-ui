import {
    Create,
    Loading,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
    useGetList,
} from "react-admin";
import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";

const QueueCreate = () => {
    const { data: groups, isLoading } = useGetList("groups");
    const [currentGroup] = useLocalStoreCurrentGroup();
    if (isLoading) return <Loading />;
    return (
        <Create>
            <SimpleForm>
                <TextInput source="name" name="name" required={true} />
                <SelectInput
                    source="Group"
                    name="group"
                    label={"Group"}
                    choices={groups}
                    validate={required()}
                    defaultValue={currentGroup.id}
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
