/**
 * Specific eslint rules for this workspace, learn how to compose
 * @link https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */


module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: 'tsconfig.json',
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
        // optional overrides per project
    },
    overrides: [
        // optional overrides per project file match
    ],
};