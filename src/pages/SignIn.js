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

  const item = (Object.values(data)).map((CreateAccount) => (
    <CommonTableRow key={CreateAccount.id}>
      <CommonTableColumn>{CreateAccount.id}</CommonTableColumn>
      <CommonTableColumn>
        <Link to={`/CreateAccount/${CreateAccount.id}`}>
          {CreateAccount.title}
        </Link>
      </CommonTableColumn>
      <CommonTableColumn>{CreateAccount.username}</CommonTableColumn>
      <CommonTableColumn>{CreateAccount.num}</CommonTableColumn>
    </CommonTableRow>
  ));

  return item;
}

const SimpleButton = styled.button`
  font-size:25px;
  color:white;
  background-color: #152C46;
`;
const LargeButton = styled(SimpleButton)`
  font-size:30px;
  color:gray;
  background-color: #EEEEEE;
`;
function SignIn() {
  const item = GetData();

  return (<>
  <p>
    <ol>
      <h1>로그인</h1>
      <LargeButton>아이디를 입력해주세요</LargeButton>
      <p><LargeButton>비밀번호를 입력해주세요</LargeButton></p>
      <>아이디찾기</> <>비밀번호찾기</> <SimpleButton>로그인</SimpleButton>

    </ol>
  </p> 
  </>);
}
export default SignIn;