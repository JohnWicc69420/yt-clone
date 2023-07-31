import React from "react";
import { useState } from "react";
import "./Products.scss";
import Card from "../../components/Card/Card";
import { useParams } from "react-router-dom";

export const data = [
  {
    id: "1",
    img1: "https://img.freepik.com/free-photo/portrait-young-candid-man-student-boy-with-clean-face-relaxed-facial-expression-casual-smile-checked-shirt-t-shirt-summer-outfit-look-white-background_176420-45901.jpg?w=1380&t=st=1689515731~exp=1689516331~hmac=d05c66195c6684c6a1162ed80a88bafb652b57936c612c10e5f06d22ad66cd91",
    img2: "https://img.freepik.com/free-photo/thank-you-smiling-young-man-nod-grateful-holds-hands-pray-beg-gesture-appreciate-something-express-gratitude-standing-white_176420-40249.jpg?w=1380&t=st=1689515802~exp=1689516402~hmac=dfb56ecc76138a9fe25e6f7b5b2416fdc3db32eb242faf0d25785858f2fd97d4",
    oldPrice: 59.99,
    newPrice: 39.99,
    name: "Casual Men's Shirt",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "featured",
    cat: "men",
  },
  {
    id: "2",
    img1: "https://images.pexels.com/photos/6533895/pexels-photo-6533895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/6533887/pexels-photo-6533887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: 79.99,
    newPrice: 59.99,
    name: "Brown Coat",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex impedit velit facilis blanditiis pariatur nobis voluptatum necessitatibus hic atque. Quos veritatis accusantium optio odit, saepe assumenda quod quis necessitatibus!",
    type: "coat",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "trending",
    cat: "women",
  },
  {
    id: "3",
    img1: "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg",
    img2: "https://images.pexels.com/photos/7010503/pexels-photo-7010503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: 59.99,
    newPrice: 39.99,
    name: "Men's Sweater",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "sweater",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "trending",
    cat: "men",
  },
  {
    id: "4",
    img1: "https://images.pexels.com/photos/17570082/pexels-photo-17570082/free-photo-of-young-bearded-man-in-white-cap-and-t-shirt.jpeg",
    img2: "https://images.pexels.com/photos/17570098/pexels-photo-17570098/free-photo-of-young-man-with-sunglasses-standing-on-stairs-and-looking-away.jpeg",
    oldPrice: 54.99,
    newPrice: 34.99,
    name: "Men's T-Shirt Yellow",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "t-shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "trending",
    cat: "men",
  },

  {
    id: "5",
    img1: "https://images.pexels.com/photos/1381565/pexels-photo-1381565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1381551/pexels-photo-1381551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: 79.99,
    newPrice: 59.99,
    name: "Long Sleeve Coat",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex impedit velit facilis blanditiis pariatur nobis voluptatum necessitatibus hic atque. Quos veritatis accusantium optio odit, saepe assumenda quod quis necessitatibus!",
    type: "coat",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "featured",
    cat: "women",
  },
  {
    id: "6",
    img1: "https://images.pexels.com/photos/2821106/pexels-photo-2821106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/2821107/pexels-photo-2821107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: 69.99,
    newPrice: 49.99,
    name: "Winter Coat Orange",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex impedit velit facilis blanditiis pariatur nobis voluptatum necessitatibus hic atque. Quos veritatis accusantium optio odit, saepe assumenda quod quis necessitatibus!",
    type: "coat",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "trending",
    cat: "women",
  },
  {
    id: "7",
    img1: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    oldPrice: 44.99,
    newPrice: 39.99,
    name: "Men's Footwear",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "shoes",
    vendor: "Polo",
    tag: "Clothing, Fashion, Shoes",
    popularity: "trending",
    cat: "shoes",
  },
  {
    id: "8",
    img1: "https://images.pexels.com/photos/16131085/pexels-photo-16131085/free-photo-of-portrait-of-a-male-model-wearing-a-black-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/16400892/pexels-photo-16400892/free-photo-of-man-posing-in-black-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: 39.99,
    newPrice: 29.99,
    name: "Men's T-Shirt",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "t-shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "featured",
    cat: "men",
  },
  {
    id: "9",
    img1: "https://images.unsplash.com/photo-1613482184972-f9c1022d0928?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    img2: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=763&q=80",
    oldPrice: 44.99,
    newPrice: 39.99,
    name: "Women's Brown Bag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "bag",
    vendor: "Polo",
    tag: "Clothing, Fashion, Shoes",
    popularity: "trending",
    cat: "accessories",
  },
  {
    id: "10",
    img1: "https://images.pexels.com/photos/4674399/pexels-photo-4674399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/4674404/pexels-photo-4674404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: 59.99,
    newPrice: 39.99,
    name: "Men's Jeans Jacket",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex impedit velit facilis blanditiis pariatur nobis voluptatum necessitatibus hic atque. Quos veritatis accusantium optio odit, saepe assumenda quod quis necessitatibus!",
    type: "jacket",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "featured",
    cat: "men",
  },
  {
    id: "11",
    img1: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80",
    img2: "https://images.unsplash.com/photo-1535303205469-a8460651cec5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    oldPrice: 34.99,
    newPrice: 29.99,
    name: "Men's Watch",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "watch",
    vendor: "Polo",
    tag: "Clothing, Fashion, Shoes",
    popularity: "featured",
    cat: "accessories",
  },
  {
    id: "12",
    img1: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    img2: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    oldPrice: 39.99,
    newPrice: 34.99,
    name: "Men's Shoes",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "shoes",
    vendor: "Polo",
    tag: "Clothing, Fashion, Shoes",
    popularity: "trending",
    cat: "shoes",
  },
  {
    id: "13",
    img1: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    img2: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
    oldPrice: 54.99,
    newPrice: 44.99,
    name: "Men's Shoes",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "shoes",
    vendor: "Polo",
    tag: "Clothing, Fashion, Shoes",
    popularity: "trending",
    cat: "shoes",
  },
  {
    id: "14",
    img1: "https://img.freepik.com/free-photo/young-smiling-man-standing-white-wall_176420-18835.jpg?w=1380&t=st=1689515342~exp=1689515942~hmac=020381408aef730de4cae2d9714de9ca61a517a22726a2798115b3ef2a42460b",
    img2: "https://img.freepik.com/free-photo/handsome-cheerful-man-extend-hand-handshake_176420-18847.jpg?w=1380&t=st=1689515312~exp=1689515912~hmac=efd6b137a4cd2275eee3c25ec048dd4a3f844803142e5d49cccc567ff54d93d2",
    oldPrice: 69.99,
    newPrice: 49.99,
    name: "Men's Jeans Jacket",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "jacket",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "trending",
    cat: "men",
  },
  {
    id: "15",
    img1: "https://img.freepik.com/free-photo/cheerful-young-blue-eyed-man-with-dark-hair-posing-studio-with-happy-smile-handsome-fit-man-dressed-casually-smiling-joyfully-showing-his-white-straight-teeth-positive-emotions-concept_176420-13238.jpg?w=1380&t=st=1689515570~exp=1689516170~hmac=006a2d0da2fd3e0608ef2b94a8fc87791232af475358210f5f4e1926ea03eb46",
    img2: "https://img.freepik.com/free-photo/portrait-serious-handsome-man-with-appealing-expression-keeps-arms-folded-tries-be-strict-muscular-fit-stylish-male-student-being-dissatisfied-with-final-mark-demands-retake-exam_176420-13251.jpg?w=1380&t=st=1689515607~exp=1689516207~hmac=8cdb8dac2a691834c5c8a0ecb82ba8a67bfabd12d9bd0df71573833c6b850f94",
    oldPrice: 44.99,
    newPrice: 29.99,
    name: "Long Sleeve Men's Shirt",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "trending",
    cat: "men",
  },
  {
    id: "16",
    img1: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
    img2: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1131&q=80",
    oldPrice: 34.99,
    newPrice: 29.99,
    name: "Men's Shoes",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "shoes",
    vendor: "Polo",
    tag: "Clothing, Fashion, Shoes",
    popularity: "featured",
    cat: "shoes",
  },
  {
    id: "17",
    img1: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    img2: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    oldPrice: 34.99,
    newPrice: 24.99,
    name: "Black Shirt ",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Shoes",
    popularity: "featured",
    cat: "women",
  },
  {
    id: "18",
    img1: "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    img2: "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    oldPrice: 44.99,
    newPrice: 39.99,
    name: "Women's Bag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "bag",
    vendor: "Polo",
    tag: "Clothing, Fashion, Shoes",
    popularity: "trending",
    cat: "accessories",
  },
  {
    id: "19",
    img1: "https://img.freepik.com/free-photo/young-stylish-guy-posing_176420-29907.jpg?w=1380&t=st=1689514873~exp=1689515473~hmac=500bc84dd7d2f1333f3f9a24064d4371425b1f6a3dc0982e5fa7901fa5f8f182",
    img2: "https://img.freepik.com/free-photo/friendly-young-guy-posing_176420-29911.jpg?w=1380&t=st=1689515201~exp=1689515801~hmac=713feea5150ee88b2b8db41d87e1d00a40459120cda2e21c0841a8f2dd8afb2a",
    oldPrice: 49.99,
    newPrice: 29.99,
    name: "Men's Casual Shirt",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "featured",
    cat: "men",
  },
];

