import dataProvider from "@shared/api/dataProvider";
import {
    Edit,
    Loading,
    NumberInput,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
    useGetOne,
    useGetRecordId,
} from "react-admin";
import { useQuery } from "react-query";
import { validateIp } from "@shared/utils";


export const postgresConnectionEdit = (props) => {
    const { data, isLoading, error } = useQuery(
        ["connections", "getConnectionTypes"],
        () => dataProvider.getConnectionTypes(),
    );
    const recordId = useGetRecordId();
    const { data: currentData, isLoading: isLoadindCurrData } = useGetOne(
        "connections",
        { id: recordId },
    );
    if (isLoading || isLoadindCurrData) return <Loading />;

    return (
        <Edit>
            <SimpleForm>
                <TextInput source="id" disabled={true} />
                <TextInput source="name" required={true} />
                <TextInput source="description" />
                <SelectInput
                    source="Auth Data Type"
                    choices={data}
                    validate={required()}
                    isLoading={isLoading}
                    defaultValue={currentData.auth_data.type}
                />
                <TextInput source="auth_data.user" label={"User"} />
                <TextInput
                    source="connection_data.additional_params"
                    label={"Additional params"}
                    defaultValue={JSON.stringify(currentData.connection_data.additional_params)}
                />
                <TextInput
                    source="connection_data.database_name"
                    label={"Database name"}
                />
                <TextInput source="connection_data.host" label={"Host"} validate={validateIp}/>
                <NumberInput source="connection_data.port" label={"Port"} />
                <SelectInput
                    source="Connection Type"
                    choices={data}
                    validate={required()}
                    isLoading={isLoading}
                    defaultValue={currentData.connection_data.type}
                />
            </SimpleForm>
        </Edit>
    );
};

export default postgresConnectionEdit;
