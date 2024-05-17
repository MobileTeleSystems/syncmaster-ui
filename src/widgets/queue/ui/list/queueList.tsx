import BaseList from "@entities/list/baseList";
import QueueListElement from "@widgets/queue/ui/list/listElement";

const QueueList = () => {
    return (
        <BaseList
            type={"queues"}
            title={"Queues"}
            element={<QueueListElement />}
        />
    );
};
export default QueueList;