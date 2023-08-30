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
    const fetchSearchResults = () => {
      setLoading(true);
      fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
        setResult(res?.contents);
        setLoading(false);
      });
    };
    fetchSearchResults();
  }, [searchQuery, setLoading]);

  return (
    <>
      <div className="h-[calc(100%-56px)] flex flex-row dark:bg-[#0F0F0F]">
        <LeftNav />
        <div className="flex flex-col items-center grow overflow-y-auto w-[calc(100%-240px)] h-full gap-4 p-5 mb-5">
          <div className="w-fit">
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
