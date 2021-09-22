import localforage from "localforage";

export const storeData = (instanceName, key, value) => {
  var instance = localforage.createInstance({
    name: instanceName,
  });

  return instance.setItem(key, value);
};

const getData = (instanceName, key, value) => {
  var instance = localforage.createInstance({
    name: instanceName,
  });

  return instance.getItem(key, value);
};

const removeData = (instanceName, key, value) => {
  var instance = localforage.createInstance({
    name: instanceName,
  });

  return instance.getItem(key, value);
};
