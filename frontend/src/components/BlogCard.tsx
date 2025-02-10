import { useNavigate } from "react-router-dom";

interface blogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: Date;
  postid: string;
}

function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
  postid,
}: blogCardProps) {
  const navigate = useNavigate();

  var date = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(publishedDate);

  return (
    <div className="flex flex-col border border-t-0 border-l-0 border-r-0 boder-b-[#e7e7ea] py-10 ">
      <div className="flex ">
        <div className="flex bg-slate-300 w-10 h-10 justify-center items-center rounded-full font-semibold">
          {authorName[0]}
        </div>
        <div className="flex w-auto h-10 justify-center items-center pl-3 text-md md:text-xl font-medium text-slate-700">
          {authorName}
        </div>
        <div className="flex w-auto h-10 justify-center items-center pl-2 text-sm md:text-md font-[100px] text-slate-500">
          &#9679;
        </div>
        <div className="flex w-auto h-10 justify-center items-center text-md md:text-xl pl-2 text-slate-500">
          {date}
        </div>
      </div>
      <div className="w-auto text-xl md:text-3xl font-bold font-sans pt-3">{title}</div>
      <div className="w-auto text-lg md:text-xl font-sans pt-3 text-slate-700">
        {content.slice(0, 300) + "..."}
      </div>
      <div className="flex justify-between mt-6">
        <div className="text-slate-500 pt-2">
          {" "}
          {Math.ceil(content.split(" ").length / 100) + " minutes"}
        </div>{" "}
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 md:px-5 py-1.5 md:py-2.5 text-center me-2 mb-2"
          onClick={() => {
            navigate("/blog/" + postid);
          }}
        >
          Read More {">>>"}
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
