import { NETFLIX_BACKGROUND_IMG } from "../utils";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <img src={NETFLIX_BACKGROUND_IMG} alt="logo" />
      </div>
      <form>
        <input type="text" placeholder="Email" className="p-2 m-2" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
};

export default Login;
