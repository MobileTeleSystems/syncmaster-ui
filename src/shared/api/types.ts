export type ConnectionTypes = { id: string; name: string }[];
export type UserRoles = "Guest" | "Owner" | "Maintainer" | "Developer";

export const getApiUrl = () => {
    return "http://localhost:8000";
};
