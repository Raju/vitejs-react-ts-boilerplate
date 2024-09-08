import React from "react";
import "./Login.scss";

const Login = () => {
	return (
		<main className="container">
			<section>
				<div className="heading">
					<h1>Sign in</h1>
					<p>Free access to our dashboard.</p>
				</div>

				<form className="form">
					<div className="form__input">
						<label htmlFor="email" className="form__input--email">
							<p>Email Address</p>
							<input
								type="email"
								name="email"
								placeholder="name@address.com"
								autoComplete="username"
								required
							/>
						</label>

						<label htmlFor="password" className="form__input--password">
							<p>
								Password<small>Forgot Password?</small>
							</p>
							<input
								type="password"
								name="password"
								placeholder="Enter your password"
								autoComplete="current-password"
								required
							/>
						</label>
					</div>

					<button type="button" className="form__btn--signin">
						Sign in
					</button>
				</form>

				<p className="form__link--signup">
					Don't have an account yet? <span>Sign up.</span>
				</p>
			</section>

			<img src="../assets/auth-side-cover.jpg" alt="Login Cover" className="image" />
		</main>
	);
};

export default Login;
