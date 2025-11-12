import React, { useState } from 'react'

export default function UploadModel() {


    // 선택된 파일을 저장하는 변수 (화면에 보여야되니깐)
    //  미리보기 사용할 꺼면 preview변수에 저장한다.
    const [preview,setPreview] = useState(null);


    // 실제 드레그가 되서 드롭된 파일이 오면 처리하는 함수!
    function handleDrop(e){
        e.preventDefault();  //기본 기능 막기!

        // 리액트는 드래그를 하거나 드롭할 때 
        // 브라우저가 전달해주는 정보 꾸러미(가방)따로 생긴다.
        const dropFile = e.dataTransfer.files[0];
        console.log(dropFile);
        setPreview(URL.createObjectURL(dropFile));

    }

  return (
    <div className='box-content size-150 border-4 p-4 '>
       <h1>Create New post</h1>
       {/* 실제 동작을 하는 input태그는 숨기기 */}
       <input 
            id = 'fileInput'
            style={{ display : 'none'}}
            type='file'
            accept='image/*'
            // 사진이 들어오면 실행하는 함수!
            onChange={
                (e) =>{
                    const file = e.target.files[0];
                    if(file) {
                        //  URL.createObjectURL(file)
                        //  - 브라우저가 파일을 화면에 보여줄 수있도록 
                        //    url로 변경하는 기능!
                        setPreview(URL.createObjectURL(file));
                    }
                }
            }
       
       />

       {/*  드래그 앤 드롭 박스 디자인  */}
       <div 
        //   이 박스는 파일 드롭해도 돼!
        //   기본적으로 브라우저에 있는 기본 기능을 막는다!
          onDragOver={ (e) => {e.preventDefault()}}

        //   드롭된 파일을 실제로 처리하는 함수
          onDrop={handleDrop}
        
        //   박스를 클릭하면 파일 선택창을 열어주는 기능
        //   onClick={}
          style={{
          width: 200,
          height: 200,
          border: "2px dashed gray",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          background: "#f3f3f3",
          marginBottom: 10
        }}>
            {
                preview ? (
                    <img src={preview} 
                         alt=''
                         style={{ width: "100%"
                               , height: "100%"
                               , borderRadius: 10
                               , objectFit: "cover" }}
                    />
                    ) :
                   ("이미지 드래그 or 클릭")
            }
       </div>
    </div>
  )
}