import React, { useEffect } from "react";
import {REDIRECT_URI, REST_API_KEY} from "./Home";

function Login({location, history}) {
	const code = new URLSearchParams(window.location.search).get('code');

	const postData = {
		grant_type: 'authorization_code',
		client_id: REST_API_KEY,
		redirect_uri: REDIRECT_URI,
		code: code,
		client_secret: 'LNKXo86CL50cISuRvu3zQKexYwQbfaVQ'
	};
	
	useEffect(() => {
		const reqOpt = {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		};

		const params = new URLSearchParams(postData).toString();

		fetch(`https://kauth.kakao.com/oauth/token?${params}`, reqOpt)
		.then(response => response.json())
		.then(data => console.log(data))
	}, [])
	
	return (
		<>
			Login
			{console.log(code)}
			로그인 성공
		</>
	);
}

export default Login;