const SkeletonElement = () => {
  return (
    <section className="m-3 my-10 p-2 shadow-lg w-[350px]  rounded-2xl transition ease-in-out delay-75 bg-slate-50">
      <span className="bg-slate-200 my-3 block w-1/2 h-5"></span>
      <span className="bg-slate-200 my-3 block w-1/2 h-5"></span>
      <span className="bg-slate-200 my-3 block w-full h-3"></span>
      <span className="bg-slate-200 my-3 block w-full h-3"></span>
    </section>
  );
};

export default SkeletonElement;
