// Fiz este teste eliminando os loopings de criação do cabeçalho dinâmico, para ter maior controle sobre a visibilidade das colunas conforme diferentes opções de busca (ver infos/mapeamento.txt)

// OPTION 1: buscando pelo português

// Tabela padrão: 

$( document ).ready(function() { 
    geraTable1()
})


// Função geraTable1 (default: buscando pelo português) (ver infos/mapeamento.txt, Opção 1):

  function geraTable1 () {

        var data = dataSet1;
        var mydata = data.slice(1, data.lenght);

        $("#example").DataTable({
            dom: '<f>t',
            data: mydata,
            mark: true,
            // ordering: false,
            order: [[0, 'asc']],
            deferRender: true,
            scrollCollapse: false,
            scroller: true,
            paginate: true,
            scrollY: 400,
            info: false,
            columnDefs: [{
                targets: [1, 2, 3, 4],
                visible: false,
                searchable: false,
            }],
            language: {
                search: 'Buscar',
                zeroRecords: 'Sem resultados para essa busca.',
            }
          });
          $('#example tbody').on('click', 'tr',function(){
            let table = $('#example').DataTable();
            var data = table.row(this).data();
            document.getElementById('corpo').innerHTML = 
            '<div>' + data[0] + '</div>' + 
            '<div>' + data[1] + '</div>' + 
            '<div>' + data[2] + '</div>' + 
            '<div>' + data[3] + '</div>' + 
            '<div>Fonte: ' + data[4] + '</div>';
          });
      };

