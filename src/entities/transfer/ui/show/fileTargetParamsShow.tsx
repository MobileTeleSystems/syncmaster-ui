import { TextField } from "react-admin";

const FileTargetParamsShow = () => {
    return (
        <>
            <TextField
                source={"target_params.directory_path"}
                label={"Directory path"}
                name={"target_params.directory_path"}
            />
            <TextField
                source={"target_params.file_format"}
                label={"File format"}
                name={"target_params.file_format"}
            />
            <TextField
                source={"target_params.df_schema"}
                label={"DF Schema"}
                name={"target_params.df_schema"}
            />
        </>
    );
};

export default FileTargetParamsShow;
