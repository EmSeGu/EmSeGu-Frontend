import CustomAxios from "../../util/CustomAxios";

class Stock {
  public async getStockList() {
    const value = await CustomAxios.get("/stock?page=0&size=10");
    console.log(value);
  }
}

export default new Stock();
