# Spend Matters test

## About The Exercise

Create the front end for a simple website called ‘Drink Finder’ to find different kinds of cocktails.

## How to start the web

### Docker

The project has a [Docker Compose file](docker-compose.yaml) that uses the node:14.19.1-alpine3.15 image and installs the yarn dependencies on it. It tooks a lot of time to launch due it is not generating a new image, it installs the dependencies over the container each time.

Launch the container (tested on Docker v20.10.20):
```sh
docker compose up
```

Open a browser on localhost:3000

### Run locally

- Install NodeJS (tested on v16.18.0)
- Execute the following command:
```sh
yarn install && yarn start
```

### Run deployment version
- After running locally...
```sh
yarn build && yarn serve
```

## How it works

You can search the drink that you want using the search bar, and filter the results depending on the ingredients, the category of the drink and the required glass.

Take a look at the [screenshots](screenshots).