import { FacebookAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

export const FacebookProvider = new FacebookAuthProvider();
export const GithubProvider = new GithubAuthProvider();
export const GoogleProvider = new GoogleAuthProvider();
