import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const LaptopCard = ({ categoryDetails, setCategoryInfo }) => {
  const { user } = useContext(AuthContext);
  const [disableButton, setDisableButton] = useState(null);
  const {
    _id,
    category,
    laptop_img,
    laptop_name,
    laptopDesc,
    location,
    resale_price,
    original_price,
    usage_time,
    post_date,
    seller_name,
    seller_verified,
    booked,
  } = categoryDetails;

  //checks which laptop did this user booked
  const { data: userOrdersInfo, refetch } = useQuery({
    queryKey: ["userOrdersInfo"],
    queryFn: async () => {
      const res = await fetch(
        `https://laptop-bazar-server-one.vercel.app/myOrders?buyerEmail=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleCategoryInfo = () => {
    setCategoryInfo(categoryDetails);
  };

  useEffect(() => {
    if (userOrdersInfo) {
      const findLaptop = userOrdersInfo.find((u) => u.laptop_id === _id);
      if (findLaptop) {
        setDisableButton(findLaptop._id);
      } else {
        setDisableButton(null);
      }
    }
  }, [_id, userOrdersInfo]);

  return (
    <div>
      <div className="card card-compact max-w-md bg-base-100 shadow-xl">
        <figure>
          <img src={laptop_img} alt="Shoes" />
        </figure>
        <div className="card-body gap-0">
          <h2 className="card-title break-all">{laptop_name}</h2>

          <p>
            <small>Location: {location}</small>
          </p>
          <p>
            <small>Post Date: {post_date}</small>
          </p>
          <p className="my-1 break-all">Resale Price: {resale_price}</p>
          <p className="my-1 break-all">Original Price: {original_price}</p>
          <p className="my-1 break-all">Years of Use: {usage_time}</p>
          <p className="my-1 flex items-center gap-1 break-all">
            Seller: {seller_name}{" "}
            {seller_verified === "true" && (
              <BsCheckCircleFill className="text-blue-900"></BsCheckCircleFill>
            )}{" "}
          </p>
          <p className="my-1 break-all">Original Price: {laptopDesc}</p>
          <div className="flex flex-col gap-2 mt-5">
            {setCategoryInfo ? (
              <>
                {" "}
                <label
                  onClick={handleCategoryInfo}
                  htmlFor="booking-modal"
                  className="btn btn-primary"
                  {...(disableButton && { disabled: true })}
                >
                  Book Now
                </label>
                <button
                  className="btn btn-primary"
                  {...(disableButton && { disabled: true })}
                >
                  Add to Wishlist
                </button>
              </>
            ) : (
              <Link to={`/category/${category}`} className="btn btn-primary">
                Order Now
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopCard;
