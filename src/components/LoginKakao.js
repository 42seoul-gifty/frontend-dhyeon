import React, { useEffect } from "react";
import {REDIRECT_URI, KAKAO_REST_API_KEY} from "./config";

function LoginKakao({ history }) {

	const code = new URLSearchParams(window.location.search).get('code');

	// get token
	const postData = {
		grant_type: 'authorization_code',
		client_id: KAKAO_REST_API_KEY,
		redirect_uri: REDIRECT_URI,
		code: code,
	};
	const params = new URLSearchParams(postData).toString();

	try {
	useEffect(() => {
		const reqOpt = {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		};

		fetch(`https://kauth.kakao.com/oauth/token?${params}`, reqOpt)
		.then(response => response.json())
		.then(data => {
			window.localStorage.setItem("yw_access", data.access_token)
			window.localStorage.setItem("yw_refresh", data.refresh_token)
			console.log(data)
			// console.log(data.access_token)
			// console.log(data.refresh_token)
		})
		.catch(e => new Error("token error" + e))
		//에러처리 필요
		history.push('/main');
	}, [])
	} catch(e) {
		console.log(e.message);
		history.push('/');
	}

	return (
		<>
			Login
			{console.log(code)}
			
			로그인 성공
			{/* {history.push('/')} */}
		</>
	);
}

export default LoginKakao;