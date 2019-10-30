import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 68FqZ4qukwvtyHwUtuWiaZ5MortkLK9XBZXBoDOW8OU4y_WxM9YkvVSuZvLs6N-bgIz9Sy9NXEQ4PVKQhJca-kblSx0nN6hghE5AP8x59TmpCMdnFR6GTWqZ5yWhXXYx',
  },
});
