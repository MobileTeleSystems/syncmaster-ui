import { Typography } from "@mui/material";

const TitleElement = ({ title }: { title: string }) => {
    return (
        <Typography
            variant={"inherit"}
            sx={{
                inlineSize: "min-content",
            }}
        >
            {title}
        </Typography>
    );
};

export default TitleElement;
