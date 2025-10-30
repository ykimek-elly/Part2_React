// Header.jsx
import './Header.css'

// 내가 원하는 헤더 페이지 만들기 
function Header(){
    return (
        <header>
            <nav>
                <a href="/">Home</a>
                <a href="/details">Details</a>
                <a href="/login">Login</a>
            </nav>
        </header>
    )
}
export default Header;