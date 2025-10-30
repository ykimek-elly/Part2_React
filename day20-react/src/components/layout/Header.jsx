// 폴더명 : components/layout 
// 파일명: Header.jsx

import { Link } from "react-router-dom";

function Header(){
    return (
    <div className="header-section">
        <nav className="nav">
            {/* 클릭을 때 각 페이지로 이동할 수있도록 설정 */}
            <ul>
                <li>
                    <Link to="/">🏠Home</Link>
                </li>
                 <li>
                    <Link to="/about">📖About</Link>
                </li>
                 <li>
                    <Link to="/content">📬Content</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
// App에서 보이기 해야된다.(공유)
export default Header;