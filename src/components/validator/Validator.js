// ******************************
export const validator = (values, fieldName) => {
  let errors = {};
  switch (fieldName) {
    case "email":
      validateEmail(values.email, errors);
      break;
    case "password":
      validatePassword(values.password, errors);
      break;
    case "nickname":
      validateNickname(values.nickname, errors);
      break;
    case "title":
      validateTitle(values.title, errors);
      break;
    case "petitionmsg":
      validatePetitionMsg(values.petitionmsg, errors);
      break;     
    default:
  }
  return errors;
};

function validateEmail(email, errors) 
{
  let result = true;

  if (!email) 
  {
    errors.email = "이메일은 필수입니다!";
    result = false;
  } 
  else 
  {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    result = re.test(String(email).toLowerCase());
    if (!result) errors.email = "올바르지 않은 이메일 형태 입니다.";
  }

  return result;

}
// ******************************
function validatePassword(pass, errors) 
{
  let result = true;

  if (!pass) 
  {
    errors.password = "비밀번호는 필수입니다";
    result = false;
  } 
  else 
  {
    var lower = /(?=.*[a-z])/;
    result = lower.test(pass);

    if (!result) 
    {
      errors.password = "비밀번호는 최소한 영어 소문자 1자 이상 필요합니다.";
      result = false;
    } 
    else if (pass.length < 8) 
    {
      errors.password = "비밀번호는 최소 8자 이상이어야합니다.";
      result = false;
    }

  }

  return result;
}

// ******************************
function validateNickname(nickname, errors)
{
  let result = true;

  if (!nickname) 
  {
    errors.nickname = "닉네임은 필수입니다";
    result = false;
  } 
  else 
  {
    if (nickname.length < 2) 
    {
      errors.nickname = "닉네임은 최소 2자 이상이어야합니다.";
      result = false;
    }
    else if(nickname.length > 16)
    {
      errors.nickname = "닉네인은 15자 이하이어야합니다."
      result = false;
    }
  }

  return result;
}
// ******************************
function validateTitle(title, errors)
{
  let result = true;

  if (!title) 
  {
    errors.title = "제목은 필수입니다";
    result = false;
  } 
  else 
  {
    if (title.length < 5) 
    {
      errors.title = "제목은 최소한 5자 이상이어야합니다";
      result = false;
    }
    else if (title.length > 51) 
    {
      errors.title = "제목은 최대 50자입니다.";
      result = false;
    }

  }

  return result;
}
// ******************************
function  validatePetitionMsg(petitionmsg, errors)
{
  let result = true;

  if (!petitionmsg) 
  {
    errors.petitionmsg = "내용이 필요합니다!";
    result = false;
  } 
  else 
  {
    if (petitionmsg.length < 50) 
    {
      errors.petitionmsg = "내용물은 최소한 50자 이상이어합니다.";
      result = false;
    }
    else if (petitionmsg.length < 501) 
    {
      errors.petitionmsg = "내용물은 최대 500자입니다!";
      result = false;
    }

  }

  return result;
}