import { FC } from "react";

const Cadastro: FC<any> = () => {
  return (
    <div>
      <h1>Cadastro</h1>
      <hr />
      <form>
        <table>
          <tbody>
            <tr>
              <label>
                <b>Descrição</b>
              </label>
              <br />
              <input type="text"></input>
            </tr>
            <tr>
              <td>
                <label>
                  <b>Valor</b>
                </label>
                <br />
                <input type="text"></input>
              </td>
              <td>
                <label>
                  <b>Categoria</b>
                </label>
                <br />
                <select>
                  <option>EU</option>
                  <option>Fixo</option>
                  <option>Variável</option>
                  <option selected>Pessoal</option>
                </select>
              </td>
            </tr>

            <tr>
              <label>
                <b>Criado em:</b>
              </label>
              <br />
              <input
                type="date"
                id="start"
                name="trip-start"
                min="2018-01-01"
              ></input>
            </tr>
            <tr>
              <input type="button" value="Adicionar"></input>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
export default Cadastro;
