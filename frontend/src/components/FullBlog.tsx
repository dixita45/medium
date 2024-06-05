import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ post }: { post: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
          <div className="col-span-8 ">
            <div className="text-5xl font-extrabold">{post.title}</div>
            <div className="text-slate-500 pt-2">{`Posted on ${formatDate(Date())}`}</div>
            <div className="pt-4">{post.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg ">
            Author
            </div>
           
            <div className="flex w-full">
              <div  className="flex flex-col justify-center pr-4">
              <Avatar name={post.author.name || "Anonymous"} size="big" />
              </div>
              <div>
              <div className="text-lg font-bold ">
                {post.author.name || "Anonymous"}
              </div>
              <div className="pt-2 text-slate-500">
                Random catch phrase about the author's ability to grab the
                user's attention.
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata' };
  return date.toLocaleDateString('en-IN', options);
};