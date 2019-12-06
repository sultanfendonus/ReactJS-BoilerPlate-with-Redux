import getScore from '../api/getMainApi'


export const getAllPost = () =>async (dispatch) =>{
    try {
        const response = await getScore.get('/posts');
        dispatch({type : "ALL_POST",payload: response.data});
    } catch (error) {
        console.log(error);
    }
    
}


