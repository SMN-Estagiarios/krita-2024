const getLocalStorage = () => {
  const storage = localStorage.getItem("user");
  if (!storage) {
    return [];
  }

  return JSON.parse(storage);
};

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const clearStorage = () => {
  window.localStorage.removeItem("user");
};

export { setLocalStorage, clearStorage, getLocalStorage };
