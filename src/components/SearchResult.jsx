import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../context/contextAPI";
import SearchResultVideoCard from "./SearchResultVideoCard";
import { fetchDataFromApi } from "../utils/api";
import { useParams } from "react-router-dom";
import LeftNav from "./LeftNav";

const SearchResult = () => {
  const { searchQuery } = useParams();
  const [result, setResult] = useState();
  const { loading, setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log(res);
      setResult(res?.contents);
      setLoading(false);
    });
  };

  return (
    <>
      <div className="dark:bg-[#0F0F0F]">
        <div className="h-[calc(100%-56px)] flex flex-row">
          <LeftNav />
          <div className="grow w-[calc(100%-240px)] h-full gap-4 p-5 mb-5">
            {!loading &&
              result?.map((item) => {
                if (item.type !== "video") return false;
                return (
                  <SearchResultVideoCard
                    key={item?.video?.videoId}
                    video={item?.video}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
