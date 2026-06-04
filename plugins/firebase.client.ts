import { initFirebase } from "~/firebase/config";

export default defineNuxtPlugin(() => {
  const { public: config } = useRuntimeConfig();

  initFirebase({
    apiKey: config.firebaseApiKey as string,
    authDomain: config.firebaseAuthDomain as string,
    databaseURL: config.firebaseDatabaseUrl as string,
    projectId: config.firebaseProjectId as string,
    storageBucket: config.firebaseStorageBucket as string,
    messagingSenderId: config.firebaseMessagingSenderId as string,
    appId: config.firebaseAppId as string,
  });
});
