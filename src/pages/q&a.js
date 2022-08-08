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

  const item = (Object.values(data)).map((QA) => (
    <CommonTableRow key={QA.id}>
      <CommonTableColumn>{QA.id}</CommonTableColumn>
      <CommonTableColumn>
        <Link to={`/QA/${QA.id}`}>
          {QA.title}
        </Link>
      </CommonTableColumn>
      <CommonTableColumn>{QA.username}</CommonTableColumn>
      <CommonTableColumn>{QA.num}</CommonTableColumn>
    </CommonTableRow>
  ));

  return item;
}

function QA() {
  const item = GetData();

  return (<>

    <h1>Q&A</h1>
    <input type="text" placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)} />
    <CommonTable headersName={['글번호', '제목', '작성자', '작성일', '조회수']}>
      {item}
    </CommonTable>
  </>);
}
  
export default QA;