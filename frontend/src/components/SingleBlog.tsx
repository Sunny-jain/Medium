import { Blog } from "../hooks/getBlog";

export const SingleBlog = ({ blog }: { blog: Blog }) => {
  const pd = new Date(blog.publishedDate);

  var date = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(pd);

  return (
    <div className="md:flex w-full">
      <div className="flex w-full md:w-4/6 ">
        <div className="flex flex-col w-full md:mt-24 mt-20 gap-6">
          <div className="px-10 md:px-24 font-bold md:text-5xl text-3xl">
            {blog.title}
          </div>
          <div className="pl-10 md:pl-24 pr-10 text-slate-500">
            Posted on {date}
          </div>
          <div className="pl-10 md:pl-24 pr-10 font-normal text-xl">
            {blog.content}
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-2/6 md:px-24 px-10">
        <div className="flex flex-col w-full">
          <div className="flex font-semibold mt-20 md:mt-48 mb-5 md:mb-10 text-2xl md:px-10">
            Author
          </div>
          <div className="flex w-full items-center">
            <div className="flex justify-center items-center w-1/4">
              <div className=" w-5 h-5 bg-slate-200 rounded-full"></div>
            </div>
            <div className="flex flex-col w-full md:w-3/4 gap-2 md:gap-5 ">
              <div className=" font-bold text-4xl">{blog.author.name}</div>
              <div className="flex w-full  md:block  items-center">
                {blog.author.quote}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
