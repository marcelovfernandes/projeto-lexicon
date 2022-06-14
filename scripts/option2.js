// Fiz este teste eliminando os loopings de criação do cabeçalho dinâmico, para ter maior controle sobre a visibilidade das colunas conforme diferentes opções de busca (ver infos/mapeamento.txt)

// OPTION 1: buscando pelo inglês

// Tabela padrão: 

$( document ).ready(function() { 
    geraTable2()
})


// Função geraTable2 (buscando pelo inglês) (ver infos/mapeamento.txt, Opção 2):

  function geraTable2 () {

        var data = dataSet1;
        var mydata = data.slice(1, data.lenght);

        $("#example").DataTable({
            dom: '<f>t',
            data: mydata,
            mark: true,
            ordering: false,
            deferRender: true,
            scrollCollapse: false,
            scroller: true,
            paginate: true,
            scrollY: 400,
            info: false,
            columnDefs: [{
                targets: [0, 1, 3, 4], 
                visible: false,
                searchable: false,
            }],
            language: {
                search: 'Search',
                zeroRecords: 'No matching records found.',
            }
          });
          $('#example tbody').on('click', 'tr',function(){
            let table = $('#example').DataTable();
            var data = table.row(this).data();
            document.getElementById('corpo').innerHTML = 
            '<div>' + data[2] + '</div>' + 
            '<div>' + data[1] + '</div>' + 
            '<div>' + data[0] + '</div>' + 
            '<div>' + data[3] + '</div>' + 
            '<div>Fonte: ' + data[4] + '</div>';
          });
      }; 
