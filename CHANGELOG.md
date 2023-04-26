# Version 0.6.0 (September 3, 2022)

## Features

* `filterDateByRange` parameter is added for options description in widget meta ([cxbox-ui/core #743](https://github.com/CX-Box/cxbox-ui/pull/743))

# Version 0.5.0 (September 30, 2021)

## Features

* `filterBy` parameter is added for field description in widget meta ([cxbox-ui/core #711](https://github.com/CX-Box/cxbox-ui/issues/711))

# Version 0.4.0 (September 7, 2021)

## Features

* `ViewNavigation` and `NavigationTabs` widget types are added

# Version 0.3.4 (Jule 6, 2021)

## Fixes

* Revert "Duplications of const enums are added for compatibility  with `isolatedModules` flag"

# Version 0.3.3 (Jule 3, 2021)

## Fixes

* Duplications of const enums are added for compatibility  with `isolatedModules` flag

# Version 0.3.2 (Jule 2, 2021)

## Fixes

* `json-stable-stringify` erroneously considered non-browser in 0.3.1

# Version 0.3.1 (Jule 2, 2021)

## Fixes

* `const enum` replaced with `enum` for compatibility with CRA and other environments configured with `isolatedModules: true` ts param 
* Runtime dependencies were not marked as non-browser in package.json
* Erroneously applied `declare` modifiers of exported types

# Version 0.3.0 (Febraury 15, 2021)

## Features

* Actions in `actionGroups` widget option can now be set separately for each business component

# Version 0.2.0 (January 28, 2021)

## Features

* Source types for JSON schemas are now exported and can be extended in your application to customize generated schemas.
0.3.0 is scheduled to export a function that will take customized types as arguments and will generate schemas based on provided customization.
```ts
import { ScreenMetaJson } from '@cxbox-ui/schema'

export interface CustomScreenMetaJson extends ScreenMeta {
    customField: number // add or modify fields if your *.screen.json file format is different
}
```

* Some types that previously were declared in [Cxbox-UI](https://github.com/CX-Box/cxbox-ui) are moved here as they in fact affect both backend and frontend applications; Cxbox UI will reexport those types so nothing should break if you referenced them from your application directly.

# Version 0.1.3 (January 26, 2021)

## Fixes

* `typescript-json-schema` should be runtime dependency

# Version 0.1.2 (January 26, 2021)

## Fixes

* Broken publish workflow

# Version 0.1.1 (January 26, 2021)

## Fixes

* Incorrect `main` reference in `package.json`

# Version 0.1.0 (January 26, 2021)

* Public release
