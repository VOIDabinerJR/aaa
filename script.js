if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://raw.githubusercontent.com/VOIDabinerJR/aaa/main/sw.js').then(function(registration) {
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
    body: "Esta é uma notificação personalizada. Clique para abrir uma página!",
    icon: "https://via.placeholder.com/100",
    requireInteraction: true,
    actions: [
      {action: 'abrir', title: 'Abrir Página'},
      {action: 'fechar', title: 'Fechar'}
    ]
  };

  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      console.log("Permissão concedida, enviando notificação...");
      registration.showNotification("Notificação", opcoes);
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
