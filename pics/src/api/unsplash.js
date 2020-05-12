import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID u5_PIWWGH1GsqlpaF7P3luIs1V6X_6MqjSvw8rRLWx4',
  },
})
