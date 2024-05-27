import type { RunBaseList } from "@entities/types";
import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
import { PlayArrow } from "@mui/icons-material";
import { Card } from "@mui/material";
import Error from "@shared/ui/error";
import { useState } from "react";
import {
    CreateButton,
    ListContextProvider,
    Loading,
    Pagination,
    Title,
    useGetList,
} from "react-admin";

const RunBaseList = ({ type, title, element, transferId }: RunBaseList) => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const { data, total, isLoading, error } = useGetList(type, {
        meta: { transfer_id: transferId },
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
                        <Title title={title} />
                        <CreateButton
                            icon={<PlayArrow />}
                            label={"Run transfer"}
                        />
                        <Pagination />
                    </div>
                }
            </ListContextProvider>
        </div>
    );
};

export default RunBaseList;
