import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

if (window.location.pathname === '/callback') {
	import('./auth/callback').then(({ handleRedirectCallback }) => {
		handleRedirectCallback().then(() => {
			window.location.href = '/'; // 👈 Redirect to home after storing token
		});
	});
} else {
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<App />
		</StrictMode>,
	)
}