import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  //   const [resInfo, setResInfo] = useState(null);
  // Loading Restaurant data
  const { resId } = useParams(); // useParams hook returns us the id from url param as resId destuctring it here
  const resInfo = useRestaurantMenu(resId);

  //   Delegated the data fetching to useRestaurantMenu custom hook in above line

  //   useEffect(() => {
  //     fetchMenu();
  //   }, []);

  //   const fetchMenu = async () => {
  //     const data = await fetch(MENU_API + resId);
  //     console.log("data", data);
  //     const json = await data.json();
  //     console.log(json);
  //     setResInfo(json.data);
  //   };

  console.log("resInfo", resInfo);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
