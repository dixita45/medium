import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
  return (
    <div className="border-b border-slate-200 pb-4 p-4 w-screen max-w-screen-md cursor-pointer">
      <div className="flex cursor-pointer">
        <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>

        <div className="font-extradark pl-2 text-sm flex justify-center flex-col">
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
        <div className="flex justify-center flex-col pl-3">
          <Circle></Circle>
        </div>
        <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
      </div>
      <div className="text-md font-light">
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
      </div>
      <div className="text-slate-500 text-sm font-thin pt-3">
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
      </div>
    </div>
    
  );

};
