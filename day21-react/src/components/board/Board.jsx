//파일명: Board.jsx
// 게시글 한 줄을 작성하는 나만의 HTML태그!

import { Link } from "react-router-dom";

export default function Board({post}) {
  return (
    <tr>
        <td>1</td>
        <td>{post.id}</td>
        <td>
            <Link to='/boardDetail/1'>
                    {post.title}
            </Link>
        </td>
        <td>{post.content}</td>
    </tr>
  )
}