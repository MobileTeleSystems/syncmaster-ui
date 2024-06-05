import EditToolbar from "@entities/editToolbar";
import { Edit, SimpleForm, TextInput } from "react-admin";

const GroupEdit = () => {
    return (
        <Edit mutationMode="pessimistic" redirect={"show"}>
            <SimpleForm toolbar={<EditToolbar />}>
                <TextInput source="id" disabled={true} />
                <TextInput source="name" />
                <TextInput source="description" />
            </SimpleForm>
        </Edit>
    );
};

export default GroupEdit;
