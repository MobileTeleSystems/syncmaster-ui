import { useGetOne } from "react-admin";
import { useParams } from "react-router";
import PostgresConnectionShow from "src/entities/postgresConnection";
import useConnectionsList from "src/hooks/useConnectionsList";
import Error from "src/shared/ui/error";
import Loading from "src/shared/ui/loading";
import { ConnectionType } from "src/widgets/connections/types";

const ConnectionProvider = () => {
    const { id } = useParams();
    const [connectionsList] = useConnectionsList();
    if (id === undefined) return <Error />;

    const selectedConnectionType: ConnectionType = connectionsList.filter(
        (connection) => connection.id === Number.parseInt(id),
    )[0].connection_data.type;

    const { data, isLoading } = useGetOne("connections", { id });

    if (isLoading) return <Loading />;

    if (selectedConnectionType === "postgres") {
        return <PostgresConnectionShow id={Number.parseInt(id)} data={data} />;
    }
    return <Error />;
};

export default ConnectionProvider;
