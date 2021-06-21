const Modal = {
  open() {
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

const transactions = [
  {
    id: 1,
    descrption: "Luz",
    amount: -50000,
    date: "23/01/2021",
  },
  {
    id: 2,
    descrption: "Website",
    amount: 500000,
    date: "23/01/2021",
  },
  {
    id: 3,
    descrption: "Internet",
    amount: -20000,
    date: "23/01/2021",
  },
];

const Transaction = {
  incomes() {
    //Somar as entradas
  },
  expenses() {
    //Somar as saidas
  },
  total() {
    // Entradas - saídas
  },
};

const DOM = {
  innerHTMLTransaction() {
    const html = `
        <tr>
              <td class="date">Luz</td>
              <td class="expense">- R$ 500,00</td>
              <td class="date">23/01/2021</td>
              <th><img src="./assets/minus.svg" alt="Remover Transação" /></th>
        </tr>
        `;
  },
};
