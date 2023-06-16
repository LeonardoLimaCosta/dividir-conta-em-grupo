function calculateTip(event) {
 event.preventDefault();
 let conta = parseFloat(document.getElementById('Conta').value);
 let Pessoas = parseFloat(document.getElementById('Pessoas').value);
 
 if(conta == ''){
 alert("Preencha os valores")
 return;
  }

  if (Pessoas === "" || Pessoas <= 1) {
    Pessoas = 1;
    document.getElementById('each').style.display = "none";
  } else {
    document.getElementById('each').style.display = "block";
  }

  let total = (conta /Pessoas);
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById('totalTip').style.display = "block"; 
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
