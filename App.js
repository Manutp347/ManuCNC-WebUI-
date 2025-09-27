function sendGcode(command) {
  fetch('http://192.168.1.42/cmd', {  // Remplace par l'IP réelle de ta CNC
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: command })
  })
  .then(response => {
    if (response.ok) {
      alert("Commande envoyée : " + command);
    } else {
      alert("Erreur d'envoi");
    }
  })
  .catch(error => {
    alert("Erreur réseau : " + error);
  });
}
