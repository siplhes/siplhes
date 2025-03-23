import { defineNuxtPlugin } from "#app";
import { toast, type ToastOptions } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  const defaultOptions: ToastOptions = {
    autoClose: 3000,
    position: "top-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "dark",
  };

  const toastMethods = {
    success: (message: string, opts: ToastOptions = {}) =>
      toast(message, { ...defaultOptions, type: "success", ...opts }),

    error: (message: string, opts: ToastOptions = {}) =>
      toast(message, { ...defaultOptions, type: "error", ...opts }),

    info: (message: string, opts: ToastOptions = {}) =>
      toast(message, { ...defaultOptions, type: "info", ...opts }),

    warning: (message: string, opts: ToastOptions = {}) =>
      toast(message, { ...defaultOptions, type: "warning", ...opts }),
  };

  nuxtApp.provide("toast", toastMethods);
});
