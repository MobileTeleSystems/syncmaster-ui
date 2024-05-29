import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import { Button, useRecordContext } from "react-admin";

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
    return <Button label={"Created"} children={<AddCircleIcon />} />;
};
const StartedField = () => {
    return (
        <Button label={"Started"} children={<PlayCircleFilledWhiteIcon />} />
    );
};
const FinishedField = () => {
    return (
        <Button
            label={"Finished"}
            children={<CheckCircleOutlineIcon />}
            sx={{ color: "#03C03C" }}
        />
    );
};
const StoppedField = () => {
    return (
        <Button
            label={"Stopped"}
            children={<StopCircleIcon />}
            sx={{ color: "crimson" }}
        />
    );
};
const SendStopField = () => {
    return (
        <Button
            label={"Sended stop signal"}
            children={<DoDisturbIcon />}
            sx={{ color: "crimson" }}
        />
    );
};
const FailedField = () => {
    return (
        <Button
            label={"Failed"}
            children={<FeedbackIcon />}
            sx={{ color: "crimson" }}
        />
    );
};
export default StatusFieldElement;
