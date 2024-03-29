module.exports = {
    "customTypes": {
        "engines": {
            "path": "engines",
            "strategy": "versionsByName"
        },
        "packageManager": {
            "path": "packageManager",
            "strategy": "name@version"
        }
    },
    "dependencyTypes": ["dev", "prod", "peer"],
    "filter": ".",
    "indent": "  ",
    "semverGroups": [
        {
            "range": "",
            "label": "apps",
            "dependencyTypes": ["dev", "prod"],
            "dependencies": ["**"],
            "packages": ["*-pages"]
        },
        {
            "range": "^",
            "label": "publishable-packages",
            "dependencyTypes": ["peer", "prod"],
            "dependencies": ["**"],
            "packages": ["@your-org/*"]
        },
    ],
    "sortAz": [
        "contributors",
        "dependencies",
        "devDependencies",
        "peerDependencies",
        "resolutions"
    ],
    "sortFirst": ["name", "version", "private", "module", "type", "main", "types", "exports", "scripts"],
    "source": ["apps/**", "packages/**", "./package.json"],
    "versionGroups": []
}