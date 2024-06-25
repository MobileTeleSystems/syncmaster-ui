import HDFSCreateForm from "@entities/connection/create/hdfsCreateForm";
import HiveCreateForm from "@entities/connection/create/hiveCreateForm";
import OracleCreateForm from "@entities/connection/create/oracleCreateForm";
import PostgresCreateForm from "@entities/connection/create/postgresCreateForm";
import Warning from "@shared/ui/warning";

const CreateFormWrapper = ({ connectionType }: { connectionType: string }) => {
    if (connectionType === "postgres") {
        return <PostgresCreateForm />;
    }
    if (connectionType === "oracle") {
        return <OracleCreateForm />;
    }
    if (connectionType === "hive") {
        return <HiveCreateForm />;
    }
    if (connectionType === "hdfs") {
        return <HDFSCreateForm />;
    }

    return <Warning message={"Unknown connection type"} />;
};

export default CreateFormWrapper;
