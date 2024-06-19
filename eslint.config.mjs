import { fixupConfigRules } from "@eslint/compat";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
    {
        languageOptions: { globals: globals.browser },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,

    ...fixupConfigRules(pluginReactConfig),

    {
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",
        },
    },
    {
        files: ["./src/**/*.jsx"],
        languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    },
    { settings: { react: { version: "17" } } },
];
