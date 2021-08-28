import React, { useEffect } from "react";
// import axios from "axios";
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

	// let axiosConfig = {
	// 	headers: {
	// 		'Content-Type': 'application/x-www-form-urlencoded;',
	// 	}
	//   };

	// async function getToken() {
	// 	try {
	// 		const response = await axios.post(
	// 			'https://kauth.kakao.com/oauth/token', postData, axiosConfig
	// 		).then(() => {
	// 			console.log(response);
	// 		})
	// 	} catch (error) {
	// 		console.log("error");
	// 		history.push('/');
	// 	}
	// }

	// useEffect(() =>{
	// 	const code = window.location.search.split("=")[1];
	// 	const postData = {
	// 		grant_type: "authorization_code",
	// 		client_id: REST_API_KEY,
	// 		redirect_uri: REDIRECT_URI,
	// 		code: code,
	// 	};

	// 	fetch("https://kauth.kakao.com/oauth/token", {
	// 		method: "POST",
	// 		headers: [
	// 			['Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'],
	// 		],
	// 		body: JSON.stringify(postData)
	// 	})
	// 	.then(res => res.json())
	// 	.then((data) => {
	// 		console.log(data)
	// 	})
	// }, [])
	
	useEffect(() => {
		const reqOpt = {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			// body: postData
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