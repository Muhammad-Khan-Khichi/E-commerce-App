import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";

function Home() {
const items = useSelector((store) => store.items || []);

  console.log(items);
  
  
  if (!items) return <p>Loading...</p>;

  if (Array.isArray(items) && items.length === 0)
    return <p>No items found.</p>;
  
  return (
    <>
      <div>
        {items.map((item) => {
          return <HomeItem key={item.id} item={item}/>
        })}
      </div>
    </>
  );
}

export default Home;
