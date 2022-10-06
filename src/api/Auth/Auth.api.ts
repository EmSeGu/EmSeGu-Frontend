import axios from "axios";
import CustomAxios from "../../util/CustomAxios";

class Auth {
  public async login() {}
  public async requestEmail(id) {
    try {
      const value = await CustomAxios.post("/email", {
        email: id,
      });
      alert("이메일로 전송하였습니다.");
    } catch (e) {
      if (e.response.status === 400) {
        alert("이메일 형식이 잘못되었습니다");
      } else if (e.response.status === 429) {
        alert("너무 많은 요청을 하였습니다");
      }
    }
  }
  public async register(id: string, pw: string) {
    const value = await CustomAxios.post("/signup", {
      email: id,
      password: pw,
    });
  }
  public async logout() {}
  public async checkLogin() {}
}

export default new Auth();
