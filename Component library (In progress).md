- Button
- Carousel
- Checkbox
- Colors
- DatePicker
- DateRangePicker
- DragDrop
- DragDropImport
- Dropdown
- ExportButton
- Form
- Grid
- Heading
- Icons
- Input[type=date]
- Input[type=password]
- Input[type=range]
- Input[type=text]
- Link
- Loader
- Modal
- Pagination
- Radio
- Select
- Table
- TabMenu
- Theme
- ToastMessage
- Tooltip


Reference:
https://itnext.io/how-to-write-your-own-reusable-react-component-library-a57dc7c9a210


1. Run command:
```
npm init
```
2. Install `webpack` (Q: Is webpack-cli needed?):
```
npm install webpack webpack-cli --save-dev
```
3. Create the webpack entry point `src/index.js`:
```
export default () => {};
```
4. Initial build:
```
npx webpack
```
5. Create the webpack config file `webpack.config.js`:
```
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
```
6. Install `style-loader` and `css-loader`:
```
npm install style-loader css-loader --save-dev
```
7. Add `style-loader` and `css-loader` into the webpack config file:
```
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  }
};
```
8. Install `@babel-core` and `babel-loader`:
```
npm install @babel/core babel-loader --save-dev
```
9. Add `babel-loader` into the webpack config file:
```
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" }
        ]
      }
    ]
  }
};
```
10. Install `@babel/preset-env`:
```
npm install @babel/preset-env --save-dev
```
11. Create the babel config file `.babelrc`:
```
{
  "presets": ["@babel/preset-env"]
}
```
12. Install `react`:
```
npm install react
```
13. Install `@babel/preset-react`:
```
npm install @babel/preset-react --save-dev
```
14. Add `@babel/preset-react` into the babel config file:
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
} 
```


