import { DeleteButton, SaveButton, Toolbar } from "react-admin";
import { DeleteButtonStyle } from "@entities/types";

const EditToolbar = () => (
    <Toolbar
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "0.5em",
            paddingBottom: "0.5em",
        }}
    >
        <SaveButton type="button" />
        <DeleteButton
            mutationMode="pessimistic"
            sx={DeleteButtonStyle}
        />
    </Toolbar>
);

export default EditToolbar;
