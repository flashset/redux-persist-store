const globalOptions = {
  storage: sessionStorage,
  encryption: {
    encrypt: data => {
      return data;
    },
    decrypt: data => {
      return data;
    }
  }
};

const setOptions = options => {
  if (!options.storage) {
    globalOptions.storage = options.storage;
  }

  if (!options.encryption) {
    globalOptions.encryption = options.encryption;
  }
};

export const loadState = options => {
  try {
    setOptions(options);
    const {
      storage,
      encryption
    } = globalOptions;
    const serializedState = storage.getItem("state");

    if (serializedState === null) {
      return undefined;
    }

    const decryptedState = encryption.decrypt(serializedState);

    if (decryptedState === null) {
      return undefined;
    }

    return JSON.parse(decryptedState);
  } catch (e) {
    return undefined;
  }
};
export const saveState = state => {
  try {
    const {
      storage,
      encryption
    } = globalOptions;
    const serializedState = JSON.stringify(state);
    const encryptedState = encryption.encrypt(serializedState);
    storage.setItem("state", encryptedState);
  } catch (e) {// Ignore write errors;
  }
};