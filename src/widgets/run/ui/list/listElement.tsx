import { Datagrid, TextField } from "react-admin";
import StatusField from "@widgets/run/ui/list/statusField";

const RunListElement = (): JSX.Element => {
    return (
        <Datagrid rowClick="show" resource={"runs"}>
            <TextField source="started_at" />
            <TextField source="ended_at" />
            <StatusField source={"status"}/>
            {/*<TextField source="status" />*/}
            <TextField source="log_url" />
        </Datagrid>
    );
};

export default RunListElement;
