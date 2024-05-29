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
    return <Button label={"Created"} />;
};
const StartedField = () => {
    return <Button label={"Started"} />;
};
const FinishedField = () => {
    return <Button label={"Finished"} sx={{ color: "#03C03C" }} />;
};
const StoppedField = () => {
    return <Button label={"Stopped"} sx={{ color: "crimson" }} />;
};
const SendStopField = () => {
    return <Button label={"Sended stop signal"} sx={{ color: "crimson" }} />;
};
const FailedField = () => {
    return <Button label={"Failed"} sx={{ color: "crimson" }} />;
};
export default StatusFieldElement;
