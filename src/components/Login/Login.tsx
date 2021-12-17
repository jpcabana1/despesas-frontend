import { FC } from "react";

const Login: FC<any> = () => {
  return (
    <div>
      <h1>Login</h1>
      <hr />
      
      <form>
        <label>usuário</label>
        <br />
        <input type="text" />

        <br />

        <label>senha:</label>
        <br />
        <input type="password" />

        <br />
        <input type="button" value="Logar" />
      </form>
    </div>
  );
};

export default Login;
