import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
import useLocalStoreCurrentMenuGroup from "@hooks/useLocalStoreCurrentMenuGroup";
import Error from "@shared/ui/error";
import { useState } from "react";
import { Loading, useDataProvider, useGetList } from "react-admin";

const UserAddToGroup = () => {
    const dataProvider = useDataProvider();
    const [currentUserGroup] = useLocalStoreCurrentMenuGroup();
    const [currentGroup] = useLocalStoreCurrentGroup();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const { data: users, total, isLoading, error } = useGetList("users", {
        meta: { group_id: currentGroup.id },
        pagination: { page, perPage },
    });
    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;
    console.log(users)
    return <></>;
};

export default UserAddToGroup;
