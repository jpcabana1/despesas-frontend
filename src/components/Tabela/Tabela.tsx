import { FC } from "react";

const Tabela: FC<any> = () => {
  return (
    <div>
      <h1>Despesas</h1>
      <hr />
      <table>
        <thead>
          <th>Id</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Status</th>
          <th>Ativo</th>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>Gasolina</td>
            <td>252.90</td>
            <td>Variável</td>
            <td>PAGO</td>
            <td>false</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Gympass</td>
            <td>59.90</td>
            <td>Pessoal</td>
            <td>PAGO</td>
            <td>true</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mc Donald's</td>
            <td>14.00</td>
            <td>Pessoal</td>
            <td>PENDENTE</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
