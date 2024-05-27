import { TextInput } from "react-admin";

const DBTargetParamsEdit = () => {
    return (
        <TextInput
            source={"target_params.table_name"}
            label={"Target (schema.table)"}
            name={"target_params.table_name"}
        />
    );
};

export default DBTargetParamsEdit;
