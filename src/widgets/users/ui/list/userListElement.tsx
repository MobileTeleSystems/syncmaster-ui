import BaseDatagrid from "@entities/base/list/baseDatagrid";
import UserRoleElement from "@widgets/users/ui/list/userRoleElement";
import { Button } from "react-admin";

const UserListElement = () => {
    return (
        <BaseDatagrid
            name={"username"}
            resource={"users"}
            additionColumns={[
                <UserRoleElement source="role" />,
                <Button
                    label={"Change role"}
                    sx={{
                        bgcolor: "background.paper",
                        boxShadow: 1,
                        borderRadius: 2,
                        p: 1,
                    }}
                />,
            ]}
        />
    );
};

export default UserListElement;
