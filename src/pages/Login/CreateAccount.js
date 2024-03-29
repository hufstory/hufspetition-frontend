import React from 'react';
import axios from 'axios';

//Material UI 라이브러리 import
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
//import Alert from '@mui/material/Alert';
//import AlertTitle from '@mui/material/AlertTitle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { validator } from "../../components/validator/Validator"; // 올바른 정보인지 확인하는 모듈
import useForm from "../../components/validator/useForm";         // Textbox에 쓰일 onChange 헨들러

const initState = { // string variable default init(initState이라고 칭하자)
  email: "",
  password: "",
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

const theme = createTheme();

export default function CreateAccount() {

  const 
  {
    handleChange,
    handleBlur,
    errors
  } = useForm({initState, validator});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const options = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        "Accept": "application/json" }
    }


    axios.post('http://127.0.0.1/register/', // 회원가입 API 요청
      {email: data.get('email'),  // 이메일 보내기
      password: data.get('password') // 비밀번호 보내기
      //SchoolID: '123456789' // 일단 공모전때는 학번없기 때문에 임시로 123456789 처리하기
  }, options)
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

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              가입하기
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="아아디(이메일 주소)"
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
              onBlur={handleBlur}
              autoComplete="email"
              autoFocus
              />
              <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              onChange={handleChange}
              error={errors.password ? true : false}
              helperText={errors.password}
              onBlur={handleBlur}
              autoComplete="new-password"
              />
              <TextField
                required
                fullWidth
                name="password-confirm"
                label="비밀번호 확인"
                type="password"
                id="password-confirm"
                autoComplete="off"
              />
              <FormControlLabel
                control={<Checkbox value="ConfirmPrivacy" color="primary" />}
                label="개인정보 정보 수신 동의"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                가입하기
              </Button>
              <Grid container>
                <Grid item xs>
                <Link href="./SignIn" variant="body2">
                  계정 이미 갖고계신가요? 로그인 하세여!
                </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}