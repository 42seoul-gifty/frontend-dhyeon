import React, {useState} from "react";
import Logo from './Logo';
import "../styles/Main.css"

function Main() {

	const [isOpen, setMenu] = useState(false);
	const toggleMenu = () => {
		setMenu(isOpen => !isOpen);
	}

	return (
		<>
		<div className="main-container">
			<section className="header">
				<Logo />
				<button onClick={toggleMenu}>menu</button>
				<div className={isOpen? "show-menu" : "hide-menu"}>
					<h1>OOO님 안녕하세요!</h1>
					<ul>
						<li>이용약관</li>
						<li>정보보안규약</li>
						<li>기프티 소개</li>
						<li>로그아웃</li>
					</ul>
				</div>
			</section>
			<section className="body">
				<div className="body_container">
					
					<h2>유어위시의</h2>
					<h1>선물 서비스</h1>
					
					<div className="button-container">
						<button>개인맞춤 선물하기</button>
						<button>추석선물</button>
						<button>단체문의</button>
					</div>
				</div>
			</section>
		</div>
		</>
	)
}

export default Main;