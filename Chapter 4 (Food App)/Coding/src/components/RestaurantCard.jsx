const styleCard = {
  backgroundColor: "transparent",
};

const RestaurantCard = ({ resData }) => {
  const { sla, name, locality, cloudinaryImageId, avgRating, cuisines } =
    resData.info;
  return (
    <div className="res-card" style={styleCard}>
      <div className="res-card-img-container">
        <div className="res-card-img">
          <img
            className="img-width"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            alt="hotel-img"
          />
        </div>{" "}
      </div>
      <div>
        <div>
          <div className="res-card-title"> {name} </div>{" "}
        </div>{" "}
        <div className="res-card-subtext">
          <div className="rating"> </div>
          <div className="subtext">
            {" "}
            {avgRating} {sla.slaString}{" "}
          </div>
        </div>
        <div className="res-card-description">
          <div className="des-text"> {cuisines[0]} </div>
          <div className="des-text"> {locality} </div>{" "}
        </div>{" "}
      </div>{" "}
      <h4> </h4> <h4> </h4> <h4> </h4>
    </div>
  );
};

export default RestaurantCard;
