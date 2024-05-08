import OracleEditForm from "@entities/forms/oracleEditForm";
import PostgresEditForm from "@entities/forms/postgresEditForm";
import Warning from "@shared/ui/warning";

const EditFormWrapper = ({ connectionType }: { connectionType: string }) => {
    if (connectionType === "postgres") {
        return <PostgresEditForm />;
    }
    if (connectionType === "oracle") {
        return <OracleEditForm />;
    }
    return <Warning message="Select connection type" />;
};
export default EditFormWrapper;
