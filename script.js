document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utm = urlParams.get("utm_source") || "desconhecido";
  document.getElementById('utm_source').value = utm;

  document.getElementById('hotmartForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = this.nome.value;
    const email = this.email.value;
    const utm_source = this.utm_source.value;

    const url = `https://script.google.com/macros/s/AKfycbw0-7P8J_zWZiBvncQpaPJT2Wlc8dZTio87BkIqG6DwuyZbEpEybbn4A6FThZcuN4MxEQ/exec?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&utm_source=${encodeURIComponent(utm_source)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'sucesso') {
          const urlHotmart = `https://go.hotmart.com/SEU_LINK_DE_COMPRA?name=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&utm_source=${encodeURIComponent(utm_source)}`;
          window.location.href = urlHotmart;
        } else {
          alert("Erro ao salvar os dados. Tente novamente.");
        }
      })
      .catch(err => {
        console.error('Erro:', err);
        alert("Erro na conexão. Tente novamente.");
      });
  });
});