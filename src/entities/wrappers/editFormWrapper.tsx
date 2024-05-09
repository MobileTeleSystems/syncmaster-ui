import OracleEditForm from "@entities/edit/oracleEditForm";
import PostgresEditForm from "@entities/edit/postgresEditForm";
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
