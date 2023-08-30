import { NavLink } from "react-router-dom";
import { currentDate } from "../../utils/objects/currentDate";
import { Response } from "../../utils/slices/postsSlice";

interface CardProps {
  post: Response;
}

const CardComponent: React.FC<CardProps> = ({ post }) => {
  return (
    <section className="m-3 my-10 p-2 shadow-lg max-w-[350px]  rounded-2xl transition ease-in-out delay-75 hover:bg-slate-200 ">
      <span className="block font-medium">{post.title}</span>
      <span className="text-slate-500">{currentDate()}</span>
      <p className="text-sm mt-2">{`${post.body.substring(0, 100)}...`}</p>
      <div className="flex justify-end">
        <NavLink to={`/blogs/${post.id}`}>
          <button
            className={`bg-orange-200 hover:text-orange-200 hover:bg-black transition ease-in-out delay-75 px-2 py-1 mt-4 rounded-lg text-[#160A06] text-center text-sm`}
          >
            ادامه دهید
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default CardComponent;
