export const GetBlogSkeleton = () => {
  return (
    <div className="md:flex w-full animate-pulse">
      <div className="flex w-full md:w-4/6 md:p-24 p-10">
        <div className="flex flex-col w-full md:mt-24 mt-20 gap-6">
          <div className="pl-10 md:pl-24 bg-gray-300 md:pr-24 pr-10 font-bold h-4 rounded-md text-5xl"></div>
          <div className="pl-10 md:pl-24 bg-gray-300 pr-10 text-slate-500 h-4 rounded-md"></div>
          <div className="pl-10 md:pl-24 bg-gray-300 pr-10 font-normal text-xl h-4 rounded-md"></div>
        </div>
      </div>
      <div className="flex w-full md:w-2/6 p-5">
        <div className="flex flex-col w-full md:p-24 p-10">
          <div className="flex font-semibold bg-gray-300 mt-20 md:mt-48 mb-10 text-2xl h-4 rounded-md pl-10"></div>
          <div className="flex w-full items-center">
            <div className="flex justify-center items-center w-1/4">
              <div className=" w-2 h-2 bg-slate-200 rounded-full "></div>
            </div>
            <div className="flex flex-col w-full md:w-3/4 gap-5">
              <div className=" font-bold bg-gray-300 h-4 rounded-md text-4xl"></div>
              <div className="flex w-full bg-gray-300 h-4 rounded-md hidden md:block  items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
