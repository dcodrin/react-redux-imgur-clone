export default {
    // ignore albums, return images only
    filterImages (data) {
        return data.filter(image => image.is_album === false);
    },
    // find image by id in collection
    findImage (data, id) {
        return data.find(image => image.id === id);
    }
};