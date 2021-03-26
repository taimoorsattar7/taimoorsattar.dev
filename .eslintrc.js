module.exports = {
    "extends": [
        "standard",
        "standard-react",
        "plugin:import/errors",
        "plugin:react/recommended",
        "prettier",
        "prettier/react",
        "prettier/standard"
    ],
    "plugins": ["react", "prettier", "import"],
    "parser": "babel-eslint",
    "rules": {
        "react/prefer-stateless-function": "off",
        "react/prop-types": "off",
        "react/no-danger": "off",
        "prefer-destructuring": "off",
        "strict": "off",
        "react/jsx-no-target-blank": "warn",
        "react/no-unused-prop-types": "off",
        "react/no-unescaped-entities": "off"
    },
    "settings": {
        "import/core-modules": []
    },
    "env": {
        "browser": true
    },
    "globals": {
        "graphql": true
    }
}