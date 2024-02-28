import { useSelector } from "react-redux";
import { baseImgUrl } from "../constants";
import Loader from "./Loader";

const Hero = () => {
  //store da tutulan verilere eriş
  const store = useSelector((store) => store.movieReducer);
  const i = Math.floor(Math.random() * 20);
  const randomMovie = store.popularMovies[i];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px]">
      {!randomMovie ? (
        <Loader />
      ) : (
        <>
          <div className="d-flex justify-content-center align-items-center p-5  m-5">
            <h1 className="p-5 text-center text-3xl">{randomMovie.title}</h1>
            <p>{randomMovie.overview}</p>
            <p className="d-flex justify-content-center align-items-center p-5 text-center">
              <span>IMDB:</span>
              <span className="text-red-900 px-3">
                {randomMovie.vote_average.toFixed(1)}
              </span>
            </p>
            <div className="d-flex text-center ">
              <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Fil İzle
              </button>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none  dark:focus:ring-blue-800">
                Listeye Ekle
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              className="my-4 img-fluid rounded max-h-[300px]"
              src={baseImgUrl.concat(randomMovie.backdrop_path)}
              alt={randomMovie.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
