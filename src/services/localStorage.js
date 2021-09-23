import localforage from "localforage";

export const storeData = (key, value) => {
  return localforage.setItem(key, value);
};

export const getData = (key, value) => {
  return localforage.getItem(key, value);
};

const removeData = (instanceName, key, value) => {
  var instance = localforage.createInstance({
    name: instanceName,
  });

  return instance.getItem(key, value);
};
