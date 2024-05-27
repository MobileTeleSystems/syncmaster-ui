import Error from "@shared/ui/error";
import { Loading, useGetOne } from "react-admin";

const LinkedField = ({ id, resource }: { id: string, resource: string }) => {
    const { data, isLoading, error } = useGetOne(resource, { id });
    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;

    return <a href={"#/" + resource + "/" + id +"/show"}>{data.name}</a>;
};

export default LinkedField;
