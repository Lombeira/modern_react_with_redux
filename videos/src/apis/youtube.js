import axios from 'axios';

const KEY = 'AIzaSyCQOyBpLt4euo-4Aq3JHSZJx13TUDIT82A';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
    q: 'surfboards',
  },
});
