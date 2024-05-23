import { Datagrid, DeleteButton, TextField } from "react-admin";

const RunListElement = (): JSX.Element => {
    return (
        <Datagrid rowClick="show">
            <TextField source="started_at" />
            <TextField source="ended_at" />
            <TextField source="status" />
            <TextField source="log_url" />
        </Datagrid>
    );
};

export default RunListElement;
