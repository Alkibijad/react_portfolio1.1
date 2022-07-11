import axios from "axios";

class Api {
  static getEpirenceData = () => {
    return axios.get(
      "https://raw.githubusercontent.com/Alkibijad/fakeDB/main/resume.json"
    );
  };
}

export default Api;
