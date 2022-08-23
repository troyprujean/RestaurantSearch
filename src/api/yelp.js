import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 4j-xLwDzUYvRFEwhkrzSYz-0ujx9WyjqFUI-pzD43kq360PgOjw-UTxuVwlQs5pz7fgQ2pgEIiKNP7pjZ0VRZagvxul-zxo9zdINqQ75w6BOMGsLqTQwkYUq_T0DY3Yx'
    }
});