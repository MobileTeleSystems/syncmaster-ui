import BaseList from "@entities/base/list/baseList";
import GroupListElement from "@widgets/groups/ui/list/groupListElement";

const GroupList = () => {
    return (
        <BaseList
            type={"groups"}
            title={"Groups"}
            element={<GroupListElement />}
        />
    );
};

export default GroupList;
