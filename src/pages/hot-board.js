import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './page.css';

import CommonTable from '../components/table/CommonTable';
import CommonTableColumn from '../components/table/CommonTableColumn';
import CommonTableRow from '../components/table/CommonTableRow';

function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=> {
      setData(response.data);
    })
  }, []);

  const item = (Object.values(data)).map((Hotboard) => (
    <CommonTableRow key={Hotboard.id}>
      <CommonTableColumn>{Hotboard.id}</CommonTableColumn>
      <CommonTableColumn>
        <Link to={`/Hotboard/${Hotboard.id}`}>
          {Hotboard.title}
        </Link>
      </CommonTableColumn>
      <CommonTableColumn>{Hotboard.username}</CommonTableColumn>
      <CommonTableColumn>{Hotboard.num}</CommonTableColumn>
      <CommonTableColumn>{Hotboard.username}</CommonTableColumn>
    </CommonTableRow>
  ));

  return item;
}

function Hotboard() {
  const item = GetData();

  return (<>

    <h1>HOT게시판</h1>
    <div class="search" style={{paddingRight: 480}}><input id="title_search" type="text" placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)} /></div>
    <CommonTable headersName={['글번호', '작성자', '제목', '작성일', '조회수']}>
      {item}
    </CommonTable>
  </>);
}
  
export default Hotboard;