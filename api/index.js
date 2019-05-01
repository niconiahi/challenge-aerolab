import axios from "axios";

// Headers
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2I4ODcwMmUxNzViODAwNmQwZTM4YmMiLCJpYXQiOjE1NTU1OTcwNTh9.5lM-AZrrCiO8tZRTeTnGeue0rZLZvF5WhlzPlB8E73A";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

// Endpoints
export default {
  user: {
    async getData() {
      try {
        return await axios.get("https://aerolab-challenge.now.sh/user/me");
      } catch (err) {
        console.error(err);
      }
    },
    async getRedeemHistory() {
      try {
        return await axios.get("https://aerolab-challenge.now.sh/user/history");
      } catch (err) {
        console.error(err);
      }
    },
    async addPoints(amount) {
      try {
        return await axios.post(
          "https://aerolab-challenge.now.sh/user/points",
          {
            amount
          }
        );
      } catch (err) {
        console.error(err);
      }
    },
    async redeemProduct(productId) {
      try {
        return await axios.post("https://aerolab-challenge.now.sh/redeem", {
          productId
        });
      } catch (err) {
        console.error(err);
      }
    }
  },
  product: {
    async getAllProducts() {
      try {
        return await axios.get("https://aerolab-challenge.now.sh/products");
      } catch (err) {
        console.error(err);
      }
    }
  }
};
