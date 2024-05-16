export const getHeaders = () => {
    const myHeaders = new Headers();
    const token: string | null = localStorage.getItem("token");
    if (token) myHeaders.append("Authorization", "Bearer " + token);

    return myHeaders;
};