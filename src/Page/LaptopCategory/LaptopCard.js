import { BsCheckCircleFill } from "react-icons/bs";

const LaptopCard = ({ categoryDetails, setCategoryInfo }) => {
  const {
    laptop_img,
    laptop_name,
    location,
    resale_price,
    original_price,
    usage_time,
    post_date,
    seller_name,
    seller_verified,
    booked,
  } = categoryDetails;

  const handleCategoryInfo = () => {
    setCategoryInfo(categoryDetails);
  };

  return (
    <div className={booked ? "hidden" : "block"}>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={laptop_img} alt="Shoes" />
        </figure>
        <div className="card-body gap-0">
          <h2 className="card-title">{laptop_name}</h2>
          <p>
            <small>Location: {location}</small>
          </p>
          <p>
            <small>Post Date: {post_date}</small>
          </p>
          <p className="my-1">Resale Price: {resale_price}</p>
          <p className="my-1">Original Price: {original_price}</p>
          <p className="my-1">Years of Use: {usage_time}</p>
          <p className="my-1 flex items-center gap-1">
            Seller: {seller_name}{" "}
            {seller_verified && (
              <BsCheckCircleFill className="text-blue-900"></BsCheckCircleFill>
            )}{" "}
          </p>
          <div className="flex flex-col gap-2 mt-5">
            <label
              onClick={handleCategoryInfo}
              htmlFor="booking-modal"
              className="btn btn-primary"
            >
              Book Now
            </label>
            <button className="btn btn-primary">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopCard;
