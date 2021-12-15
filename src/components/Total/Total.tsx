import { FC } from "react";

const Total: FC<any> = () => {
  return (
    <div>
      <h1>Totais</h1>
      <table>
        <thead>
          <th>Categoria</th>
          <th>Total</th>
        </thead>
        <tbody>
          <tr>
            <td>Pessoal</td>
            <td>73.90</td>
          </tr>
          <tr>
            <td>Variável</td>
            <td>252.90</td>
          </tr>
          <tr>
            <td>
              <b>Total</b>
            </td>
            <td>
              <b>326,80</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Total;
