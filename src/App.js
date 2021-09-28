import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginKakao from "./components/LoginKakao";
import LoginNaver from "./components/LoginNaver";
import Main from "./pages/Main";
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Route path='/' exact component={Home} />
        {/* 추후에 /login/kakao, /login/naver 로 분리 */}
        <Route path='/callback/kakao' component={LoginKakao} />
        <Route path='/callback/naver' component={LoginNaver} />
        <Route path='/main' component={Main} />
      </BrowserRouter>
  );
}

export default App;
