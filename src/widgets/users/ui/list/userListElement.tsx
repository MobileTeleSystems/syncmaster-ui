import BaseDatagrid from "@entities/base/list/baseDatagrid";
import UserRoleElement from "@widgets/users/ui/list/userRoleElement";
import { Button } from "react-admin";
import { DeleteButtonStyle } from "@entities/types";

const UserListElement = () => {
    return (
        <BaseDatagrid
            name={"username"}
            resource={"users"}
            additionColumns={[
                <UserRoleElement source="role" />,
                <Button label={"Change role"} sx={DeleteButtonStyle} />,
            ]}
        />
    );
};

export default UserListElement;
