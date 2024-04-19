import { useGetOne } from "react-admin";
import { useParams } from "react-router";
import PostgresConnectionShow from "src/entities/postgresConnection";
import Error from "src/shared/ui/error";
import Loading from "src/shared/ui/loading";
import Warning from "src/shared/ui/warning";

const ConnectionWrapper = () => {
    const { id } = useParams();
    if (id === undefined) return <Error />;

    const { data, isLoading, error } = useGetOne("connections", { id });
    if (isLoading) return <Loading />;
    if (error) return <Error />;
    if (data.connection_data.type === "postgres") {
        return <PostgresConnectionShow id={data.id} data={data} />;
    }

    return <Warning message="Connection type does not implemented yet" />;
};

export default ConnectionWrapper;
