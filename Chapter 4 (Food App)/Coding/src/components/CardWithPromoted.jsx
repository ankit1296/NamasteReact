import RestaurantCard from "./RestaurantCard";

const CardWithPromoted = () => {
  return ({ props }) => {
    return (
      <div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default CardWithPromoted;
