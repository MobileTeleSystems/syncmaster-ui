import { useParams } from "react-router";
import useConnectionsList from "src/hooks/useConnectionsList";
import Error from "src/shared/ui/error";
import ShowPostgresConnection from "src/widgets/connections/ui/showConnection/postgresConnection";

const ShowConnectionProvider = () => {
    const { id } = useParams();
    const [connectionsList] = useConnectionsList();
    if (id === undefined) return <Error/>

    const selectedConnectionType = connectionsList.filter(
        (connection) => connection.id === Number.parseInt(id),
    )[0].connection_data.type;

    if (selectedConnectionType === "postgres") {
        return <ShowPostgresConnection />;
    }
    return <Error/>
};

export default ShowConnectionProvider;
