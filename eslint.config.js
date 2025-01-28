// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    prettierConfig,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": [
                "warn",
                { ignoreRestArgs: true },
            ],
            "@typescript-eslint/no-unused-expressions": "warn",
        },
    },
    {
        ignores: [
            "build/*",
            "dist/*",
            "node_modules/*",
            ".history/*",
            "eslint.config.js",
        ],
    },
);
