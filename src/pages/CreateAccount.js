import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



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
/*
const Checkbox = styled.button`
`;
*/
const SimpleButton = styled.button`
  font-size:20px;
  color:white;
  background-color: #152C46;
`;
/*
const LargeButton = styled(SimpleButton)`
  font-size:30px;
  color:gray;
  background-color: #EEEEEE;
`;
*/
const Button = styled(SimpleButton)`
  font-size:23px;
  color:gray;
  background-color: #EEEEEE;
`;

function CreateAccount() {
  const item = GetData();

  return (<>
  <p>
    <ul>
    <h1>회원가입</h1>
      <li>이름</li>
      <Button variant="outlined">본인의 이름을 입력해주세요.</Button>
      <p></p>
      <li>인증받을 이메일을 입력해주세요.</li>
      <Button>이메일</Button>
      <p></p>
      <li>사용할 아이디를 입력해주세요.</li>
      <Button>아이디</Button>
      <p></p>
      <li>사용할 비밀번호를 입력해주세요.</li>
      <Button>비밀번호</Button>
      <p></p>
      <li>입력하신 비밀번호를 다시 입력해주세요.</li>
      <Button>비밀번호 확인</Button>
      <p></p>
      <li><input type="Checkbox" />이용약관 및 개인정보처리방침에 동의합니다.</li>
      <p></p><SimpleButton>회원가입</SimpleButton>
    </ul>
  </p>
    
  </>
  );
}
export default CreateAccount;