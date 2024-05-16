export const getAUTHHeaders = (): Headers => {
    const myHeaders = new Headers();
    const token: string | null = localStorage.getItem("token");
    if (token) myHeaders.append("Authorization", "Bearer " + token);

    return myHeaders;
};

export const getPOSTHeaders = (): Headers => {
    let headers: Headers = getAUTHHeaders();
    headers.append("Content-Type", "application/json");
    return headers;
};
