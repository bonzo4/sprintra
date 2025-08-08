import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";
import { appConfig } from "./config";

// Initialize Firebase
const app = initializeApp(appConfig.firebase);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize GitHub provider
export const githubProvider = new GithubAuthProvider();

export default app;
