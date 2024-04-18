import { Alert, Card } from "@mui/material";
import { useEffect, useState } from "react";
import {
    ListContextProvider,
    Pagination,
    Title,
    useGetList,
} from "react-admin";
import useConnectionsList from "src/hooks/useConnectionsList";
import useLocalStoreCurrentGroup from "src/hooks/useLocalStoreCurrentGroup";
import useLocalStoreGroupList from "src/hooks/useLocalStoreGroupList";
import Error from "src/shared/ui/error";
import Loading from "src/shared/ui/loading";
import Connections from "src/widgets/connections/ui/connectionListElement";

const ConnectionList = () => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    const [groupList] = useLocalStoreGroupList();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [, setConnectionList] = useConnectionsList();

    const currentGroupId = groupList.filter(
        (item) => item.name === currentGroup,
    )[0].id;
    const { data, total, isLoading, error } = useGetList("connections", {
        meta: { currentGroupId: currentGroupId },
    });
    useEffect(() => {
        if (data) setConnectionList(data);
    }, [data, isLoading]);

    if (isLoading) return <Loading />;
    if (error) return <Error />;
    if (data?.length == 0)
        return (
            <div style={{ paddingTop: "1em" }}>
                <Alert severity="warning">No connections found.</Alert>
            </div>
        );

    const sort = { field: "id", order: "ASC" };


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
