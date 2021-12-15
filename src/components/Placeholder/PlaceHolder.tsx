import { FC } from "react";
import Cadastro from "../Cadastro/Cadastro";
import Tabela from "../Tabela/Tabela";
import Categoria from "../Categoria/Categoria";
import Total from "../Total/Total";

const PlaceHolder: FC<any> = () => {
  return (
    <div>
      <table>
        <tr>
          <td>
            <Cadastro />
          </td>
        </tr>
        <tr>
          <td>
            <Tabela />
          </td>
        </tr>
        <tr>
          <td>
            <Categoria />
          </td>
        </tr>
        <tr>
          <td>
            <Total />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default PlaceHolder;
