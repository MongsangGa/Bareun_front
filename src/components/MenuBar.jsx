import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    border: 1px solid black;
`;

const MenuItem = styled(Link)`
    color: black;
    text-decoration: none;
    margin: 10px 0;
    font-size: 18px;
    &:hover {
        color: gray;
    }
`;

const MenuBar = () => {
    return (
        <MenuContainer>
            <MenuItem to="/page">메타버스 월드</MenuItem>
            <MenuItem to="/page/avatar">아바타 만들기</MenuItem>
            <MenuItem to="/page/videocall">영상통화</MenuItem>
            <MenuItem to="/page/chatting">채팅</MenuItem>
            <MenuItem to="/page/community">게시판</MenuItem>
            <MenuItem to="/page/learning">학습하기</MenuItem>
        </MenuContainer>
    );
};

export default MenuBar;
