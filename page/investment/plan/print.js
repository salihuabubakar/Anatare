/*jshint esversion: 6 */

const sandBoxKey = "wNx4KxSSEIuY86nj4zMXjpePok0LxfC91634141057";

let print = document.getElementById("print").addEventListener("click", ()=> {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("sandbox-key", sandBoxKey);
  myHeaders.append("Authorization", "dskjdks");

  var raw = JSON.stringify({
    "account_bank": "044",
    "account_number": "0690000040",
    "amount": 5500,
    "narration": "Akhlm Pstmn Trnsfr xx007",
    "currency": "NGN",
    "reference": "akhlm-pstmnpyt-rfxx007_PMCKDU_1",
    "callback_url": "https://webhook.site/b3e505b0-fe02-430e-a538-22bbbce8ce0d",
    "debit_currency": "NGN"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://fsi.ng/api/v1/flutterwave/v3/transfers", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result.data);

      const { account_number,amount,bank_name,created_at,currency,full_name,narration, success } = result.data;

        document.getElementById("acctNo").innerHTML = account_number;
        document.getElementById("acctNo").classList.remove("skeleton-loading");
        document.getElementById("amount").innerHTML = amount;
        document.getElementById("amount").classList.remove("skeleton-loading");
        document.getElementById("bnkName").innerHTML = bank_name;
        document.getElementById("bnkName").classList.remove("skeleton-loading");
        document.getElementById("dateCreated").innerHTML = created_at;
        document.getElementById("dateCreated").classList.remove("skeleton-loading");
        document.getElementById("Debitcurrency").innerHTML = currency;
        document.getElementById("Debitcurrency").classList.remove("skeleton-loading");
        document.getElementById("fullname").innerHTML = full_name;
        document.getElementById("fullname").classList.remove("skeleton-loading");
        document.getElementById("naration").innerHTML = narration;
        document.getElementById("naration").classList.remove("skeleton-loading");
        document.getElementById("successMessage").innerHTML = "Successful "+" Transaction";
        document.getElementById("successMessage").classList.remove("skeleton-loading");
    })
    .catch(error => console.log('error', error));
});
