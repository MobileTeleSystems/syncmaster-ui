import useLocalStoreCurrentMenuGroup from "@hooks/useLocalStoreCurrentMenuGroup";
import { Card } from "@mui/material";
import Error from "@shared/ui/error";
import { useState } from "react";
import {
    CreateButton,
    ListContextProvider,
    Loading,
    Pagination,
    useDataProvider,
} from "react-admin";
import { useQuery } from "react-query";

const UsersBaseList = ({ element }: { element: JSX.Element }) => {
    const [group] = useLocalStoreCurrentMenuGroup();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const dataProvider = useDataProvider();
    const { data, isLoading, error } = useQuery([page, perPage], () =>
        dataProvider.getGroupUsers(group, {
            pagination: { page, perPage },
        }),
    );
    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;
    const sort = { field: "name", order: "ASC" };

    return (
        <div style={{ paddingTop: "1em" }}>
            <ListContextProvider
                value={{
                    data: data.items || [],
                    total: data.meta.total || 0,
                    setPerPage: setPerPage,
                    page: page,
                    perPage: perPage,
                    setPage: setPage,
                    sort: sort,
                }}
            >
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "center",
                            paddingTop: "0.5em",
                            paddingBottom: "0.5em",
                        }}
                    >
                        <CreateButton resource={"users"} label="Add user" />
                    </div>

                    <Card>{element}</Card>
                    <Pagination />
                </div>
            </ListContextProvider>
        </div>
    );
};

export default UsersBaseList;
