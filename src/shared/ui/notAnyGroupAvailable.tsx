import { Alert } from "@mui/material";

const NotAnyGroupAvailable = () => {
    return (
        <div style={{ paddingTop: "1em" }}>
            <Alert severity="warning">No groups available.</Alert>
        </div>
    );
};

export default NotAnyGroupAvailable;