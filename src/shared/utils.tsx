export const validateIp = (ip) => {
    const regexp = new RegExp(
        "^[0-9]*[0-9]*[0-9]*\.[0-9]*[0-9]*[0-9]*\.[0-9]*[0-9]*[0-9]*\.[0-9]*[0-9]*[0-9]*$",
    );
    if (regexp.test(ip)) {
        return undefined; // if the check is successful, undefined should be returned
    }
    return "Wrong IP address";
};
