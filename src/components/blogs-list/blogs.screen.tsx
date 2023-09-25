import CardComponent from "../../features/card/card";
import { Post, useGetPostsListQuery } from "../../utils/slices/postsSlice";
import ErrorPage from "../../layout/notfound.component";
import { useState } from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import SkeletonElement from "../../layout/skeletons/skeleton-element.component";

const Blogs = () => {
  const [skip, setSkip] = useState(true);
  const { data, isError, error } = useGetPostsListQuery(undefined, {
    skip,
  });

  setTimeout(() => {
    setSkip(false);
  }, 5000);

  console.log("error", error);

  if (isError) return <ErrorPage error={error as FetchBaseQueryError} />;

  return (
    <>
      {data ? (
        <section className="flex flex-wrap justify-around p-4 bg-slate-100">
          {data?.posts.map((post: Post) => (
            <CardComponent post={post} key={post.id} />
          ))}
        </section>
      ) : (
        <section className="flex flex-wrap justify-around p-4 bg-slate-100">
          {[...Array(21).keys()].map((e) => (
            <>
              <SkeletonElement key={e} />
            </>
          ))}
        </section>
      )}
    </>
  );
};

export default Blogs;
