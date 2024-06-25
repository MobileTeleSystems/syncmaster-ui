import TextField from "@mui/material/TextField";

const FileTargetParamsShow = ({
    data,
}: {
    data: {
        target_params: {
            directory_path: string;
            file_format: object;
            df_schema: string;
        };
    };
}) => {
    const processedData = {
        ...data,
        target_params: {
            ...data.target_params,
            file_format: JSON.stringify(data.target_params.file_format),
        },
    };
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
                InputProps={{ readOnly: true, disableUnderline: true }}
                variant="standard"
                style={{ width: "max-content" }}
                label={"Directory path"}
                name={"directory_path"}
                value={processedData.target_params.directory_path}
            />
            {/* TODO: the field with file_format is complex - there must be a type (drop-down list, like connection types), plus child fields (delimiter, quote, header, etc.) */}
            <TextField
                InputProps={{ readOnly: true, disableUnderline: true }}
                variant="standard"
                style={{ width: "max-content" }}
                label={"File format"}
                name={"file_format"}
                value={processedData.target_params.file_format}
            />
            <TextField
                InputProps={{ readOnly: true, disableUnderline: true }}
                variant="standard"
                style={{ width: "max-content" }}
                label={"DF Schema"}
                name={"df_schema"}
                value={processedData.target_params.df_schema}
            />
        </div>
    );
};

export default FileTargetParamsShow;
