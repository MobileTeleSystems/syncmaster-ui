import EditToolbar from "@entities/editToolbar";
import { Edit, SimpleForm, TextInput } from "react-admin";

const QueueEdit = () => {
    return (
        <Edit mutationMode="pessimistic" redirect={"show"}>
            <SimpleForm toolbar={<EditToolbar />}>
                <TextInput source="description" name={"description"} />
            </SimpleForm>
        </Edit>
    );
};
export default QueueEdit;
