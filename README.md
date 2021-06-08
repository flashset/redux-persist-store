# @sparkyflash/redux-persist-store

**@sparkyflash/redux-persist-store** is allow you to achieve persist redux store.

## Current Version

1.0.0

## Install

#### [npm](https://www.npmjs.com/package/@sparkyflash/redux-persist-store)

```
npm install --save @sparkyflash/redux-persist-store
```

## Quick Start

### 2 Easy Steps

### 1. Initiating persistState to the redux store. by default storage will considered as sessionStorage

```js
import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import app from "../reducers";
import { persistState } from "@sparkyflash/redux-persist-store";

const createStore = () =>
  reduxCreateStore(app, persistState(), applyMiddleware(thunk));

export default createStore;
```

#### Even you can pass the options to persistState to specify the storage. it is flexible to inject any strorage and ecryption/serialization algorithm in encryption option.

```js
import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import app from "../reducers";
import { persistState } from "@sparkyflash/redux-persist-store";
const persistOptions = {
  storage: sessionStorage,
  encryption: {
    encrypt: (data) => {
      return data;
    },
    decrypt: (data) => {
      return data;
    },
  },
};

const createStore = () =>
  reduxCreateStore(app, persistState(persistOptions), applyMiddleware(thunk));

export default createStore;
```

### 2. Wrapping the component with PersistWrapper.

```js
import React from "react";
import { Provider } from "react-redux";
import createStore from "./createStore";
import { PersistWrapper } from "@sparkyflash/redux-persist-store";

export default ({ element }) => (
  <Provider store={createStore()}>
    <PersistWrapper>{element}</PersistWrapper>
  </Provider>
);
```
