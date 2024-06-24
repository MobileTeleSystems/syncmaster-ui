export const getAuthHeaders = (): Headers => {
    const myHeaders = new Headers();
    const token: string | null = localStorage.getItem("token");
    if (token) myHeaders.append("Authorization", "Bearer " + token);

    return myHeaders;
};

export const getPOSTHeaders = (): Headers => {
    const headers: Headers = getAuthHeaders();
    headers.append("Content-Type", "application/json");
    return headers;
};

export const getApiUrl = () => {
    return "http://localhost:8000";
};
