import {
    Create,
    Loading,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
    useGetList,
} from "react-admin";

const QueueCreate = () => {
    const { data: groups, isLoading } = useGetList("groups");
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
