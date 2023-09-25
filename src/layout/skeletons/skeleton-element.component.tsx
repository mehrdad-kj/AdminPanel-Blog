import "./shimmer.css";

const SkeletonElement = () => {
  return (
    <section className="relative m-3 my-10 p-2 shadow-lg w-[350px] rounded-2xl">
      <span className="shimmer-elem bg-slate-200  my-3 block w-1/2 h-5 rounded-sm"></span>
      <span className="shimmer-elem bg-slate-200 my-3 block w-1/2 h-5 rounded-sm"></span>
      <span className="shimmer-elem bg-slate-200 my-3 block w-full h-3 rounded-sm"></span>
      <span className="shimmer-elem bg-slate-200 my-3 block w-full h-3 rounded-sm"></span>
    </section>
  );
};

export default SkeletonElement;
