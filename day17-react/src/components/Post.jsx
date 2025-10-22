

export default function Post({title,userId,id,body}) {
  return (
    <div>
        <h3>{title}</h3>
        <ul>
            <li>{userId}</li>
            <li>{id}</li>
            <li>{body}</li>
        </ul>
    </div>
  )
}
