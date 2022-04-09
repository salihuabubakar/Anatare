/*jshint esversion: 6 */

const sandBoxKey = "wNx4KxSSEIuY86nj4zMXjpePok0LxfC91634141057";


const ownerShip = () => {
  var myHeaders = new Headers();
  myHeaders.append("sandbox-key", sandBoxKey);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://fsi.ng/api/axamansard/get-OwnerShipType", requestOptions)
    .then(response => response.json())
    .then(result => {
      const { OwnershipType1 } = result[0];
      const { OwnershipType1: OwnershipType2 } = result[1];
      const { OwnershipType1: OwnershipType3 } = result[2];

      document.getElementById("li1").innerHTML = OwnershipType1;
      document.getElementById("li1").classList.remove("skeleton-loading")
      document.getElementById("li2").innerHTML = OwnershipType2;
      document.getElementById("li2").classList.remove("skeleton-loading")
      document.getElementById("li3").innerHTML = OwnershipType3 + "(Maximum of 5)";
      document.getElementById("li3").classList.remove("skeleton-loading")

    })

    .catch(error => console.log('error', error));
};

const states = () => {
  var myHeaders = new Headers();
  myHeaders.append("sandbox-key", sandBoxKey);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://fsi.ng/api/axamansard/hospital-states", requestOptions)
    .then(response => response.json())
    .then(result => {
      const { StateCode } = result[17];
      const { StateCode: StateCode1 } = result[19];
      const { StateCode: StateCode2 } = result[24];
      document.getElementById("li4").innerHTML = StateCode;
      document.getElementById("li4").classList.remove("skeleton-loading")
      document.getElementById("li5").innerHTML = StateCode1;
      document.getElementById("li5").classList.remove("skeleton-loading")
      document.getElementById("li6").innerHTML = StateCode2;
      document.getElementById("li6").classList.remove("skeleton-loading")
    })

    .catch(error => console.log('error', error));
};

const condition = () => {
  var myHeaders = new Headers();
  myHeaders.append("sandbox-key", sandBoxKey);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

fetch("https://fsi.ng/api/axamansard/get-conditions", requestOptions)
  .then(response => response.json())
  .then(result => {
    const { PreexistingCondition1 } = result[4];
    const { PreexistingCondition1: PreexistingCondition2 } = result[6];

    document.getElementById("li7").innerHTML = PreexistingCondition1;
    document.getElementById("li7").classList.remove("skeleton-loading")
    document.getElementById("li8").innerHTML = PreexistingCondition2;
    document.getElementById("li8").classList.remove("skeleton-loading")
  })

  .catch(error => console.log('error', error));
};


let button = document.getElementById("btn").addEventListener("click", ()=> {
  ownerShip();
  states();
  condition();
});
