import createDataContex from "./createDataContex";


const blogRducer = (state, action) => {
  switch(action.type) {
    case "add_blogpost":
      return [...state, 
        {
          id: Math.floor(Math.random() * 9999), 
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case "delete_blogpost":
      return state.filter((blogPosts) => blogPosts.id !== action.payload);
    default:
       return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content) => {
    console.log(title + " - " + content);
    dispatch({type: "add_blogpost", payload: { title, content } } );
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({type: "delete_blogpost", payload: id});
  };
};

export const {Context, Provider} = createDataContex(
    blogRducer,
    {addBlogPost, deleteBlogPost},
    []
  );