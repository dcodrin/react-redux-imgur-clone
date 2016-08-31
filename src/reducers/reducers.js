import * as types from '../actions/types';

export const topicsReducer = (state = [], action) => {
    switch (action.type) {
        case types.ADD_TOPICS:
            return [
                ...action.topics
            ];
        default:
            return state;
    }
};

export const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case types.ADD_COMMENTS:
            return [
                ...action.comments
            ];
        default:
            return state;
    }
};

export const imagesReducer = (state = [], action) => {
    switch (action.type) {
        case types.ADD_IMAGES:
            return [
                ...action.images
            ];
        default:
            return state;
    }
};

export const imageReducer = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_IMAGE:
            return {
                ...action.image
            };
        default:
            return state;
    }
};