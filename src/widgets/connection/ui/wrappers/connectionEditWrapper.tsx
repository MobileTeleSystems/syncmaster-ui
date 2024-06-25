import ConnectionEdit from "@widgets/connection/ui/connectionEdit";
import Error from "@shared/ui/error";
import Warning from "@shared/ui/warning";
import { Loading, useGetOne } from "react-admin";
import { useParams } from "react-router";

const ConnectionEditWrapper = () => {
    const { id } = useParams();
    if (id === undefined) return <Error message={"Undefined id"} />;

    const { data, isLoading, error } = useGetOne("connections", { id });
    if (isLoading) return <Loading />;
    // @ts-expect-error  error type
    if (error) return <Error message={error} />;
    if (
        data.connection_data.type === "postgres" ||
        data.connection_data.type === "oracle" ||
        data.connection_data.type === "hive" ||
        data.connection_data.type === "hdfs"
    ) {
        return <ConnectionEdit data={data} />;
    }

    return <Warning message="Connection type does not implemented yet" />;
};

export default ConnectionEditWrapper;
