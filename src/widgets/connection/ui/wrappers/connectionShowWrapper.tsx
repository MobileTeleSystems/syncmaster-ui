import OracleConnectionShow from "@entities/connection/show/oracleShow";
import PostgresConnectionShow from "@entities/connection/show/postgresShow";
import useEnableGroupSelector from "@hooks/useEnableGroupSelector";
import Error from "@shared/ui/error";
import Warning from "@shared/ui/warning";
import { useEffect } from "react";
import { Loading, useGetOne } from "react-admin";
import { useParams } from "react-router";

const ConnectionShowWrapper = () => {
    const [, setEnableGroupSelector] = useEnableGroupSelector();
    useEffect(() => {
        setEnableGroupSelector(true);
    }, []);
    const { id } = useParams();
    if (id === undefined) return <Error message={"Undefined id"} />;

    const { data, isLoading, error } = useGetOne("connections", { id });
    if (isLoading) return <Loading />;
    // @ts-expect-error error type
    if (error) return <Error message={error} />;
    if (data.connection_data.type === "postgres") {
        return <PostgresConnectionShow data={data} />;
    }
    if (data.connection_data.type === "oracle") {
        return <OracleConnectionShow data={data} />;
    }

    return <Warning message="Connection type does not implemented yet" />;
};

export default ConnectionShowWrapper;
