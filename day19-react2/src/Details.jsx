// Details.jsx 
// - detail(상세페이지를 만든다!)
// - 페이지 단위로 파일을 만들기
import './Details.css'

function Details(){
    return (
        <div className="detail-box">
            <div className="detail-box-title">
                <h1>Details</h1>
            </div>

            <div className="detail-box-content">
                <div className="detail-box-content-img">
                    <img src="https://image.production.fruitsfamily.com/public/product/resized%40width1125/uwUSX0mV7N-D766AE2E-F8ED-45C2-BBCD-8C8A02D51648.jpg" alt="" />
                </div>
                <div className="detail-box-content-img-text">
                    <h3>Springfield 가디건</h3>
                    <p>연 베이지 가디건 어떠니? 사고 싶지 않아?</p>
                    <input type="number" />
                    <select >
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    <br/>
                    <button>장바구니 담기</button>
                    <button>마이페이지 이동</button>

                </div>
            </div>
        </div>
    )
}

// 위에서 Details페이지 만들었으니깐 App에 추가하기
export default Details;