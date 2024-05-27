import { TextField } from "react-admin";

const DBTargetParamsShow = () => {
    return (
        <TextField
            source={"target_params.table_name"}
            label={"Target (schema.table)"}
            name={"target_params.table_name"}
        />
    );
};

export default DBTargetParamsShow;
