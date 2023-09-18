import { CircularProgress } from "@mui/material";
import CardComponent from "../../features/card/card";
import { Post, useGetPostsListQuery } from "../../utils/slices/postsSlice";

const Blogs = () => {
  const { data, isLoading } = useGetPostsListQuery();

  console.log(data)

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <section className="flex flex-wrap justify-around p-4 bg-slate-100">
          {data?.posts.map((post: Post) => (
            <CardComponent post={post} key={post.id} />
          ))}
        </section>
      )}
    </>
  );
};

export default Blogs;
