import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { OneSkeleton } from "../components/OneSkeleton";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();
  const { loading, post } = useBlog({
    id: id || "",
  });
  if (loading || !post) {
    return (
      
        <div>
          <Appbar/>
          <OneSkeleton />
        </div>
        
          
       
     
    );
  }
  return (
    <div>
      <FullBlog post={post} />
    </div>
  );
};
