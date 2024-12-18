import { useState, useEffect } from "react";

const Fetch = () => {
    const [comments, setComments] = useState([]);
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
      Promise.all ([
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=10'),
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=50'),  
      ])
        
         .then(([resComments, resPhotos]) => 
             Promise.all([resComments.json(), resPhotos.json()])
         )
         .then(([dataComments, dataPhotos]) => {
            console.log(comments, photos);
            setComments(dataComments);
            setPhotos(dataPhotos);
         });
    }, [comments, photos]);
    return (
        <>
             <div>
            <h1 className="flex justify-center font-bold text-2xl text-blue-700 mx-3 my-4 py-2 rounded-md">Email address of Users</h1>
            {comments.map((comment) => (
                  <h2 key={comment.id}className="font-normal align-bottom items-baseline text-justify text-slate-500 ">{comment.id}.{comment.email}
                  </h2>
                
            ))}
        </div>
       
        <h3 class="flex justify-center font-bold text-2xl text-blue-700 mx-3 my-4 py-2 p-4 rounded-md"> Photos of Users</h3>
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
            <img key={photo.id} src={photo.url} alt={photo.title} width={100}/>
         ))}
        </div>
        
         
        </>
   
    );
};


export default Fetch;