import CardComponent from "../../features/card/card";
import { useGetPostsListQuery } from "../../utils/slices/postsSlice";

const Blogs = () => {

  const {data: postsList} = useGetPostsListQuery()

  return (
    <>
      <CardComponent />
    </>
  );
};

export default Blogs;
