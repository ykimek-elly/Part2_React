import "./ScssEx2.scss";
import React from 'react'

export default function ScssEx2() {
  return (
    <div>
        <h3>scss-for문</h3>
        <div className="loop-container">
            <h3>반복문 예제</h3>
            <div className="box-list">
                <div className="box box-1">1</div>
                <div className="box box-2">2</div>
                <div className="box box-3">3</div>
                <div className="box box-4">4</div>
                <div className="box box-5">5</div>
            </div>
        </div>


        <br /><br /><br />
        <h3>Scss- if문!</h3>
        <div className="box-if">if문 테스트</div>
    </div>

  )
}
