import OracleCreateForm from "@entities/create/oracleCreateForm";
import PostgresCreateForm from "@entities/create/postgresCreateForm";
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
