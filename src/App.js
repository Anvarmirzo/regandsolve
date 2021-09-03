import { initializeApp } from 'firebase/app';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, AppRouter } from './components';
import { firebaseConfig } from './config/firebase-config';
import { setContext } from './redux/actions/context';
import { socialAuth } from './service/auth';

function App() {
	// Initialize Firebase
	initializeApp(firebaseConfig);

	const dispatch = useDispatch();
	const handleClick = async (provider) => {
		const res = await socialAuth(provider);
		res &&
			dispatch(
				setContext({ displayName: res.displayName, photoURL: res.photoURL }),
			);
	};

	return (
		<BrowserRouter>
			<Navbar />
			<AppRouter handleClick={handleClick} />
		</BrowserRouter>
	);
}

export default App;
