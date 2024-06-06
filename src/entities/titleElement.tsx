import { Typography } from "@mui/material";

const TitleElement = ({ title }: { title: string }) => {
    return (
        <Typography
            variant={"inherit"}
            noWrap={false}
            sx={{
                overflowY: "auto",
                width: "500px",
                paddingRight: "50px",
            }}
        >
            {title}
        </Typography>
    );
};

export default TitleElement;
