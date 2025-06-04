
const moradores = [
    { id: 1, nome: 'Maria Silva', rua: 'Rua das Flores', telefone: '9999-9999', status: 'Seguro' },
    { id: 2, nome: 'João Souza', rua: 'Rua do Sol', telefone: '8888-8888', status: 'Desconhecido' },
    { id: 3, nome: 'Ana Pereira', rua: 'Rua das Palmeiras', telefone: '7777-7777', status: 'Seguro' },
    { id: 4, nome: 'Carlos Santos', rua: 'Rua do Limoeiro', telefone: '6666-6666', status: 'Desconhecido' },
    { id: 5, nome: 'Lucas Almeida', rua: 'Rua do Cedro', telefone: '5555-5555', status: 'Seguro' },
    { id: 6, nome: 'Cláudia Costa', rua: 'Rua das Acácias', telefone: '4444-4444', status: 'Desconhecido' },
    { id: 7, nome: 'Paulo Rocha', rua: 'Rua dos Jasmins', telefone: '3333-3333', status: 'Seguro' },
    { id: 8, nome: 'Juliana Martins', rua: 'Rua das Orquídeas', telefone: '2222-2222', status: 'Seguro' },
    { id: 9, nome: 'Ricardo Lima', rua: 'Rua das Margaridas', telefone: '1111-1111', status: 'Desconhecido' },
    { id: 10, nome: 'Patrícia Gomes', rua: 'Rua das Violetas', telefone: '0000-0000', status: 'Seguro' },
  ];
  
  const listaMoradores = document.getElementById('listaMoradores');
  const buscaInput = document.getElementById('buscaInput');
  
  function exibirMoradores(lista) {
    listaMoradores.innerHTML = '';
  
    if (lista.length === 0) {
      listaMoradores.innerHTML = '<li>Nenhum morador encontrado.</li>';
      return;
    }
  
    lista.forEach(morador => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${morador.nome}</strong><br/>
        Rua: ${morador.rua} <br/>
        Telefone: ${morador.telefone} <br/>
        <span style="font-weight:bold; color:${morador.status === 'Seguro' ? 'green' : 'red'};">
          Status: ${morador.status}
        </span>
      `;
      listaMoradores.appendChild(li);
    });
  }
  
  function buscarMoradores() {
    const termo = buscaInput.value.trim().toLowerCase();
  
    if (!termo) {
      exibirMoradores(moradores);
      return;
    }
  
    const filtrados = moradores.filter(m =>
      m.nome.toLowerCase().includes(termo)
    );
  
    exibirMoradores(filtrados);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    exibirMoradores(moradores);
    buscaInput.addEventListener('input', buscarMoradores);
  });
  