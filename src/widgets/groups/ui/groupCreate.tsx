import { Create, SimpleForm, TextInput } from "react-admin";

const GroupCreate = () => {
    return (
        <Create>
            <SimpleForm>
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

export default GroupCreate;
