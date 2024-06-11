import BaseDatagrid from "@entities/base/list/baseDatagrid";

const QueueListElement = (): JSX.Element => {
    return <BaseDatagrid resource={"queues"}/>;
};

export default QueueListElement;
