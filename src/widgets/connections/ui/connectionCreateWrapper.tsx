import { useGetOne } from "react-admin";
import { useParams } from "react-router";
import PostgresConnectionCreate from "@entities/postgresConnectionCreate";
import Error from "@shared/ui/error";
import Loading from "@shared/ui/loading";
import Warning from "@shared/ui/warning";

const ConnectionCreateWrapper = () => {
    const { id } = useParams();
    if (id === undefined) return <Error />;

    const { data, isLoading, error } = useGetOne("connections", { id });
    if (isLoading) return <Loading />;
    if (error) return <Error />;
    if (data.connection_data.type === "postgres") {
        return <PostgresConnectionCreate />;
    }

    return <Warning message="Connection type does not implemented yet" />;
};

export default ConnectionCreateWrapper;
