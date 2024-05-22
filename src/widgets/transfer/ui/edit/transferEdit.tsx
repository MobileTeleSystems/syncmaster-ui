import EditToolbar from "@entities/editToolbar";
import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
import Error from "@shared/ui/error";
import Warning from "@shared/ui/warning";
import type { TransferData } from "@widgets/transfer/ui/edit/types";
import EditTransferFormWrapper from "@widgets/transfer/ui/edit/wrappers/editTransferFormWrapper";
import {
    Edit,
    FormDataConsumer,
    Loading,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
    useGetList,
} from "react-admin";

const scheduledValues = [
    { name: true, id: true },
    { name: false, id: false },
];

const Select = ({
    id,
    name,
    resource,
}: {
    id: number;
    name: string;
    resource: string;
}) => {
    // TODO: since the backend sends a list page by page and not all elements at once,
    //  if there are a large number of elements it may lose records
    const { data, isLoading, error } = useGetList(resource, {
        meta: { group_id: id, page_size: 200 },
    });
    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;
    return (
        <SelectInput
            name={name}
            source={name}
            choices={data}
            validate={required()}
        />
    );
};

const TransferEdit = () => {
    // const edit = useEditController();
    const [currentGroup] = useLocalStoreCurrentGroup();
    // const { data, isLoading, error } = useGetOne("connections", { id: edit.record.source_connection_id });
    // if (isLoading) return <Loading />;
    // if (error) return <Error message={error} />;
    // console.log(data);
    //
    // console.log(edit.record);
    return (
        <Edit mutationMode="pessimistic">
            <SimpleForm toolbar={<EditToolbar />}>
                <TextInput source="name" name={"name"} />
                <Select
                    id={currentGroup.id}
                    name={"queue_id"}
                    resource={"queues"}
                />
                <Select
                    id={currentGroup.id}
                    name={"source_connection_id"}
                    resource={"connections"}
                />
                <FormDataConsumer<{
                    source_params: TransferData["target_params"];
                }>>
                    {({ formData }) => {
                        const connectionType = formData.source_params.type
                            ? formData.source_params.type
                            : "unknown";
                        if (connectionType === undefined) {
                            return <Warning message="Select source type" />;
                        }
                        return (
                            <EditTransferFormWrapper
                                transferType={connectionType}
                                source={"source_params.table_name"}
                                label={"Source"}
                            />
                        );
                    }}
                </FormDataConsumer>
                <Select
                    id={currentGroup.id}
                    name={"target_connection_id"}
                    resource={"connections"}
                />
                <FormDataConsumer<{
                    target_params: TransferData["target_params"];
                }>>
                    {({ formData }) => {
                        const connectionType = formData.target_params.type
                            ? formData.target_params.type
                            : "unknown";
                        if (connectionType === undefined) {
                            return <Warning message="Select target type" />;
                        }
                        return (
                            <EditTransferFormWrapper
                                transferType={connectionType}
                                source={"target_params.table_name"}
                                label={"Target"}
                            />
                        );
                    }}
                </FormDataConsumer>
                <TextInput source="description" name={"description"} />
                <SelectInput
                    name="is_scheduled"
                    source="is_scheduled"
                    choices={scheduledValues}
                    validate={required()}
                />
                <TextInput source="schedule" name={"schedule"} />
                <TextInput source="strategy_params" name={"strategy_params"} />
            </SimpleForm>
        </Edit>
    );
};
export default TransferEdit;
