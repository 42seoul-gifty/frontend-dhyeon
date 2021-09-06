import React from "react";
import KakaoLoginImg from "../images/kakao_login2.png";
import NaverLoginImg from "../images/naver_login.png";
import { REDIRECT_URI, KAKAO_REQUEST_URL, KAKAO_REST_API_KEY, 
	NAVER_REQUEST_URL, NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from "../components/config";
import "../styles/Home.css";


function Home() {
	const NAVER_STATE = "abcdefg";
	const kakaoUrl = `${KAKAO_REQUEST_URL}${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`
	const NaverUrl = `${NAVER_REQUEST_URL}${NAVER_CLIENT_ID}&state=${NAVER_STATE}&redirect_uri=${REDIRECT_URI}`;
	
	return (
		<>
		<div className="container">
			<div className="logo">YOUR WISH</div>
			<div className="login-container">
				
				<a href={kakaoUrl} className="login-button">
					<img src={KakaoLoginImg} alt="카카오로 로그인하기" />
				</a>
				<a href={NaverUrl} className="login-button">
					<img src={NaverLoginImg} className="naver-button" alt="네이버로 로그인하기" />
				</a>

			</div>
		</div>
		</>
	);
}

export default Home;