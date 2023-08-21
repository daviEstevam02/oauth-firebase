import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import { SignIn } from "../@types/sign-in";
import { saveAuthToken } from "../utils/auth-token";
import extractInfoUserOfToken from "../utils/extractUserInformation";

initializeApp(firebaseConfig);

export async function LoginFirebase ({username, password}: SignIn){
  let user: any = [];

  const authentication = getAuth();
  await signInWithEmailAndPassword(authentication, username, password)
  .then((response) => {
    saveAuthToken(response.user.accessToken, response._tokenResponse.refreshToken);
    const userData =extractInfoUserOfToken(response.user.accessToken);
    user = userData;
  })
  return {
    user
  }
}