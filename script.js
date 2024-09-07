// Função para verificar e solicitar permissão de notificações
function verificarPermissaoNotificacao() {

  const opcoes = {
    body: "Esta é uma notificação personalizada. Clique para abrir uma página!",
    icon: "https://via.placeholder.com/100", // Um ícone placeholder
    requireInteraction: true, // Fica na tela até que o usuário interaja
    actions: [
      {action: 'abrir', title: 'Abrir Página'},
      {action: 'fechar', title: 'Fechar'}
    ]
  };

   if ("Notification" in window) {
  // Verifica se a permissão foi concedida
  if (Notification.permission === "granted") {
    console.log("Permissão concedida, enviando notifdddicação...");
    new Notification("Notificação", opcoes);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function(permission) {
      if (permission === "granted") {
        console.log("Permissão concedida, enviando notificação...");
        new Notification("Notificação", opcoes);
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
  
  // Função para enviar a notificação
  function enviarNotificacao() {
   
  
    const notificacao = new Notification("Notificação do Meu Projeto", opcoes);
  
    // Definir um comportamento quando o usuário clica na notificação
    notificacao.onclick = function(event) {
      event.preventDefault(); // Previne o comportamento padrão de clicar
      window.open('https://www.example.com', '_blank'); // Abre uma nova aba com o link
      
    };
  
    // Comportamento para as ações da notificação
    notificacao.onclose = function() {
      console.log("Notificação fechada.");
    };
  }
  
  // Adicionar um ouvinte de evento para o botão
  document.getElementById("notificarBtn").addEventListener("click", verificarPermissaoNotificacao);
  