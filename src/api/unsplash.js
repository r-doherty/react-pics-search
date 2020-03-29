import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2vddSuj6cw0cVXpXZKXp4IBCU5hBIojwdVtX_CPJKsc'
    }
});