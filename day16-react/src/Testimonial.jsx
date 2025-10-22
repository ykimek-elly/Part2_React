//Testimonial.jsx

//내가 직접 태그를 만들었다.
// 1. 함수를 이용해서 동적으로 만든다.

import "./Testimonial.css";

export default function Testimonial() {
  return (
    <div>
        {/* 첫번째 리액트에서 이미지 가져오는 방법
             이미지 주소 복사가 가장 빠른 방법! */}
        <img src="https://e7.pngegg.com/pngimages/825/741/png-clipart-kakaotalk-kakao-friends-sticker-iphone-iphone-electronics-smiley-thumbnail.png" 
             alt="개발자 사진" />
    </div>
  )
}
// 리액트는 함수를 부르면 화면이 생기는 프로그램
// 1. App()함수가 동작한다.
// 2. return () 안에 HTML을 읽는다. (화면에 표시할 내용 준비)
// 3. Testmonial을 태그를 만나면 (내가 만든 태그 실행!)
// 4. 그 함수를 실행해서 return (내가 만든 태그들을 화면에 표시할 준비)
// 5. App()으로 가지고 와서 화면에 보인다.