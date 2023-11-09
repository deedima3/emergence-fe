import axios from "axios";
import { derived, get, writable } from "svelte/store";

const defaultApi = {
  baseURL: "",
  fileBaseURL: "",
};

const apiStore = writable(defaultApi);
const baseApi = derived(apiStore, (apiStore) => {
  return axios.create({
    baseURL: apiStore.baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
});
const fileBaseApi = derived(apiStore, (apiStore) => {
  return axios.create({
    baseURL: apiStore.fileBaseURL,
    headers: {
      "Content-Type": "application/json",
    },
    responseType: "blob",
  });
});

const updateBaseURL = (baseURL: string) => {
  apiStore.set({
    ...get(apiStore),
    baseURL: baseURL,
  });
};

const updatefileBaseURL = (fileBaseURL: string) => {
  apiStore.set({
    ...get(apiStore),
    fileBaseURL: fileBaseURL,
  });
};

const getBaseApi = () => {
  return get(baseApi);
};

const getFileBaseApi = () => {
  return get(fileBaseApi);
};

export {
  apiStore,
  updateBaseURL,
  updatefileBaseURL,
  baseApi,
  fileBaseApi,
  getBaseApi,
  getFileBaseApi,
};
