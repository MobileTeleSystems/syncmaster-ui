import RunListElement from "@widgets/run/ui/list/listElement";
import RunBaseList from "@widgets/run/ui/list/runBaseList";

const RunList = ({
    transferId,
    transferName,
}: {
    transferId: number;
    transferName: string;
}) => {
    return (
        <RunBaseList
            type={"runs"}
            element={<RunListElement />}
            transferId={transferId}
            transferName={transferName}
        />
    );
};
export default RunList;
