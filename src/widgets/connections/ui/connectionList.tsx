import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
import { Card } from "@mui/material";
import Error from "@shared/ui/error";
import Warning from "@shared/ui/warning";
import Connections from "@widgets/connections/ui/connectionListElement";
import { useState } from "react";
import {
    CreateButton,
    ListContextProvider,
    Loading,
    Pagination,
    Title,
    useGetList,
} from "react-admin";

const ConnectionList = () => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const { data, total, isLoading, error } = useGetList("connections", {
        meta: { group_id: currentGroup.id },
        pagination: { page, perPage },
    });

    if (isLoading) return <Loading />;
    if (error) return <Error />;
    if (data?.length == 0) return <Warning message="No connections found." />;
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
                        <Title title="Connections" />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "end",
                                alignItems: "center",
                                paddingTop: "0.5em",
                                paddingBottom: "0.5em",
                            }}
                        >
                            <CreateButton />
                        </div>
                        <Card>
                            <Connections />
                        </Card>
                        <Pagination />
                    </div>
                }
            </ListContextProvider>
        </div>
    );
};

export default ConnectionList;
