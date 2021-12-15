import { FC } from "react";

const Categoria: FC<any> = () => {
  return (
    <div>
      <h1>Nova Categoria</h1>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label>
                  <b>Nome:</b>
                </label>
                <br />
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <b>Icone:</b>
                </label>
              </td>
            </tr>
            <tr>
              <input type="button" value="icone 1" />
              <input type="button" value="icone 2" />
              <input type="button" value="icone 3" />
            </tr>
            <tr>
              <input type="button" value="icone 4" />
              <input type="button" value="icone 5" />
              <input type="button" value="icone 6" />
            </tr>
            <tr>
              <input type="button" value="icone 7" />
              <input type="button" value="icone 8" />
              <input type="button" value="icone 9" />
            </tr>
            <tr>
              <td>
                <br />
                <input type="button" value="Adicionar Categoria" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Categoria;
