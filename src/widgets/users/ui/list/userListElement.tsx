import BaseDatagrid from "@entities/base/list/baseDatagrid";
import UserRoleElement from "@widgets/users/ui/list/userRoleElement";

const UserListElement = () => {
    return (
        <BaseDatagrid
            name={"username"}
            resource={"users"}
            additionColumns={<UserRoleElement source="role" />}
        />
    );
};

export default UserListElement;
