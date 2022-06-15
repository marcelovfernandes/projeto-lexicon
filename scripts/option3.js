// Fiz este teste eliminando os loopings de criação do cabeçalho dinâmico, para ter maior controle sobre a visibilidade das colunas conforme diferentes opções de busca (ver infos/mapeamento.txt)

// OPTION 3: buscando pelo francês

// Tabela padrão: 

$( document ).ready(function() { 
    geraTable3()
})


// Função geraTable3 (buscando pelo francês) (ver infos/mapeamento.txt, Opção 3):

  function geraTable3 () {

        var data = dataSet1;
        var mydata = data.slice(1, data.lenght);

        $("#example").DataTable({
            dom: '<f>t',
            data: mydata,
            mark: true,
            // ordering: false,
            order: [[3, 'asc']],
            deferRender: true,
            scrollCollapse: false,
            scroller: true,
            paginate: true,
            scrollY: 400,
            info: false,
            columnDefs: [{
                targets: [0, 1, 2, 4],
                visible: false,
                searchable: false,
            }],
            language: {
                search: 'Chercher',
                zeroRecords: 'Pas de résultat pour cette recherche.',
            }
          });
          $('#example tbody').on('click', 'tr',function(){
            let table = $('#example').DataTable();
            var data = table.row(this).data();
            document.getElementById('corpo').innerHTML = 
            '<div>' + data[3] + '</div>' + 
            '<div>' + data[1] + '</div>' + 
            '<div>' + data[0] + '</div>' + 
            '<div>' + data[2] + '</div>' + 
            '<div>Fontes: ' + data[4] + '</div>';
          });
          const d = new Date();
          const dlocal = d.toLocaleDateString();
          let tabletot = $('#example').DataTable();
          let total = tabletot.rows().count();
          let totalformatado = total.toLocaleString();
          document.getElementById('num').innerHTML = 
            '<div>Atualização dinâmica ' + '(' + dlocal + ')' + ':' + '</div>' +
            '<div style="color: yellow;">' + totalformatado + ' entradas' + '</div>';
      }; 

