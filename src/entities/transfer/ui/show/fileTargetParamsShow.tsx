import { Card } from "@mui/material";
import {
    RecordContextProvider,
    SimpleShowLayout,
    TextField,
} from "react-admin";

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
        ...data.target_params,
        target_params: {
            file_format: JSON.stringify(data.target_params.file_format),
        },
    };
    return (
        <RecordContextProvider value={processedData}>
            <div style={{ paddingTop: "1em" }}>
                <SimpleShowLayout>
                    <Card>
                        <TextField
                            source={"target_params.directory_path"}
                            label={"Directory path"}
                            name={"target_params.directory_path"}
                        />
                        {/* TODO: the field with file_format is complex - there must be a type (drop-down list, like connection types), plus child fields (delimiter, quote, header, etc.) */}
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
                    </Card>
                </SimpleShowLayout>
            </div>
        </RecordContextProvider>
    );
};

export default FileTargetParamsShow;
