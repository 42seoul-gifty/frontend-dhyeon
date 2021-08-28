import React from "react";
import queryString from "query-string";

function Login({location, history}) {
	const {code} = queryString.parse(location.search);

	return (
		<>
			Login
			{console.log(code)}
			로그인 성공
			{history.push('/')}
		</>
	);
}

export default Login;