import OracleCreateForm from "@entities/OracleCreateForm";
import PostgresCreateForm from "@entities/PostgresCreateForm";

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
