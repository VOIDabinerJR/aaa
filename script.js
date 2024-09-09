if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(function(registration) {
    console.log('Service Worker registrado com sucesso:', registration);

    document.getElementById("notificarBtn").addEventListener("click", function() {
      verificarPermissaoNotificacao(registration);
    });

  }).catch(function(error) {
    console.log('Falha ao registrar o Service Worker:', error);
  });
}

// Função para verificar e solicitar permissão de notificações
function verificarPermissaoNotificacao(registration) {
  const opcoes = {
    body: " Valor MZN 1000,00",
    icon: "https://raw.githubusercontent.com/VOIDabinerJR/VOIDpayWebMVP2/main/img/logo.png", // Um ícone placeholder
    requireInteraction: true, // Fica na tela até que o usuário interaja
    
  };

  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      console.log("Permissão concedida, enviando notificação...");
      registration.showNotification("Venda Aprovada!", opcoes);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
          console.log("Permissão concedida, enviando notificação...");
          registration.showNotification("Notificação", opcoes);
        } else {
          console.log("Permissão negada para notificações.");
        }
      });
    } else {
      console.log("Permissão negada para notificações.");
    }
  } else {
    console.log("Navegador não suporta notificações.");
  }
}
