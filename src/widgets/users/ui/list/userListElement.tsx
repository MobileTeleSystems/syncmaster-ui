import BaseDatagrid from "@entities/base/list/baseDatagrid";

const UserListElement = () => {
    return <BaseDatagrid name={"username"} resource={"users"}/>;
};

export default UserListElement;
