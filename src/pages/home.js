import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import CommonTable from '../components/table/CommonTable';
import CommonTableColumn from '../components/table/CommonTableColumn';
import CommonTableRow from '../components/table/CommonTableRow';
import styled from 'styled-components'


function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=> {
      setData(response.data);
    })
  }, []);

  const item = (Object.values(data)).map((Home) => (
    <CommonTableRow key={Home.id}>
      <CommonTableColumn>{Home.id}</CommonTableColumn>
      <CommonTableColumn>
        <Link to={`/Home/${Home.id}`}>
          {Home.title}
        </Link>
      </CommonTableColumn>
      <CommonTableColumn>{Home.username}</CommonTableColumn>
      <CommonTableColumn>{Home.num}</CommonTableColumn>
    </CommonTableRow>
  ));

  return item;
}

const SimpleButton = styled.button`
  color:white;
  background-color: pink;
`;
function Home() {
  const item = GetData();

  return (<>

    <h1>Home</h1>
    <div class="search"><input type="text" placeholder="검색어를 입력하세요." onChange={(e)=>this.searchSpace(e)} /></div>
    <h3 color={'blue'}>HOT!   기숙사가 너무 더워요! 에어컨 틀어주세요!</h3>
    <>
    <SimpleButton>안녕하세요</SimpleButton>
    <SimpleButton>버튼씨</SimpleButton>
    <SimpleButton>헐우와</SimpleButton>
    <SimpleButton>기쁘다</SimpleButton>
    </>
    <CommonTable headersName={['글번호', '작성자', '제목', '작성일', '조회수']}>
      {item}
    </CommonTable>
  </>);
}

export default Home;

