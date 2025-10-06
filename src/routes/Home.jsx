import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";

function Home() {
  const items = useSelector( (store) => store.items)
  console.log(items);
  
  
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
