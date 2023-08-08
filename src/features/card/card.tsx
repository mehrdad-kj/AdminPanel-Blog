import { COLOR_PALETTE, TEXT_COLORS } from "../../layout/colorPallete";
import { currentDate } from "../../utils/objects/currentDate";
import { Response } from "../../utils/slices/postsSlice";

interface CardProps {
  post: Response;
}

const CardComponent: React.FC<CardProps> = ({ post }) => {
  return (
    <section className="m-3 my-10 p-2 shadow-lg max-w-[350px]  rounded transition ease-in-out delay-75 hover:bg-slate-100">
      <span className={`${TEXT_COLORS.MAIN} block font-medium`}>
        {post.title}
      </span>
      <span className="text-slate-500">{currentDate()}</span>
      <p className="text-sm mt-2">{post.body}</p>
      <div className="flex justify-end">
        <button
          className={`${COLOR_PALETTE.ACCENT} px-2 py-1 my-4 rounded text-black text-center text-sm`}
        >
          ادامه دهید
        </button>
      </div>
    </section>
  );
};

export default CardComponent;
