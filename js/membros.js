const integrantes = [
    { name: "Mateus Carvalho Granjeia", rm: "557783" },
    { name: "Daniel de Assis Lobo Tinois", rm: "555798" },
    { name: "Enzo Diógenes do Prado", rm: "555062" },
    { name: "Miguel Otto Rosa de Sousa", rm: "555947" },
    { name: "Renan Soares Costa", rm: "556550" },
  ];
  
  function exibirIntegrantes() {
    const lista = document.getElementById('listaMembros');
  
    integrantes.forEach(integrante => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${integrante.name}</strong><br/>
        RM: ${integrante.rm}
      `;
      lista.appendChild(li);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    exibirIntegrantes();
  });
  