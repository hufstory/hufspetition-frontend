import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { IoSearch } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiHandHeartLine } from "react-icons/ri";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        HUFS coder
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: '기숙사 수질 검사를 요청합니다!',
    subheader: '작성자:yys3****',
    description: [
      '기숙사를 사용하고 있는데 샤워기 필터기가 2주만 되도 너무 더러워져요ㅠㅠ 물이 너무 더러워요!! 수질 검사를 요청합니다.',
    ],
    buttonText: '청원 동의하러가기',
    buttonVariant: 'outlined',
  },
  {
    title: '몇일 전 학교 후생관에서 ****한 일을 고발합니다.',
    subheader: '작성자:gttk0****',
    description: [
      '안녕하십니까 **대 학우 여러분 저는 **대학교 *****학과 **학번 ***이라고 합니다. 다름이 아니라....',
    ],
    buttonText: '청원 동의하러가기',
    buttonVariant: 'outlined',
  },
  {
    title: '빵차 배차간격에 대해 논의해보고 싶습니다!',
    subheader: '작성자: li5h****',
    description: [
      '한국외국어대학교 글로벌캠퍼스에는 빵차가 다니고 있지만'  ],
    buttonText: '청원 동의하러가기',
    buttonVariant: 'outlined',
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
      {/*검색창*/} 
      <div class="box">
        <div class="Container1">
        <span class="icon"><i class="fa fa-search"></i></span>
        <input type="search" style={{width: 500, height: 50, borderRadius: 30}} id="search" placeholder="  검색어를 입력하세요." /><IoSearch />
        </div>
      </div>
      <Typography
          component="h3"
          variant="h4"
          text-align="justify"
          color="red">
          HOT!
        </Typography>
        <Typography 
          variant="h5" 
          align="center" 
          color="text.secondary">
          기숙사의 수질 검사를 요청합니다!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                  <RiHandHeartLine />
                    <Typography component="h4" color="text.primary">
                      36 
                    </Typography>
                  <IoChatboxEllipsesOutline />
                    <Typography component="h4" color="text.primary">
                      254
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}