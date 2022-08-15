import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Na} from './NavbarElements';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <>
    <Na>
      <NavLink to="/">
        <h1 style={{color: '#000', size: '40px'}}>대학신문고</h1>
      </NavLink>
      <NavBtn>
        <NavBtnLink to='/CreateAccount'>회원가입</NavBtnLink>
        <NavBtnLink to='/Mypage'>마이페이지</NavBtnLink>
        <Button href="/SignIn" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Login
        </Button>
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
        <NavLink to='/petition' activeStyle>
          진행중인 청원
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