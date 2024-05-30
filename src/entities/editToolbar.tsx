import { DeleteButton, SaveButton, Toolbar } from "react-admin";

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
            sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
                borderRadius: 2,
                p: 1,
            }}
        />
    </Toolbar>
);

export default EditToolbar;
