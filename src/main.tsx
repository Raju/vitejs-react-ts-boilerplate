import { StrictMode } from "react";
import { type Root, createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/reset.scss";

const enableMocking: () => Promise<void> = async (): Promise<void> => {
	if (import.meta.env.MODE !== "development") return;

	const { browser } = await import("./utils/msw/browser");
	await browser.start({ onUnhandledRequest: "bypass" });
};

const rootElement: Root = createRoot(document.getElementById("root"));

enableMocking().then(() => {
	rootElement.render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
});
