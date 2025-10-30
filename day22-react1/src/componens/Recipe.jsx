
export default function Recipe(rec) {
  return (
    <tr>
            <td>{rec.id}</td>
            <td>{rec.name}</td>
            <td>{rec.cuisine}</td>
            <td>⭐{rec.rating}</td>
            <td>{rec.caloriesPerServing}</td>
            <td>
                <img style={{
                    width: "80px"
                    ,height : "80px"  
                }} 
                    src={rec.image} />
            </td>
            </tr>
  )
}


