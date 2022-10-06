import CustomAxios from "../../util/CustomAxios";

class Auth {
  public async login(id, pw) {
    try {
      const value = CustomAxios.post("/signin", {
        email: id,
        password: pw,
      });
      console.log(value);
    } catch (e) {
      console.log(e);
    }
  }
  public async register() {}
  public async logout() {}
  public async checkLogin() {}
}

export default new Auth();
