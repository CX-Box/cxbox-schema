# Cxbox Schema

This package includes schemas shared by [Cxbox](https://github.com/CX-Box/cxbox) and [Cxbox-UI](https://github.com/CX-Box/cxbox-ui) in form of Typescript types, their corresponding JSON schemas and utilities to extend built-in types and rebuild the schemas.

## Usage

### Install this as a dependency for your project:

```sh
yarn add @cxbox-ui/schema
```
### Add a launch command to the `script` section of your `package.json` file:
```json
"scripts": {
    "gen:schema": "node ./node_modules/@cxbox-ui/schema/bin/build-schema"
},
```

### Disable `@cxbox-ui/schema` in the `browser` section of your `package.json` file:
```json
"browser": {
    "@cxbox-ui/schema": false
}
```

### Launch command to generate schemas
```sh
yarn gen:schema
```

After that JSON files describing schema for Cxbox screens, views, widgets and sql business components should appear in `schemas` folder of your project

## Extending schemas for your project

Coming soon