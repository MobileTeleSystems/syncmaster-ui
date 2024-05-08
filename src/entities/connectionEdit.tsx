import EditFormWrapper from "@entities/editFormWrapper";
import dataProvider from "@shared/api/dataProvider";
import type { ConnectionData } from "@widgets/connections/types";
import {
    Edit,
    FormDataConsumer,
    Loading,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
} from "react-admin";
import { useQuery } from "react-query";

export const ConnectionEdit = ({ data }: { data: ConnectionData }) => {
    const { data: connectionTypes, isLoading } = useQuery(
        ["connections", "getConnectionTypes"],
        () => dataProvider.getConnectionTypes(),
    );

    if (isLoading) return <Loading />;

    return (
        <Edit mutationMode="pessimistic">
            <SimpleForm>
                <TextInput source="id" disabled={true} name={"id"} />
                <SelectInput
                    name="connectionType"
                    source="connection_data.type"
                    choices={connectionTypes}
                    validate={required()}
                    isLoading={isLoading}
                    defaultValue={data.connection_data.type}
                />
                <TextInput source="name" name={"name"} />
                <TextInput source="description" name={"description"} />

                <FormDataConsumer>
                    {({ formData }) => {
                        const connectionType = formData.connectionType
                            ? formData.connectionType
                            : "unknown";
                        return (
                            <EditFormWrapper connectionType={connectionType} />
                        );
                    }}
                </FormDataConsumer>
            </SimpleForm>
        </Edit>
    );
};

export default ConnectionEdit;
