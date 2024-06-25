import HDFSEditForm from "@entities/connection/edit/hdfsEditForm";
import HiveEditForm from "@entities/connection/edit/hiveEditForm";
import OracleEditForm from "@entities/connection/edit/oracleEditForm";
import PostgresEditForm from "@entities/connection/edit/postgresEditForm";
import Warning from "@shared/ui/warning";

const EditFormWrapper = ({ connectionType }: { connectionType: string }) => {
    if (connectionType === "postgres") {
        return <PostgresEditForm />;
    }
    if (connectionType === "oracle") {
        return <OracleEditForm />;
    }
    if (connectionType === "hive") {
        return <HiveEditForm />;
    }
    if (connectionType === "hdfs") {
        return <HDFSEditForm />;
    }
    return <Warning message={"Unknown connection type"} />;
};
export default EditFormWrapper;
