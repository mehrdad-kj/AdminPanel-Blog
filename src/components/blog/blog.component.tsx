import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../utils/slices/postsSlice";

const Blog = () => {
  const { blogId } = useParams();
  const { data } = useGetPostByIdQuery({id: blogId || ""}, {skip: !blogId})

  return (
    <section className="p-5">
      <h5 className="font-bold mb-1">{data?.title}</h5>
      <p>{data?.body}</p>
    </section>
  )
};

export default Blog;
