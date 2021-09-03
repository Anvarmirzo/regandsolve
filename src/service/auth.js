import { getAuth, signInWithPopup } from 'firebase/auth';

export const socialAuth = async (provider) => {
	const auth = getAuth();
	try {
		const result = await signInWithPopup(auth, provider);
		// const credential = GoogleAuthProvider.credentialFromResult(result);
		// const token = credential.accessToken;
		// The signed-in user info.
		const user = result.user;
		return user;
	} catch (error) {
		// Handle Errors here.
		// const errorCode = error.code;
		// const errorMessage = error.message;
		// The email of the user's account used.
		// const email = error.email;
		// The AuthCredential type that was used.
		// const credential_1 = GoogleAuthProvider.credentialFromError(error);
	}
};
