import axios from "axios";
import CustomAxios from "../../util/CustomAxios";

class Auth {
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
  public async citationEmail(citation, id) {
    try {
      const { data } = await CustomAxios.head(
        `/email?email=${id}&authKey=${citation}`
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  public async register(id: string, pw: string) {
    const value = await CustomAxios.post("/auth/signup", {
      email: id,
      password: pw,
    });
  }
  public async login(id, pw) {
    try {
      const value = await CustomAxios.post("/auth/signin", {
        email: id,
        password: pw,
      });

      console.log(value);

      localStorage.setItem("accessToken", value.data.accessToken);
      localStorage.setItem("refreshToken", value.data.refreshToken);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  public async logout() {}
  public async checkLogin() {}
}

export default new Auth();
