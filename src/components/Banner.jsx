import bg from "../assets/images/texture-bg.png";
import { useLocation, useParams } from "react-router-dom";
import HomeBanner from "./HomeBanner";
import { useStaticData } from "../context/StaticData";
import { number } from "framer-motion";

function Banner() {
  const {cars} = useStaticData();
  const location = useLocation().pathname;
  const isHomePage = location === "/";
  const banner_bg = bg;
  const {id} = useParams();

  const Product = cars.filter((car)=>car.id === Number(id));
  const Product_Name = Product[0]?.name || "No Products";

  
  const bannertitle = [
    { title: "Shop", path: "/shop", desc: "Browse our wide selection of high-quality cars and auto accessories." },
    { title: "Services", path: "/services", desc: "Explore our expert automotive services tailored to your needs." },
    { title: "Cart", path: "/cart", desc: "Review your selected items and proceed to secure checkout." },
    { title: "New Car", path: "/new", desc: "Check out the latest additions to our car collection." },
    { title: "Wishlist", path: "/wishlist", desc: "Save your favorite products and come back to them anytime." },
    { title: "Contact Us", path: "/contact", desc: "Have questions? Reach out to our support team today." },
    { title: "Not Found", path: "*", desc: "Oops! The page you're looking for doesn't exist." },
    { title: "Chickout", path: "/checkout", desc: "Process your Payment Here" },
    { title: `${Product_Name}`, path: `/product/${id}`, desc: (
    <>
      See more details about <span style={{ color: 'red' }}>{Product_Name}</span> to explore its features, pricing, and customer reviews.
    </>
  ) },
  ];


  return (
    <div className="w-full ">
      {/* Banner for Home Page */}
      {isHomePage && (
        <HomeBanner banner_bg={banner_bg} />
      )}

      {/* {Banner for another oage} */}
      {!isHomePage && (
        <div
          className="w-full h-auto bg-center bg-cover "
          style={{ backgroundImage: `url(${banner_bg})` }}
        >
          <div className="w-full px-2 h-[260px] content_banner_bg bg-opacity-50 flex items-center justify-center">
            {bannertitle.filter(item => item.path === location).map((item, index) => {
              return (
                <div key={index} className="text-center flex flex-col gap-3">
                  <h1 className="text-white text-4xl font-bold mb-2">
                    {item.title}
                  </h1>
                  <p className="text-white font-normal text-lg">{item.desc}</p>
                  <div className="flex justify-center items-center gap-2 mt-3">
                    <span className="text-white font-normal text-lg">Home</span>
                    <span className="text-white font-normal text-lg mx-1">/</span>
                    <span className="text-white font-normal text-lg mx-1">Page</span>
                    <span className="text-white font-normal text-lg mx-1">/</span>
                    <span className="text-white font-normal text-lg">{item.title}</span>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      )}


    </div>
  );
}

export default Banner;
