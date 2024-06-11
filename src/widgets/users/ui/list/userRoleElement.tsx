import { Chip } from "@mui/material";
import { useRecordContext } from "react-admin";
import type { UserRoles } from "@shared/api/types";

const UserRoleElement = ({ source }: { source: string }) => {
    const record = useRecordContext();
    if (!record) return null;
    const value: UserRoles = record[source];
    switch (value) {
        case "Owner":
            return <OwnerField />;
        case "Maintainer":
            return <MaintainerField />;
        case "Guest":
            return <GuestField />;
        case "Developer":
            return <DeveloperField />;
        default:
            return null;
    }
};

const OwnerField = () => {
    return <Chip label={"Owner"} color="primary" />;
};
const MaintainerField = () => {
    return <Chip label={"Maintainer"} color="primary" />;
};
const GuestField = () => {
    return <Chip label={"Guest"} color="primary" />;
};
const DeveloperField = () => {
    return <Chip label={"Developer"} color="primary" />;
};
export default UserRoleElement;
