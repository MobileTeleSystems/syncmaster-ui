import { AuthProvider } from "react-admin";
import { getApiUrl } from "@shared/api/utils";

const authProvider: AuthProvider = {
    login: ({ username, password }) => {
        const formdata = new FormData();
        formdata.append("username", username);
        formdata.append("password", password);
        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        };
        // @ts-expect-error requestOptions
        return fetch(getApiUrl() + "/v1/auth/token", requestOptions)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((json) => json.access_token)
            .then((token) => {
                // localStorage.setItem("token", token);
                localStorage.setItem(
                    "token",
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHBpcmVzIjoxNzE5MjkyMDA2LjIyODc3NTV9.pXp6sLeHMZ_h6RD1oHLeU9EDnPyMPZjYrH13N9U6KNI",
                );
                localStorage.setItem("username", username);
            })
            .catch((e) => {
                console.error(e);
            });
    },
    logout: () => {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
        localStorage.getItem("username") ? Promise.resolve() : Promise.reject(),
    getPermissions: () => Promise.resolve(),
    getIdentity: () => {
        const user = localStorage.getItem("username");
        return Promise.resolve({
            id: "user",
            fullName: user ? user : "userNotSet",
        });
    },
};
export default authProvider;
