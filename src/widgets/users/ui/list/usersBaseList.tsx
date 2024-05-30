import { Card } from "@mui/material";
import Error from "@shared/ui/error";
import { useState } from "react";
import {
    ListContextProvider,
    Loading,
    Pagination,
    useGetList,
} from "react-admin";

const UsersBaseList = ({
    type,
    element,
    group_id,
}: {
    type: string;
    element: JSX.Element;
    group_id: number;
}) => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const { data, total, isLoading, error } = useGetList(type, {
        meta: { group_id: group_id },
        pagination: { page, perPage },
    });

    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;
    const sort = { field: "name", order: "ASC" };

    return (
        <div style={{ paddingTop: "1em" }}>
            <ListContextProvider
                value={{
                    data: data || [],
                    total: total || 0,
                    setPerPage: setPerPage,
                    page: page,
                    perPage: perPage,
                    setPage: setPage,
                    sort: sort,
                }}
            >
                {
                    <div>
                        <Card>{element}</Card>
                        <Pagination />
                    </div>
                }
            </ListContextProvider>
        </div>
    );
};

export default UsersBaseList;
