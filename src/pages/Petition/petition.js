import React from 'react';
import axios from 'axios';

//Material UI 라이브러리 import
import { Grid, TextField, Button, Card, CardContent, Typography, Link } from '@mui/material';

import { validator } from "../../components/validator/Validator"; // 올바른 정보인지 확인하는 모듈
import useForm from "../../components/validator/useForm";         // Textbox에 쓰일 onChange 헨들러

const initState = { // string variable default init(initState이라고 칭하자)
  nickname: "",
  title: "",
  petitionmsg: ""
};

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="google.com">
        HUFS Coder Team
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Petition() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post('http://127.0.0.1/petition/create', // 청원 API 글 생성 요청하기
    {
      creatorName: data.nickname,  // 이메일 보내기
      Title: data.title,
      postDetail: data.petitionmsg, // 비밀번호 보내기
    })
    .then((res)=>
    {
      if(res.status === 200) //만약에 서버가 성공적인 response를 보냈다면
      {
        //여기에서 성공 페이지랑 로그인 다이아로그로 redirect해야됨
      }
      else
      {
        //그외에는 그냥 json을 렌더링해야됨(왜냐하면 오류나 실패했기때문에..)
      }
      console.log(res); //디버깅 용도
    })
    .catch((err)=>
    {
      //여기는 그냥 오류이기에 그냥 홈페이지로 가거나 오류페이지(관리자한테 문의 같은것) 넣으면 된다.
      console.log(err);
    });

  };

  const 
  {
    handleChange,
    handleBlur,
    errors
  } = useForm({initState, validator});

  return (
    <div className="App"> 
      <Typography style={{ maxWidth: 700, maxHeight: 900, padding: "20px 5px 20px 5px", margin: "0 auto" }} gutterBottom variant="h3" align="center">
        청원 글 등록하기
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 700, maxHeight: 900, padding: "20px 5px 20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography style={{padding: "0px 5px 30px 5px", margin: "0 auto", fontSize: "18px"}} variant="body2" color="textSecondary" component="p" gutterBottom>
              부적절하거나 부실하게 글을 올릴시 삭제됩니다
            </Typography> 
            <form onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                <Grid xs={12} item>
                  <TextField 
                  name="nickname" 
                  placeholder="사용하실 닉네임 여기에서 쓰시오(2자 이상, 15자 이하)" 
                  label="닉네임" 
                  variant="outlined" 
                  fullWidth
                  onChange={handleChange}
                  error={errors.nickname ? true : false}
                  helperText={errors.nickname}
                  onBlur={handleBlur} 
                  required />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                  name="title" 
                  label="청원 글 제목" 
                  multiline rows={1} 
                  placeholder="여기에서 청원 글 제목 내용쓰시오!(5자 이상, 50자 이하)" 
                  variant="outlined" 
                  onChange={handleChange}
                  error={errors.title ? true : false}
                  helperText={errors.title}
                  onBlur={handleBlur}
                  fullWidth 
                  required />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                  name="petitionmsg" 
                  label="청원 글" 
                  multiline rows={12}
                  placeholder="여기에서 청원 글 내용쓰시오!(50자 이상, 500자 이하)" 
                  variant="outlined" 
                  onChange={handleChange}
                  error={errors.petitionmsg ? true : false}
                  helperText={errors.petitionmsg}
                  onBlur={handleBlur}
                  fullWidth 
                  required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>청원 글 올리기</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </div>
  );
}