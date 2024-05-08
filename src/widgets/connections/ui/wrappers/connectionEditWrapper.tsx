import ConnectionEdit from "@entities/connectionEdit";
import Error from "@shared/ui/error";
import Warning from "@shared/ui/warning";
import { Loading, useGetOne } from "react-admin";
import { useParams } from "react-router";

const ConnectionEditWrapper = () => {
    const { id } = useParams();
    if (id === undefined) return <Error />;

    const { data, isLoading, error } = useGetOne("connections", { id });
    if (isLoading) return <Loading />;
    if (error) return <Error />;
    if (
        data.connection_data.type === "postgres" ||
        data.connection_data.type === "oracle"
    ) {
        return <ConnectionEdit data={data} />;
    }

    return <Warning message="Connection type does not implemented yet" />;
};

export default ConnectionEditWrapper;
