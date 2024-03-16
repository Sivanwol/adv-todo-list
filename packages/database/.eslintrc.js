/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ["@repo/eslint-config/library.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: 'tsconfig.json',
    },
    overrides: [
        // optional overrides per project file match
        {
            files: ['**/*seed.ts'],
            rules: {
                'sonarjs/no-duplicate-string': 'off',
            },
        },
    ],
};