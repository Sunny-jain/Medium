export function BlogSkeleton() {
  return (
    <div className="flex flex-col border border-t-0 border-l-0 border-r-0 boder-b-[#e7e7ea] py-10 animate-pulse">
      <div className="flex items-center gap-2 ">
        <div className="h-2 bg-gray-300 rounded-full w-[180px] mb-2.5"></div>

        <div className="h-2 bg-gray-300 rounded-full w-[180px] mb-2.5"></div>
      </div>
      <h3 className="h-4 bg-gray-300 rounded-full  w-48 mb-4"></h3>
      <p className="h-2 bg-gray-300 rounded-full max-w-[380px] mb-2.5"></p>
      <p className="h-2 bg-gray-300 rounded-full max-w-[340px] mb-2.5"></p>
      <p className="h-2 bg-gray-300 rounded-full max-w-[320px] mb-2.5"></p>
      <div className="flex justify-between mt-6 w-full">
        <div className="h-2 bg-gray-300 rounded-full w-[80px]"></div>
        <div className="h-2 bg-gray-300 rounded-full w-[20px]"></div>
      </div>
    </div>
  );
}
