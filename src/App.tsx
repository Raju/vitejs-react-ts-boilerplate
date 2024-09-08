import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/login/Login";
import ErrorPage from "./pages/ErrorBoundary";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/thank-you",
		element: <Login />,
		errorElement: <ErrorPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
