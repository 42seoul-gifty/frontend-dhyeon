import axios from "axios";
import React, { useEffect } from "react";
import {REDIRECT_URI, KAKAO_REST_API_KEY} from "./config";

function Login({ history }) {

	const code = new URLSearchParams(window.location.search).get('code');

	// ========================== get token ===================
	const postData = {
		grant_type: 'authorization_code',
		client_id: KAKAO_REST_API_KEY,
		redirect_uri: REDIRECT_URI,
		code: code,
	};
	const params = new URLSearchParams(postData).toString();

	// ---------- fetch 사용 ----------------------
	try {
	useEffect(() => {
		const reqOpt = {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		};

		fetch(`https://kauth.kakao.com/oauth/token?${params}`, reqOpt)
		.then(response => response.json())
		.then(data => console.log(data))
		//에러처리 필요
		history.push('/main');
	}, [])
	} catch(e) {
		console.log(e.message);
		history.push('/');
	}

	// -------------------- axios 사용 -----------------
	// async function getToken() {
	// 	const {data} = await axios.post(`https://kauth.kakao.com/oauth/token?${params}`,
	// 	[],
	// 	{
	// 		headers: {
	// 			'Content-Type': 'application/x-www-form-urlencoded'
	// 		}
	// 	})
	// 	console.log(data);
	// }

	// useEffect(() => {
	// 	getToken()
	// }, []);
	// ==================================================
	
	return (
		<>
			Login
			{console.log(code)}
			
			로그인 성공
			{/* {history.push('/')} */}
		</>
	);
}

export default Login;