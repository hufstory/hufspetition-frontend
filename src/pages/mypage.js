import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  const item = (Object.values(data)).map((Mypage) => (
    <CommonTableRow key={Mypage.id}>
      <CommonTableColumn>{Mypage.id}</CommonTableColumn>
      <CommonTableColumn>
        <Link to={`/Mypage/${Mypage.id}`}>
          {Mypage.title}
        </Link>
      </CommonTableColumn>
      <CommonTableColumn>{Mypage.username}</CommonTableColumn>
      <CommonTableColumn>{Mypage.num}</CommonTableColumn>
    </CommonTableRow>
  ));

  return item;
}

function Mypage() {
  const item = GetData();

  return (<>

    <h1>Mypage</h1>
    <div class="search"><input type="text" placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)} /></div>
    <CommonTable headersName={['글번호', '제목', '작성자', '작성일', '조회수']}>
      {item}
    </CommonTable>
  </>);
}
  
export default Mypage;