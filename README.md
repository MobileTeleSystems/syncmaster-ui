# Data.SyncMaster UI

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)

This interface is designed to work with the Data.SyncMaster service.
This interface contains 4 menu sections: Transfers, Connections, Queues, Groups.

**Note**: service is under active development, and is not ready to use.

## Development

To explore the source code, start with [src/App.tsx](https://github.com/MobileTeleSystems/syncmaster-ui/blob/develop/src/App.tsx).

### How to run

After having cloned the SyncMaster repository, run the following commands at the root directory:

```bash
npm install --global yarn
yarn install
yarn build
yarn dev
```

These commands will install dependencies and launch the dev server, by going to localhost:3000 you can go to the Syncmaster UI interface.

### How to format code

Run the following command at the root directory:

```bash
npm run prettier-format
```

### How to run linters

Run the following command at the root directory:

```bash
npx eslint --fix
```

### Install pre-commit hooks

Follow the instructions [here](https://prettier.io/docs/en/install).
