import OracleCreateForm from "@entities/forms/oracleCreateForm";
import PostgresCreateForm from "@entities/forms/postgresCreateForm";

const CreateFormWrapper = ({ connectionType }: { connectionType: string }) => {
    if (connectionType === "postgres") {
        return <PostgresCreateForm />;
    }
    if (connectionType === "oracle") {
        return <OracleCreateForm />;
    }
    return <div>Select connection type</div>;
};

export default CreateFormWrapper;
