import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Na} from './NavbarElements';

const Navbar = () => {
  return (
    <>
    <Na>
      <NavLink to="/">
        <h1 style={{color: '#000', size: '40px'}}>대학신문고</h1>
      </NavLink>
      <NavBtn>
        <NavBtnLink to='/SignIn'>로그인</NavBtnLink>
        <NavBtnLink to='/CreateAccount'>회원가입</NavBtnLink>
      </NavBtn>
    </Na>

    <Nav>
      <Bars />
      <NavMenu>
        <NavLink to='/notice' activeStyle>
          공지사항
        </NavLink>
        <NavLink to='/hot-board' activeStyle>
          HOT게시판
        </NavLink>
        <NavLink to='/free-board' activeStyle>
          자유게시판
        </NavLink>
        <NavLink style={{fontWeight: 'bold'}} to='/petition' activeStyle>
          청원하기
        </NavLink>
        <NavLink to='/end-petition' activeStyle>
          동의종료된 청원
        </NavLink>
        <NavLink to='/mypage' activeStyle>
          마이페이지
        </NavLink>
        <NavLink to='/q&a' activeStyle>
          Q&A
        </NavLink>
        </NavMenu>
    </Nav>
    </>
  );
}

export default Navbar;