import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom";

if (window.location.pathname === "/callback") {
	import("./auth/callback").then(({ handleRedirectCallback }) => {
		handleRedirectCallback().then(() => {
			window.location.href = "/welcome";
		});
	});
} else {
	createRoot(document.getElementById("root")!).render(
		<StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StrictMode>,
	)
}