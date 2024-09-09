self.addEventListener('push', function(event) {
    const options = {
      body: "Esta é uma notificação personalizada. Clique para abrir uma página!",
      icon: "https://via.placeholder.com/100",
      requireInteraction: true,
      actions: [
        {action: 'abrir', title: 'Abrir Página'},
        {action: 'fechar', title: 'Fechar'}
      ]
    };
  
    event.waitUntil(
      self.registration.showNotification("Notificação", options)
    );
  });
  
  self.addEventListener('notificationclick', function(event) {
    event.notification.close();
  
    if (event.action === 'abrir') {
      clients.openWindow('https://www.example.com');
    } else if (event.action === 'fechar') {
      // Aqui pode realizar alguma outra ação ao fechar
    } else {
      // Quando clica na notificação fora das ações
      clients.openWindow('https://www.example.com');
    }
  });
  