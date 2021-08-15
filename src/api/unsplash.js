import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID jojqhtL2XrCruwFLQsBOam-YUHtJo7_DisCIVxDYw7w'
  }
});