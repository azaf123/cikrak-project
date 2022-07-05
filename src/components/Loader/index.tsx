import GreenLoader from "../../assets/green-loader.gif";

const Loader = () => {
  return (
    <>
      <div className="top-0 left-0 w-full h-full bg-slate-200 fixed opacity-80 z-10">
        <div className="py-52">
        <img className="m-auto z-10 w-40 h-40 opacity-50 6" src={GreenLoader} alt="Loader Gif"/>
        </div>
      </div>
    </>
  );
}

export default Loader;
