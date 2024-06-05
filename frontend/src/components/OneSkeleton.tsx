
import { Circle } from "./BlogCard";

export const OneSkeleton = () => {
  return (
    
        <div className="flex justify-center">
          <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
            <div className="col-span-8 ">
              <div className="text-5xl font-extrabold">
                <div className="h-6  bg-gray-200 rounded-full  w-48 mb-4"></div>
              </div>
              <div className="text-slate-500 pt-2">
                <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
              </div>
              <div className="pt-4">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="text-slate-600 text-lg ">
                <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
              </div>

              <div className="flex w-full">
                <div className="flex flex-col justify-center pr-4">
                  <Circle />
                </div>
                <div>
                  <div className="text-lg font-bold ">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                  </div>
                  <div className="pt-2 text-slate-500">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
 
  );
};
