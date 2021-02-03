import axios from "axios"

const getShowsData = {
  async index(dispatch) {
    let response = await axios.get('https://content.viaplay.se/pc-se/serier/samtliga')
    response.data._embedded["viaplay:blocks"][0]._embedded["viaplay:products"]
    dispatchEvent({ type: "SET_SHOWS_FEED", payload: response.data})
  }
}

export default getShowsData

