import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import {
    ListContextProvider,
    Pagination,
    Title,
    useGetList,
} from "react-admin";
import useLocalStoreCurrentGroup from "src/hooks/useLocalStoreCurrentGroup";
import Error from "src/shared/ui/error";
import Loading from "src/shared/ui/loading";
import Warning from "src/shared/ui/warning";
import Connections from "src/widgets/connections/ui/connectionListElement";

const ConnectionList = () => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const { data, total, isLoading, error } = useGetList("connections", {
        meta: { groupId: currentGroup.id },
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
