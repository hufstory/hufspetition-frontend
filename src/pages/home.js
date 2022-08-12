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

function Home() {
  const item = GetData();

  return (<>

    <div class="search"><input type="text" placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)} /></div>
    <h3>인기글 제목표시란</h3>
    <CommonTable headersName={['글번호', '제목', '작성자', '작성일', '조회수']}>
      {item}
    </CommonTable>
  </>);
}
export default Home;