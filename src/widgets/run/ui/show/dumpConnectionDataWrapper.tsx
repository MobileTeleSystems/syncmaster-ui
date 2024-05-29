import OracleConnectionShow from "@entities/connection/show/oracleShow";
import PostgresConnectionShow from "@entities/connection/show/postgresShow";
import useLocalStoreChangeGroup from "@hooks/useLocalStoreChangeGroup";
import Warning from "@shared/ui/warning";
import { ConnectionData } from "@widgets/connection/types";
import { useEffect } from "react";

const DumpConnectionDataWrapper = ({ data }: { data: ConnectionData }) => {
    const [, setCanChangeCurrentGroup] = useLocalStoreChangeGroup();
    useEffect(() => {
        setCanChangeCurrentGroup(true);
    }, []);
    if (data.connection_data.type === "postgres") {
        return (
            <PostgresConnectionShow
                data={data}
                editable={false}
                showTitle={false}
            />
        );
    }
    if (data.connection_data.type === "oracle") {
        return (
            <OracleConnectionShow
                data={data}
                editable={false}
                showTitle={false}
            />
        );
    }

    return <Warning message="Connection type does not implemented yet" />;
};

export default DumpConnectionDataWrapper;
