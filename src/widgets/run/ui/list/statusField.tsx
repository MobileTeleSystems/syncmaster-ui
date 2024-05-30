import { Chip } from "@mui/material";
import { useRecordContext } from "react-admin";

const StatusFieldElement = ({ source }: { source: string }) => {
    const record = useRecordContext();
    if (!record) return null;
    const value: string = record[source];
    switch (value) {
        case "CREATED":
            return <CreatedField />;
        case "STARTED":
            return <StartedField />;
        case "FAILED":
            return <FailedField />;
        case "SEND_STOP_SIGNAL":
            return <SendStopField />;
        case "STOPPED":
            return <StoppedField />;
        case "FINISHED":
            return <FinishedField />;
        default:
            return null;
    }
};

const CreatedField = () => {
    return <Chip label={"Created"} color="primary" />;
};
const StartedField = () => {
    return <Chip label={"Started"} color="primary" />;
};
const FinishedField = () => {
    return <Chip label={"Finished"} color="success" />;
};
const StoppedField = () => {
    return <Chip label={"Stopped"} color="warning" />;
};
const SendStopField = () => {
    return <Chip label={"Sended stop signal"} color="error" />;
};
const FailedField = () => {
    return <Chip label={"Failed"} color="error" />;
};
export default StatusFieldElement;
