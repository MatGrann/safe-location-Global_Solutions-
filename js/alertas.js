
const refugios = [
    { id: 1, nome: "Escola Municipal Central", endereco: "Av. Brasil, 100", distancia: "500m" },
    { id: 2, nome: "Igreja São José", endereco: "Rua das Flores, 200", distancia: "750m" },
    { id: 3, nome: "Ginásio Poliesportivo", endereco: "Rua do Sol, 300", distancia: "1.2km" },
    { id: 4, nome: "Centro Comunitário", endereco: "Rua das Palmeiras, 400", distancia: "2km" },
  ];
  
  let alertaAtivo = false;
  
  function mostrarRefugios() {
    const lista = document.getElementById('listaRefugios');
    if (!lista) return;
  
    lista.innerHTML = '';
    refugios.forEach(r => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${r.nome}</strong><br/>
        Endereço: ${r.endereco}<br/>
        Distância: ${r.distancia}
      `;
      lista.appendChild(li);
    });
  }
  
  function ativarAlerta() {
    alertaAtivo = true;
    atualizarAlerta();
  }
  
  function desativarAlerta() {
    alertaAtivo = false;
    atualizarAlerta();
  }
  
  function atualizarAlerta() {
    const box = document.getElementById('alertaBox');
    if (!box) return;
  
    box.style.display = alertaAtivo ? 'block' : 'none';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    mostrarRefugios();
    atualizarAlerta();
  });
  