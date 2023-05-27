import React, {useState} from "react"

function Item({ name, category }) {

  const [inCart, setCart] = useState(false)
  const [btnLabel, setLabel] = useState(true)

    function handleClick () {
      return (setCart(!inCart), setLabel(!btnLabel))
    }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{btnLabel ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  )
}

export default Item
