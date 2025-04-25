const BASE_URL =
  "https://my-json-server.typicode.com/diogoberner/cinetag-api/db";

export const api = {
  async getMovies() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  },
};
