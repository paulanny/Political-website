const PLK = "sk_test_5f55171caf4eb07154eeaa55558a112634396c46";

const myHeaders = new Headers();
myHeaders.append(
  "authorization",
  "Bearer sk_test_5f55171caf4eb07154eeaa55558a112634396c46"
);
// myHeaders.append(
//   "Cookie",
//   "sails.sid=s%3AN5939V_aqMM0DF68BWjpT6v3Z6EnOGu0.iYaC7W8H9yw41GOIMJoZcTA3Nk4b8jw6rz0Ud1m9jHg"
// );

const loadingNode = document.querySelector(".loading");
const donationsTableNode = document.querySelector(".donations-container");
const donationsCountNode = document.querySelector(".donations-count");
const footerNode = document.querySelector("footer");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
const options = {
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
};
const numberWithCommas = (x) => {
  return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// {amount, authorization.bank, authorization.channel, createdAt, currency, customer.first_name, customer.last_name,

fetch("https://api.paystack.co/transaction", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    loadingNode.style.display = "none";
    const data = result.data;
    let count = 0;
    data.forEach((trx) => {
      const {
        amount,
        authorization: { bank, channel },
        createdAt,
        currency,
        customer: { first_name, last_name },
        status,
      } = trx;
      if (status === "success") {
        const trxNode = document.createElement("tr");
        trxNode.innerHTML = `

      <td>${first_name} ${last_name}</td>
      <td>${currency} ${numberWithCommas(amount / 100)}</td>
      <td>${bank}</td>
      <td>${channel}</td>
      <td>${new Date(createdAt).toLocaleDateString("en-UK", options)}</td>
      `;
        donationsTableNode.style.display = "block";
        document.querySelector("tbody").appendChild(trxNode);
        count++;
        donationsCountNode.innerHTML = `Total donations: ${count}`;
        footerNode.style.display = "flex";
      }
    });
    console.log(result);
  })
  .catch((error) => console.log("error", error));
