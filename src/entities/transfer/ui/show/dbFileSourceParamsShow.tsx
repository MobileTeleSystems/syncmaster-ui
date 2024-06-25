import { TextField } from "react-admin";

const DBFileSourceParamsShow = () => {
    return (
        <>
            <TextField
                source={"source_params.directory_path"}
                label={"Directory path"}
                name={"source_params.directory_path"}
            />
            <TextField
                source={"source_params.file_format"}
                label={"File format"}
                name={"source_params.file_format"}
            />
            <TextField
                source={"source_params.df_schema"}
                label={"DF Schema"}
                name={"source_params.df_schema"}
            />
        </>
    );
};

export default DBFileSourceParamsShow;
