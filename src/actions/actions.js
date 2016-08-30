import axios from 'axios';
import * as types from './types';

import api from 'imgur-clone';

const ROOT_URL = 'https://api.imgur.com';
const HEADERS = {'Authorization': 'Client-ID 8b18a6c7356b13b'};

export const addTopics = (topics) => {
    return {
        type: types.ADD_TOPICS,
        topics
    };
};

export const addImages = (images) => {
    return {
        type: types.ADD_IMAGES,
        images
    };
};

export const startGetImages = (topicId) => {
    return (dispatch, getState) => {
        axios.get(`${ROOT_URL}/3/topics/${topicId}`, {
            headers: HEADERS
        })
            .then(({data: {data}}) => {
                dispatch(addImages(api.filterImages(data)));
            })
            .catch(err => {
                console.log(err);
            });
    };
};

export const startGetTopics = () => {
  return (dispatch, getState) => {
      axios.get(`${ROOT_URL}/3/topics/defaults`, {
          headers: HEADERS
      })
          .then(({data: {data}}) => {
              dispatch(addTopics(data));
      })
          .catch(err => {
              console.log(err);
          });
  };
};


