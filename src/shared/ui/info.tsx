import { Alert } from "@mui/material";

const Info= ({message} : {message: string}) => {
    return (
        <Alert severity="info" style={{ paddingTop: "1em" }}>
            {message}
        </Alert>
    );
};

export default Info;