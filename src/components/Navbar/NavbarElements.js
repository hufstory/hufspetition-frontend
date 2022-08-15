import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

/*사이트명&로그인 배경*/
export const Na = styled.nav`
    height: 50px;
    padding: 0px 0px 10px 20px;
    display: flex;
    align-items: center;
    /*justify-content: space-between;*/
    z-index: 10;
    white-space: nowrap;
`;

/*게시판카테고리 배경*/
export const Nav = styled.nav`
    background: #152C46;
    height: 80px;
    display: flex;
    justify-content: center;
    padding: 0.5rem calc((100vw - 2000px) / 2);
    z-index: 10;
`;


/*게시판카테고리line*/
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 20px 70px 20px 40px;
    height: 10px;
    cursor: pointer;
    font-size: 21px;
    white-space: nowrap;

`;

/*???*/
export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    @medias screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    justify-content: flex-end;
    width: 100vw;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: inherit;
    padding: 10px 22px;
    color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: inherit;
        color: inherit;
    }
`;