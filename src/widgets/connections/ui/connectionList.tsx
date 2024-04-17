import {
    ListContextProvider,
    Pagination,
    Title,
    useGetList,
} from "react-admin";
import useLocalStoreCurrentGroup from "../../../hooks/useLocalStoreCurrentGroup";
import useLocalStoreGroupList from "../../../hooks/useLocalStoreGroupList";
import { useState } from "react";
import { Alert, Card } from "@mui/material";
import PostgresConnection from "./connectionsList/postgresConnection";
import Loading from "../../../shared/ui/loading";
import Error from "../../../shared/ui/error";

const ConnectionList = () => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    const [groupList] = useLocalStoreGroupList();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const currentGroupId = groupList.filter(
        (item) => item.name === currentGroup,
    )[0].id;
    const { data, total, isLoading, error } = useGetList("connections", {
        meta: { currentGroupId: currentGroupId },
    });
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
                            <PostgresConnection />
                        </Card>
                        <Pagination />
                    </div>
                }
            </ListContextProvider>
        </div>
    );
};

export default ConnectionList;
