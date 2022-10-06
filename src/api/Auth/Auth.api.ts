import axios from "axios";

class Auth {
  public async requestEmail(id) {
    try {
      const value = await axios.post("http://192.168.183.31:8082/email", {
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
      const { data } = await axios.head(
        `http://192.168.183.31:8082/email?email=${id}&authKey=${citation}`
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  public async register(id: string, pw: string) {
    const value = await axios.post("http://192.168.183.31:8082/auth/signup", {
      email: id,
      password: pw,
    });
  }
  public async login(id, pw) {
    try {
      const value = await axios.post("http://192.168.183.31:8082/auth", {
        email: id,
        password: pw,
      });

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
