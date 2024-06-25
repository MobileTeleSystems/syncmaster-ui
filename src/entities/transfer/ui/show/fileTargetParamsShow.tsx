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
        file_format: JSON.stringify(data.target_params.file_format),
    };
    return (
        <RecordContextProvider value={processedData}>
            <div style={{ paddingTop: "1em" }}>
                <SimpleShowLayout>
                    <Card>
                        <TextField
                            source={"directory_path"}
                            label={"Directory path"}
                            name={"directory_path"}
                        />
                        {/* TODO: the field with file_format is complex - there must be a type (drop-down list, like connection types), plus child fields (delimiter, quote, header, etc.) */}
                        <TextField
                            source={"file_format"}
                            label={"File format"}
                            name={"file_format"}
                        />
                        <TextField
                            source={"df_schema"}
                            label={"DF Schema"}
                            name={"df_schema"}
                        />
                    </Card>
                </SimpleShowLayout>
            </div>
        </RecordContextProvider>
    );
};

export default FileTargetParamsShow;
