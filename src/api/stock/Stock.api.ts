import CustomAxios from "../../util/CustomAxios";

class Stock {
  public async getStockList(page) {
    const { data } = await CustomAxios.get(`/stock?page=${page}&size=10`);
    console.log(data);
    return data;
  }
  public async getTargetStock(name) {
    const { data } = await CustomAxios.get(`/stock/findstock?name=${name}`);
    return data;
  }
  public async getMyStock(name) {
    const { data } = await CustomAxios.get(`/stock/mystock?name=${name}`);
    console.log(data);
    return data;
  }
  public async buyStock(name, count) {
    const { data } = await CustomAxios.post(`/stock/buy`, {
      name,
      count,
    });
    alert("추가 되었습니다.");
    console.log(data);
  }
  public async saleStock(name, count) {
    const { data } = await CustomAxios.patch(`/stock/sale`, {
      name,
      count,
    });
    alert("매도 되었습니다.");
    console.log(data);
  }
  public async myStock() {
    const { data } = await CustomAxios.get("/stock/myStockList");
    console.log(data);
    return data;
  }
  public async money() {
    const { data } = await CustomAxios.get("/user/money");
    console.log(data);
    return data;
  }
}

export default new Stock();
