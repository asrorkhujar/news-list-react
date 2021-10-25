function Item(newss){
  return (
    <li className="mt-4">
      <p className="news__name fw-bold">{newss.name}</p>
      <p className="news__desc">{newss.desc}</p>
      <p className="news__tags text-warning">{newss.tags}</p>
      <button className="news__delete-button btn btn-danger" type="button">Delete</button>
    </li>
  )
}

export default Item;