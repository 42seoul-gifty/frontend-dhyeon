import axios from "axios";
import React, { useEffect } from "react";
import {REDIRECT_URI, REST_API_KEY} from "./Home";

function Login({location, history}) {
	const code = new URLSearchParams(window.location.search).get('code');

	const postData = {
		grant_type: 'authorization_code',
		client_id: REST_API_KEY,
		redirect_uri: REDIRECT_URI,
		code: code,
	};
	
	const params = new URLSearchParams(postData).toString();

	// ---------- fetch 사용 ----------------------
	// useEffect(() => {
	// 	const reqOpt = {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	// 	};

	// 	fetch(`https://kauth.kakao.com/oauth/token?${params}`, reqOpt)
	// 	.then(response => response.json())
	// 	.then(data => console.log(data))
	// }, [])

	// -------------------- axios 사용 -----------------
	async function getToken() {
		const {data} = await axios.post(`https://kauth.kakao.com/oauth/token?${params}`,
		[],
		{
			headers: {
				// 'Access-Control-Allow-Origin': '*', // 얘를 적으면 preflight가 날라가는데, 본요청에선 cors가 나옴
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
		console.log(data);
	}

	useEffect(() => {
		getToken()
	}, []);
	// -------------------------------------------------

	
	return (
		<>
			Login
			{console.log(code)}
			로그인 성공
		</>
	);
}

export default Login;