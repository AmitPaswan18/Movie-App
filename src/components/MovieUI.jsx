import { TbRating18Plus } from "react-icons/tb";
import { GrLanguage } from "react-icons/gr";
import { BsCameraReelsFill } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { BiSolidMoviePlay } from "react-icons/bi";

const MovieUI = ({
  name,
  poster,
  year,
  language,
  director,
  genre,
  rated,
  description,
}) => {
  return (
    <div className=" border-2 text-fuchsia-100 bg-gray-900 hover:bg-gray-700 cursor-pointer hover:shadow-3xl  rounded-md mx-2">
      <h1 className="font-serif text-3xl text-center py-2 "> {name}</h1>
      <div className=" flex justify-center">
        <img
          className="md:h-30 border rounded-md md:w-[25vw] h-full w-full m-3"
          src={poster}
          alt="Poster"
        />
      </div>
      <div className="p-3 font-semibold">
        <p>Year : {year}</p>
        <p className="flex items-center gap-2">
          {" "}
          Language
          <GrLanguage /> : {language}
        </p>
        <p className="flex  items-center gap-2">
          {" "}
          Director <BsCameraReelsFill /> : {director}
        </p>
        <p className="flex  items-center gap-2">
          Genre <BiSolidMoviePlay /> : {genre}
        </p>
        <p className="flex  items-center gap-2">
          Rating <TbRating18Plus /> : {rated}
        </p>
        <p className="flex gap-2">
          About <FcAbout />: {description.slice(0, 60)}....
        </p>
      </div>
    </div>
  );
};

export default MovieUI;
