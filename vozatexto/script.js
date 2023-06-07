window.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-btn');
    const resultText = document.getElementById('result-text');

    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'es-ES';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        resultText.textContent = 'Texto reconocido: ' + transcript;
      };

      recognition.onerror = (event) => {
        console.error('Error en el reconocimiento: ' + event.error);
      };

      startButton.addEventListener('click', () => {
        recognition.start();
        startButton.disabled = true;
        resultText.textContent = 'Escuchando...';
      });
    } else {
      console.log('La API de reconocimiento de voz no es compatible con este navegador.');
      startButton.disabled = true;
      resultText.textContent = 'API no compatible';
    }
  });