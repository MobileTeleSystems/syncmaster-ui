import RunListElement from "@widgets/run/list/listElement";
import RunBaseList from "@widgets/run/list/runBaseList";

const RunList = ({transferId}:{transferId: number}) => {
    return (
        <RunBaseList
            type={"runs"}
            title={"Runs"}
            element={<RunListElement />}
            transferId={transferId}
        />
    );
};
export default RunList;
