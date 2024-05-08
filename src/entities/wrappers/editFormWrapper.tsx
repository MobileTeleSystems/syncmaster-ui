import PostgresEditForm from "@entities/forms/postgresEditForm";
import OracleEditForm from "@entities/forms/oracleEditForm";

const EditFormWrapper = ({ connectionType }: { connectionType: string }) => {
    if (connectionType === "postgres") {
        return <PostgresEditForm />;
    }
    if (connectionType === "oracle") {
        return <OracleEditForm />;
    }
    return <div>Select connection type</div>;
};
export default EditFormWrapper;