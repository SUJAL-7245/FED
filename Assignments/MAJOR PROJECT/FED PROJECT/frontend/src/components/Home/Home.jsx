import Layout from "../../Layout/Layout";
import { FaAngleLeft, FaAngleRight, FaSearch, FaUser } from "react-icons/fa";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import SongBar from "../MasterBar/SongBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { userActor } from "../../states/Actors/UserActor";
import Navbar from "../Navbar";
import { useGlobalContext } from "../../states/Contet";
import Footer from "../Footer/Footer";

export const songs = [
  {
    id: Math.random() * Date.now(),
    title: "Deno",
    artist: "WishList",
    mp3: new Audio("/assets/mp3/1.mp3"),
    img: "/assets/1.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Krishana",
    artist: "Krishana",
    mp3: new Audio("/assets/mp3/2.mp3"),
    img: "/assets/2.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Shidu",
    artist: "GOAT",
    mp3: new Audio("/assets/mp3/3.mp3"),
    img: "/assets/3.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Goodbye",
    artist: "Goodbye",
    mp3: new Audio("/assets/mp3/4.mp3"),
    img: "/assets/4.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Hanuman Chalsia",
    artist: "Hanuman Chalsia",
    mp3: new Audio("/assets/mp3/5.mp3"),
    img: "/assets/5.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Soulmate",
    artist: "Soulmate",
    mp3: new Audio("/assets/mp3/6.mp3"),
    img: "/assets/6.jpeg",
  },
];

const Home = () => {

  const { getUser } = useGlobalContext();

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Layout>
      <Navbar />

      <div className="tertiary_bg ml-2 px-4 py-4 home ">
        <div className="flex justify-between mb-4 pt-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Focus
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
        <div className="flex justify-between my-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Spotify List
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
      <Footer/>
      <SongBar />
    </Layout>
  );
};

export default Home;
