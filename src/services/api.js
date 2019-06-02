import axios from 'axios'

export default {
  getOverview () {
    console.log('Fetching overview')
    const url = `http://localhost:3000/overview`
    return axios.get(url)
  },
  saveOverview (data) {
    console.log('Fetching overview')
    const url = `http://localhost:3000/overview`
    return axios.post(url, JSON.stringify(data), {headers: {'Content-Type': 'application/json'}})
  },
  test () {
    console.log('Fetching overview')
    const url = `http://localhost:3000/test`
    return axios.get(url)
  }
}
