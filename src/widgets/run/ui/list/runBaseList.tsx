import type { RunBaseList } from "@entities/types";
import { PlayArrow } from "@mui/icons-material";
import { Card } from "@mui/material";
import Error from "@shared/ui/error";
import { useState } from "react";
import {
    Button,
    Confirm,
    ListContextProvider,
    Loading,
    Pagination,
    useDataProvider,
    useGetList,
} from "react-admin";

const RunBaseList = ({ type, element, transferId }: RunBaseList) => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const { data, total, isLoading, error } = useGetList(type, {
        meta: { transfer_id: transferId },
        pagination: { page, perPage },
    });

    const dataProvider = useDataProvider();
    const [open, setOpen] = useState(false);

    const handleRunTransfer = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);
    const handleConfirm = () => {
        dataProvider.runTransfer(transferId);
        setOpen(false);
    };

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
                        <Button
                            label={"Run transfer"}
                            onClick={handleRunTransfer}
                            children={<PlayArrow />}
                        />
                        <Confirm
                            isOpen={open}
                            title={`Run transfer #${transferId}`}
                            content="Are you sure you want to run this transfer?"
                            onConfirm={handleConfirm}
                            onClose={handleDialogClose}
                        />
                        <Pagination />
                    </div>
                }
            </ListContextProvider>
        </div>
    );
};

export default RunBaseList;
