// import { useUsersStore } from "@/stores/user";
// import axios from "axios";

// const request = axios.create({
//   baseURL: import.meta.env.DEV
//     ? import.meta.env.VITE_BASE_API
//     : `${window.location.origin}/api`,
//   timeout: 60000,
// });

// // Request interceptors
// request.interceptors.request.use(
//   (config) => {
//     const store = useUsersStore();
//     if (store.token) {
//       config.headers["Authorization"] = `${store.token}`;
//     }
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// // Response interceptors
// request.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     const errorResponse = JSON.parse(error.request.response);
//     if (
//       errorResponse.statusCode !== 401 ||
//       errorResponse.error.statusCode !== 401
//     ) {
// toast({
//   title: errorResponse.message || errorResponse.error.message,
//   variant: 'destructive',
// })
//     }
//     return Promise.reject(error);
//   }
// );

// export default request;
