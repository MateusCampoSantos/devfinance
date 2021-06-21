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
  transactionsContainer: document.querySelector("#data-table tbody"),

  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);
    DOM.transactionsContainer.appendChild(tr);
  },
  innerHTMLTransaction(transaction) {
    const html = `
        <td class="date">${transaction.descrption}</td>
        <td class="expense">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <th><img src="./assets/minus.svg" alt="Remover Transação" /></th>
        `;
    return html;
  },
};

transactions.forEach((transaction) => {
  DOM.addTransaction(transaction);
});
