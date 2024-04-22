import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const restaurantId = useParams("restoId");
  let restaurantDetails = useState(undefined);
  useEffect(() => {
    fetchRestoMenuData();
  }, []);
  const fetchRestoMenuData = async () => {
    await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=585360&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    )
      .then(async (res) => {
        restaurantDetails = await res.json();
        console.log("resto details", restaurantDetails);
      })
      .catch((e) => {
        console.log("error while fetching restaurant menu", e);
      });
  };
  console.log("res: ", restaurantId);
  return (
    <div className="menu-container">
      <div className="menu-border">
        <div>
          4.5 K Ratings <div>300 for two</div>
        </div>
        <div>Street food</div>
        <div>Outlet kothrud</div>
        <div>30-35 mins</div>
        <div>Additional delivery charges will apply</div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
