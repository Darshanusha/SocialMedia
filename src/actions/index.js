import request from "../api/request";
export const fetchPosts = () => async (dispatch)=>{
    const response = await request.get("/posts");
    dispatch({type: "POSTS", payload: response.data});
}

export const addPost = (post)=> async dispatch =>{
    const response = await request.post("/posts",post);
    dispatch({type:"ADD_POST", payload: response.data});
}

export const fetchPost = (id)=> async dispatch =>{
    const response = await request.get(`/posts/${id}`);
    dispatch({type:"POST", payload:response.data});
}

export const fetchComments = ()=> async dispatch =>{
    const response = await request.get("/comments");
    dispatch({type: "COMMENTS", payload:response.data});
}

export const addComment = (comment) => async dispatch =>{
    const response = await request.post("/comments",comment);
    dispatch({type: "ADD_COMMENT", payload:response.data});
}

export const deleteComment = (id)=> async dispatch =>{
    const response = await request.delete(`/comments/${id}`);
    dispatch({type:"DELETE_COMMENT", payload:response.data});
}