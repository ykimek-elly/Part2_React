

export default function Product(props) {
  return (
    <div>
        <h3>상품명:{props.name}</h3>
        <p>가격:{props.price}</p>
    </div>
  )
}
