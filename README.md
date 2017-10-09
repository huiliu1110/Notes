
```
$create-react-app client
```

```
$cd client
$yarn start
```

```
$yarn add --dev eslint
$yarn eslint --init
? How would you like to configure ESLint?
> Use a popular style guide
? Which style guide do you want to follow?
> Airbnb
? Do you use React?
> y
? What format do you want your config file to be in?
> JSON
```

```
$yarn add --dev prettier eslint-plugin-prettier
```

```
// .eslintrc.json
{
  "extends": "airbnb",
  "plugins": ["prettier"],
  "rules": {
  "prettier/prettier": "error"
  }
}
```

```
// package.json
{
  "scripts": {
  "lint": "yarn eslint src"
  }
}
```

```
// .eslintrc.json
{
  "extends": "airbnb",
  "plugins": ["prettier"],
  "env": {
  "browser": true,
  "jest": true
  },
  "rules": {
  "comma-dangle": ["error", "never"],
  "prettier/prettier": ["error", { "singleQuote": true }],
  "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}
```
