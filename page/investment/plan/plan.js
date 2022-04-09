/*jshint esversion: 6 */

const sandBoxKey = "wNx4KxSSEIuY86nj4zMXjpePok0LxfC91634141057";

const transfer = (event) => {
  event.preventDefault();
  let bankName = document.getElementById("bankName").value;
  let accountNo = document.getElementById("accountNo").value;
  let amount = document.getElementById("amount").value;
  let email = document.getElementById("email").value;
  let narration = document.getElementById("narration").value;

  if(bankName == "") {
    document.getElementById("error").innerHTML = "Bank Name is required"
  }else if (accountNo == "") {
    document.getElementById("error").innerHTML = "Account Number is required"
  }else if (amount == "") {
    document.getElementById("error").innerHTML = "Amount is required"
  }else if (email == "") {
    document.getElementById("error").innerHTML = "Email is required"
  }else if (narration == "") {
    document.getElementById("error").innerHTML = "Narration is required"
  }else {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("sandbox-key", sandBoxKey);
    myHeaders.append("Authorization", "dskjdks");

    var raw = JSON.stringify({
      "account_bank": bankName,
      "account_number": accountNo,
      "amount": amount,
      "email": email,
      "narration": narration,
      "currency": "NGN",
      "reference": "peace_" + Math.floor((Math.random()* 1000000000)+1),
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

        let element = document.getElementById("span").innerHTML = "Transaction Successfull!";
        let print = document.getElementById("print").innerHTML = "Display Reciept";
        const remove = () => {
          let element = document.getElementById("span").innerHTML = "";
        }
        setTimeout(() => {
          remove();
        }, 5000);


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
          document.getElementById("successMessage").innerHTML = success+"ful "+" Transaction";
          document.getElementById("successMessage").classList.remove("skeleton-loading");


      })
      .catch(error => console.log('error', error));
  }
}


let button = document.getElementById("btn").addEventListener("click", ()=> {
  transfer(event);
  let form = document.getElementById("form");
  form.reset();
});
