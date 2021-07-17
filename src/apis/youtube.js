import axios from 'axios';

const KEY = 'AIzaSyAkoGko1OG-r5BQOv1DRvUWwosczUeJsGQ';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
});



