import axios from 'axios';
const ROOT_URL = 'https://api.imgur.com';

export const addImages = (images) => {
    return {
        type: 'ADD_IMAGES',
        images
    };
};

export const startGetImages = () => {
    return (dispatch, getState) => {
        axios.get(`${ROOT_URL}/3/topics/`, {
            headers: {'Authorization': 'Client-ID 8b18a6c7356b13b'}
        })
            .then(({data:{data}}) => {
                console.log(data);
                dispatch(addImages(data));
            }).catch(err => {
                console.log(err);
        });
    };
};