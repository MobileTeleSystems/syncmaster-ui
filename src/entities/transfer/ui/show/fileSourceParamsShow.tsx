import { Card } from "@mui/material";
import {
    RecordContextProvider,
    SimpleShowLayout,
    TextField,
} from "react-admin";

const FileSourceParamsShow = ({
    data,
}: {
    data: {
        source_params: {
            directory_path: string;
            file_format: object;
            df_schema: string;
        };
    };
}) => {
    const processedData = {
        ...data.source_params,
        source_params: {
            file_format: JSON.stringify(data.source_params.file_format),
        },
    };
    return (
        <RecordContextProvider value={processedData}>
            <div style={{ paddingTop: "1em" }}>
                <SimpleShowLayout>
                    <Card>
                        <TextField
                            source={"source_params.directory_path"}
                            label={"Directory path"}
                            name={"source_params.directory_path"}
                        />
                        {/* TODO: the field with file_format is complex - there must be a type (drop-down list, like connection types), plus child fields (delimiter, quote, header, etc.) */}
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
                    </Card>
                </SimpleShowLayout>
            </div>
        </RecordContextProvider>
    );
};

export default FileSourceParamsShow;
