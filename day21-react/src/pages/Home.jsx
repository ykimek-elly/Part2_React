// 폴더명: pages
// 파일명: Home.jsx

import React from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'


export default function Home() {

  let cardInfo ={
  "id": 1,
  "title": "Essence Mascara Lash Princess",
  "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  "images": [
    "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
  ]
}

let cardInfo2 ={
  "id": 2,
  "title": "Eyeshadow Palette with Mirror",
  "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
  "images": [
    "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
  ]
}

  return (
    <div>
        {/* <h3>부트스트랩 라이브러리</h3> */}
        <Carousel>
            <Carousel.Item>
                {/* 부트스트랩에서 캐러셀의 디자인을 해야될 때는 클래스
                이름으로 미리 만들어져있다. 
                본인이 직접 클래스를 만들어서 디자인 하시면 됩니다 */}
                <img className='home-carousel-img' 
                    src='https://www.ediya.com/files/banner/IMG_1761609114336.jpg'/>
              
            </Carousel.Item>

            <Carousel.Item>
                <img className='home-carousel-img'
                    src='https://www.ediya.com/files/banner/IMG_1760950125789.jpg'/>
              
            </Carousel.Item>
            <Carousel.Item>
                <img className='home-carousel-img'
                    src="https://www.ediya.com/files/banner/IMG_1758517969443.jpg

" alt="" />
               
            </Carousel.Item>
            </Carousel>

            <h3>🍳상품들</h3>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={cardInfo.images[0]} />
                <Card.Body>
                    <Card.Title>{cardInfo.title}</Card.Title>
                    <Card.Text>
                    {cardInfo.description}
                    </Card.Text>
                    <Button variant="primary">Card Add</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={cardInfo2.images[0]} />
                <Card.Body>
                    <Card.Title>{cardInfo2.title}</Card.Title>
                    <Card.Text>
                    {cardInfo2.description}
                    </Card.Text>
                    <Button variant="primary">Card Add</Button>
                </Card.Body>
            </Card>




        {/* <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button> */}
    </div>
  )
}
// 리액트 부트스트랩 사용하기
// - npm install react-bootstrap bootstrap
// - npm install bootstrap-icons
// - 한번만 라이브러리 다운받으면 된다!
// -