
function HomeItem({item}) {
  return (
    <div>
      <img src={item.image} />
      <div>
        {item.rating.stars} | {item.rating.count}
      </div>
      <div>{item.company}</div>
      <div>{item.item_name}</div>
      <div>{item.current_price}</div>
      <div>{item.original_price}</div>
      <div>{item.discount_percentage}</div>
      
    </div>
  )
}

export default HomeItem
