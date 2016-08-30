export default {
    // ignore albums, return images only
    filterImages (data) {
        return data.filter(image => image.is_album === false);
    }
};