import OracleCreateForm from "@entities/edit/oracleCreateForm";
import PostgresCreateForm from "@entities/edit/postgresCreateForm";
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
