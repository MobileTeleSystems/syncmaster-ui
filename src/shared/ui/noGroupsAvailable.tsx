import { Alert } from "@mui/material";

const NoGroupsAvailable = () => {
    return (
        <div style={{ paddingTop: "1em" }}>
            <Alert severity="warning">No groups available.</Alert>
        </div>
    );
};

export default NoGroupsAvailable;