import CardComponent from "../../features/card/card";
import { useGetPostsListQuery } from "../../utils/slices/postsSlice";

const Blogs = () => {
  const { data } = useGetPostsListQuery();

  return (
      <section className="flex flex-wrap justify-around p-4 bg-slate-100">
        {data?.map((post) => (
          <CardComponent post={post} key={post.id}/>
        ))}
      </section>
  );
};

export default Blogs;
