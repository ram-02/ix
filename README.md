![iX](./logo.svg)

> Siemens iX monorepo

![version](https://img.shields.io/badge/version-0.0.0-green.svg)
![npm](https://img.shields.io/badge/npm-%3E%3D8.x.x-blue.svg)
![node](https://img.shields.io/badge/node-%3E%3D16.16.x-blue.svg) 
![yarn](https://img.shields.io/badge/yarn->=1.x.x-blue.svg)
[![License: SEE LICENSE IN <LICENSE.md>](https://img.shields.io/badge/License-SEE%20LICENSE%20IN%20LICENSE.md-yellow.svg)](https://***REMOVED***/siemens-ix/siemens-ix/-/blob/main/LICENSE.md)


## Usage

### Installation

```sh
yarn install
```

### Build
```sh
yarn build || yarn build --filter=<workspace-name>
```

### Development
```sh
yarn start || yarn start --filter=<workspace-name>
```

### Test

- Unit TBD

- E2E TBD

### Visual regression testing

**_Docker cli must be installed on your system_**

```sh
yarn visual-regression
```

### Documentation

Serve documentation [locally](http://localhost:3000/siemens-ix/)

```sh
yarn start --filter=documentation
```

### Release

```sh
yarn release
```

## Project structure

### Package `core`

Contains all styles and the webcomponents.

**_published as `@siemens/ix`_**

### Package `react`

Contains the wrapper components for react.

**_published as `@siemens/ix-react`_**

### Package `angular`

Contains the wrapper components for angular.

**_published as `@siemens/ix-angular`_**

### Package `react-test-app` and `angular-test-app`

Contains a playground application to explore and test `ix` components.
Inside the `x-test-app`'s are also the preview source code for the documentation. (`src/preview-examples`)

**_Not published_**

### Package `documentation`

Contains the documentation.

### Package `aggrid`

Contains the brand and classic theme for the aggrid library

**_published as `@siemens/ix-aggrid`_**

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://***REMOVED***/siemens-ix/siemens-ix/-/issues). You can also take a look at the [contributing guide](https://***REMOVED***/siemens-ix/siemens-ix/-/blob/main/CONTRIBUTING.md).

## 👨‍💻 Contributors

- Daniel Leroux <daniel.leroux@siemens.com>
- Lukas Maurer <lukas.maurer@siemens.com>
- Carlos Leandro Cruz Ferrer <carlos.cruz_ferrer@siemens.com>
- Gonçalo Ferreira <goncalo.alves-ferreira@siemens.com>

## Author

👤 **Siemens AG**

## 📝 License

Copyright © 2019 [Siemens AG](https://www.siemens.com/).

This project is [Siemens Inner Source License v1.4](https://***REMOVED***/siemens-ix/siemens-ix/-/blob/main/LICENSE.md) licensed.
