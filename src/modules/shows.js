import axios from "axios"

const getShowsData = {
  async index() {
    let response = await axios.get("/serier")
    // dispatchEvent({ type: "SET_SHOWS_FEED", payload: })
  }
}