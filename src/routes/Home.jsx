import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";

function Home() {
const items = useSelector((store) => store.items || []);

  
  
  if (!items) return <p>Loading...</p>;

  if (Array.isArray(items) && items.length === 0)
    return <p>No items found.</p>;
  
  return (
    <>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => {
          return <HomeItem key={item.id} item={item}/>
        })}
      </div>
    </>
  );
}

export default Home;
