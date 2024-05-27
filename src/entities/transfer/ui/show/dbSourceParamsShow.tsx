import { TextField } from "react-admin";

const DBSourceParamsShow = () => {
    return (
        <TextField
            source={"source_params.table_name"}
            label={"Source (schema.table)"}
            name={"source_params.table_name"}
        />
    );
};

export default DBSourceParamsShow;
