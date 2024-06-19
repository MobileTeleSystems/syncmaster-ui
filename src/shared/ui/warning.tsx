import { Alert } from "@mui/material";

const Warning = ({ message }: { message: Error | string }) => {
    return (
        <div style={{ paddingTop: "1em" }}>
            <Alert severity="warning">{message}</Alert>
        </div>
    );
};

export default Warning;
