import BaseDatagrid from "@entities/base/list/baseDatagrid";

const GroupListElement = () => {
    return <BaseDatagrid resource={"groups"} isDeletable={false} />;
};

export default GroupListElement;
