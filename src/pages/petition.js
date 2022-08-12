import React from 'react';
import Button from '@mui/material/Button';

const Petition = () => {
  return (
    <div
        style={{display: 'flex', 
        justifyContent:'center', 
        alignItems: 'center', 
        height: '90vh'
        }}
    >
      <h1>Petition</h1>
    </div>
  );
}

function Article(){
  return(
    <article>
      <h2> 호이호이 </h2>
      Hello web!
      <br />
      <Button variant="outlined">버튼</Button>
      </article>
  );
}
export default Petition;
