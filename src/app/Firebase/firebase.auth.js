import { getAuth } from "firebase/auth";
import app from "./firebase.config";
const auth=getAuth(app)
import { GoogleAuthProvider } from "firebase/auth";

export const googleProvider = new GoogleAuthProvider();
export default auth;