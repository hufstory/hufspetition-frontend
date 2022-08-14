import React from 'react';
import './petition.css';

function Petition() {
  return (<>
    <h1>청원하기</h1>
      <div className='Write'>
          <form onSubmit>
              <div class="title">
                <h3>제목</h3>
                <input type='text' id='title_txt' name='title' placeholder='제목을 입력해주세요.'/> 
              </div>
              <div class="content">
                <h3>내용</h3>
                <textarea id='ex_txt' name='content_txt' placeholder='설문내용에 대해 설명해주세요'></textarea>    
              </div>
              <div class="link">
                <h3>첨부파일</h3>
                <input type='url' id='link_txt' name='url' placeholder='링크'/> 
              </div>
              <div class="submit_btn">
                  <button class="save" type="submit">저장</button>&nbsp;&nbsp;
                  <button class="cancel">취소</button>
              </div>
          </form>
      </div>
      </>);
}

export default Petition;