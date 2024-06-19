import LockIcon from "@mui/icons-material/Lock";

import {
    Avatar,
    Button,
    Card,
    CardActions,
    CircularProgress,
} from "@mui/material";

import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import * as React from "react";
import { useState } from "react";
import {
    Form,
    required,
    TextInput,
    useLogin,
    useNotify,
    useTranslate,
} from "react-admin";
import { useLocation } from "react-router-dom";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const translate = useTranslate();

    const notify = useNotify();
    const login = useLogin();
    const location = useLocation();

    const handleSubmit = (auth: FormValues) => {
        setLoading(true);
        login(
            auth,
            location.state ? (location.state as any).nextPathname : "/", // eslint-disable-line @typescript-eslint/no-explicit-any
        ).catch((error: Error) => {
            setLoading(false);
            notify(
                typeof error === "string"
                    ? error
                    : typeof error === "undefined" || !error.message
                      ? "ra.auth.sign_in_error"
                      : error.message,
                {
                    type: "error",
                    messageArgs: {
                        _:
                            typeof error === "string"
                                ? error
                                : error && error.message
                                  ? error.message
                                  : undefined,
                    },
                },
            );
        });
    };

    return (
        <Form onSubmit={handleSubmit} noValidate>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}
            >
                <Card sx={{ minWidth: 300, marginTop: "6em" }}>
                    <Box
                        sx={{
                            margin: "1em",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Avatar sx={{ bgcolor: "secondary.main" }}>
                            <LockIcon />
                        </Avatar>
                    </Box>
                    <Box
                        sx={{
                            marginTop: "1em",
                            display: "flex",
                            justifyContent: "center",
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        Hint: demo / demo
                    </Box>
                    <Box sx={{ padding: "0 1em 1em 1em" }}>
                        <Box sx={{ marginTop: "1em" }}>
                            <TextInput
                                autoFocus
                                source="username"
                                label={translate("ra.auth.username")}
                                disabled={loading}
                                validate={required()}
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ marginTop: "1em" }}>
                            <TextInput
                                source="password"
                                label={translate("ra.auth.password")}
                                type="password"
                                disabled={loading}
                                validate={required()}
                                fullWidth
                            />
                        </Box>
                    </Box>
                    <CardActions sx={{ padding: "0 1em 1em 1em" }}>
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            disabled={loading}
                            fullWidth
                        >
                            {loading && (
                                <CircularProgress size={25} thickness={2} />
                            )}
                            {translate("ra.auth.sign_in")}
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Form>
    );
};

Login.propTypes = {
    authProvider: PropTypes.func,
    previousRoute: PropTypes.string,
};

export default Login;

interface FormValues {
    username?: string;
    password?: string;
}
