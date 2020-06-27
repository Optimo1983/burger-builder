import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-burger-builder-8f03e.firebaseio.com/'
});

export default instance;