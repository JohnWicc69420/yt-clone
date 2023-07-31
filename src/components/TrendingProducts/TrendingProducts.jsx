import React from "react";
import Card from "../Card/Card";
import "./TrendingProducts.scss";

const TrendingProducts = ({ data }) => {
  const trendingData = data.filter((item) => item.popularity === "trending");
  return (
    <>
      <div className="tpContainer">
        <div className="top">
          <h1>Trending Products</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            dolor laudantium alias perspiciatis rem quo harum, praesentium
            facere quasi accusamus repellendus at labore. In nisi perferendis
            nulla voluptatem mollitia perspiciatis quos architecto magni tenetur
            ipsa non quis sapiente ducimus ab, cumque molestias, modi illo.
            Repudiandae dicta autem soluta debitis laboriosam!
          </p>
        </div>
        <div className="bottom">
          {trendingData.slice(0, 4).map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
