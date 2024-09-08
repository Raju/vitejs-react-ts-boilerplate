import React from "react";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		// You can log the error to an error reporting service
		console.error("Uncaught error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <ErrorFallback error={this.state.error} />;
		}

		return this.props.children;
	}
}

function ErrorFallback({ error }) {
	return (
		<div id="error-page">
			<h1>Oops! An Error Occurred</h1>
			<p>We apologize, but an unexpected error has occurred.</p>
			{error.message && (
				<p>
					<i>{error.message}</i>
				</p>
			)}
		</div>
	);
}

export default function ErrorPage({ children }) {
	return (
		<ErrorBoundary>
			{children}
		</ErrorBoundary>
	);
}
