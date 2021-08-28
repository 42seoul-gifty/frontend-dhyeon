import React from "react";
import KakaoLoginImg from "../images/kakao_login.png";


const REST_API_KEY = "82bc00a056d39582ec6d9aef218f5927"
const REDIRECT_URI = "http://localhost:3000/login"
function Home() {
	const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`
	return (
		<div className="login-container">
			Home
			<a href={kakaoUrl} className="login-button">
				<img src={KakaoLoginImg} alt="카카오로 로그인하기" />
			</a>
		</div>
	);
}

export {REDIRECT_URI, REST_API_KEY};
export default Home;