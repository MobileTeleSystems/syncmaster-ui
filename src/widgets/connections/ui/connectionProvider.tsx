import { useParams } from "react-router";
import useConnectionsList from "src/hooks/useConnectionsList";
import Error from "src/shared/ui/error";
import { ConnectionType } from "src/widgets/connections/types";
import PostgresConnectionShow from "src/widgets/connections/ui/showConnection/postgresConnection";

const ConnectionProvider = () => {
    const { id } = useParams();
    const [connectionsList] = useConnectionsList();
    if (id === undefined) return <Error/>

    const selectedConnectionType: ConnectionType = connectionsList.filter(
        (connection) => connection.id === Number.parseInt(id),
    )[0].connection_data.type;

    if (selectedConnectionType === "postgres") {
        return <PostgresConnectionShow />;
    }
    return <Error/>
};

export default ConnectionProvider;
