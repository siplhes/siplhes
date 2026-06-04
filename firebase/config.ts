import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getDatabase, type Database } from "firebase/database";
import { getAuth, browserLocalPersistence, setPersistence, type Auth } from "firebase/auth";

let _db: Database | null = null;
let _auth: Auth | null = null;

export function initFirebase(config: {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}) {
  if (getApps().length > 0) return; // already initialized
  const app = initializeApp(config);
  _db = getDatabase(app);
  _auth = getAuth(app);
  setPersistence(_auth, browserLocalPersistence);
}

export function getDb(): Database {
  if (!_db) throw new Error("Firebase not initialized. Call initFirebase first.");
  return _db;
}

export function getFirebaseAuth(): Auth {
  if (!_auth) throw new Error("Firebase not initialized. Call initFirebase first.");
  return _auth;
}