const Products = () => {
  const { catId } = useParams();
  const ban = [
    {
      banImg:
        "https://images.pexels.com/photos/3255155/pexels-photo-3255155.jpeg",
    },
  ];

  const [maxValue, setMaxValue] = useState(100);
  const [sortType, setSortType] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

  const catData = catId === "sale" || catId === "new_arrivals" ?  data : data.filter((item) => item.cat === catId)//Category data

  const priceFilteredData = catData?.filter(
    (item) => item.newPrice <= maxValue
  ); 

  const sortData = () => {
    if (sortType === "asc") {
      return priceFilteredData?.sort((a, b) => a.newPrice - b.newPrice);
    }
    if (sortType === "desc") {
      return priceFilteredData?.sort((a, b) => b.newPrice - a.newPrice);
    }
    return priceFilteredData;
  };

  const sortedData = sortData();  // category sorted

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setSelectedCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: checked,
    }));
  };

  const uniqueTypes = [...new Set(catData.map((item) => item.type))];

  const checkboxFilteredData =
  Object.values(selectedCheckboxes).some(Boolean) 
  ? sortedData?.filter((item) => {
    return selectedCheckboxes[item.type];
  })
  : sortedData;

  return (
    <>
      <div className="productsContainer">
        <div className="left">
          <div className="inputs">
            <h1>Product Catogories</h1>
            {uniqueTypes.map((type) => (
              <div className="input" key={type}>
                <input
                  type="checkbox"
                  id={type}
                  value={type}
                  checked={selectedCheckboxes[type] || false}
                  onChange={handleCheckboxChange}
                />
                <label className="typeLabel" htmlFor={type}>{type}</label>
              </div>
            ))}
          </div>

          {console.log(selectedCheckboxes)}

          <div className="filter">
            <h1>Filter by price</h1>
            <div className="input">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={100}
                step="1"
                id="range"
                onChange={(e) => setMaxValue(e.target.value)}
              />
              <span>{maxValue}</span>
            </div>
          </div>
          <div className="radio">
            <h1>Sort by</h1>
            <div className="input">
              <input
                type="radio"
                id="asc"
                checked={sortType === "asc"}
                onChange={() => setSortType("asc")}
              />
              <label htmlFor="radio">Price (Lowest First)</label>
            </div>
            <div className="input">
              <input
                type="radio"
                id="des"
                checked={sortType === "desc"}
                onChange={() => setSortType("desc")}
              />
              <label htmlFor="radio">Price (Highest First)</label>
            </div>
          </div>
        </div>
        <div className="right right-icons">
          <div className="catImg">
            <img src={ban[0].banImg} alt="" />
          </div>
          <div className="cards">
            {checkboxFilteredData?.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
