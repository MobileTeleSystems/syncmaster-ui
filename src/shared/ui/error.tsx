import Warning from "@shared/ui/warning";

const Error = ({ message }: { message: Error | string }) => {
    return <Warning message={message} />;
};

export default Error;
