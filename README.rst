.. title

=============
SyncMaster UI
=============

This interface is designed to work with the SyncMaster service.
This interface contains 4 menu sections: Transfers, Connections, Queues, Groups.

To explore the source code, start with `src/App.tsx<https://github.com/MobileTeleSystems/syncmaster-ui/blob/develop/src/App.tsx>`_.

How to run
----------

After having cloned the SyncMaster repository, run the following commands at the root directory:

..  code-block:: shell
    npm install --global yarn

    yarn install

    yarn build

    yarn dev


These commands will install dependencies and launch the dev server, by going to localhost:3000 you can go to the SyncMaster_UI interface.

How to format code
------------------

Run the following command at the root directory:

..  code-block:: shell
    npm run prettier-format


How to run linters
------------------

Run the following command at the root directory:

..  code-block:: shell
    npx eslint --fix


Install pre-commit hooks
------------------------

Follow the instructions `here<https://prettier.io/docs/en/install>`_.
