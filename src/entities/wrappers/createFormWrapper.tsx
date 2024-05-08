import OracleCreateForm from "@entities/forms/oracleCreateForm";
import PostgresCreateForm from "@entities/forms/postgresCreateForm";
import Warning from "@shared/ui/warning";

const CreateFormWrapper = ({ connectionType }: { connectionType: string }) => {
    if (connectionType === "postgres") {
        return <PostgresCreateForm />;
    }
    if (connectionType === "oracle") {
        return <OracleCreateForm />;
    }
    return <Warning message="Select connection type" />
};

export default CreateFormWrapper;