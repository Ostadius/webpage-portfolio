import axios from 'axios';

const instance = axios.create({
        baseURL:'https://react-my-burger-b43b2.firebaseio.com/'
});

export default instance;
