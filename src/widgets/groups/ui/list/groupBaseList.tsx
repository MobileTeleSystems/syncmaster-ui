import useEnableGroupSelector from "@hooks/useEnableGroupSelector";
import { Card } from "@mui/material";
import Error from "@shared/ui/error";
import { useEffect, useState } from "react";
import {
    CreateButton,
    ListContextProvider,
    Loading,
    Pagination,
    Title,
    useGetList,
} from "react-admin";

const GroupBaseList = ({ element }: { element: JSX.Element }) => {
    const [, setEnableGroupSelector] = useEnableGroupSelector();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const { data, total, isLoading, error } = useGetList("groups", {
        pagination: { page, perPage },
    });

    useEffect(() => {
        setEnableGroupSelector(false);
    }, []);
    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;
    const sort: { field: string; order: "ASC" | "DESC" } = {
        field: "name",
        order: "ASC",
    };

    return (
        <div style={{ paddingTop: "1em" }}>
            <ListContextProvider
                // @ts-expect-error  must implement other fields
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
                        <Title title={"Groups"} />
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
                        <Card>{element}</Card>
                        <Pagination />
                    </div>
                }
            </ListContextProvider>
        </div>
    );
};

export default GroupBaseList;
