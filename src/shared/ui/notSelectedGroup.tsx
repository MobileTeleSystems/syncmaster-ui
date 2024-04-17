import { Alert } from "@mui/material";

const NotSelectedGroup = () => {
    return (
        <div style={{ paddingTop: "1em" }}>
            <Alert severity="warning">Please, select a group.</Alert>
        </div>
    );
};

export default NotSelectedGroup;
