# Vteme mobile (react native) client

Dev stack:
* react-native (webview)

## Clone repository and install dependencies

```
git clone git@github.com:vtemelife/mobile.git
cd mobile
```

## Run without docker

### Install nvm and nodejs

Install nvm, see instruction here: https://github.com/nvm-sh/nvm

```
nvm install 13.3.0
nvm use 13.3.0
node --version
```

### Activate environment:

```
cp envsets/local_dev.env .env
source .env
```

### Install project requirements:

```
yarn install
```

### Start dev server:

```
make start
```

## Run tests:

### Run all tests:

```
make test
```

### Run one test:

```
NODE_ENV=test yarn run jest app/containers/Rest/tests/reducer.test.js
```
