// Fiz este teste eliminando os loopings de criação do cabeçalho dinâmico, para ter maior controle sobre a visibilidade das colunas conforme diferentes opções de busca (ver infos/mapeamento.txt)

// OPTION 4: buscando pelo latim

// Tabela padrão: 

$( document ).ready(function() { 
    geraTable4()
})


// Função geraTable4 (buscando pelo latim) (ver infos/mapeamento.txt, Opção 4):

  function geraTable4 () {

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
                targets: [0, 2, 3, 4], 
                visible: false,
                searchable: false,
            }],
            language: {
                search: 'Petere',
                zeroRecords: 'Petīta inventa non sunt.',
            }
          });
          $('#example tbody').on('click', 'tr',function(){
            let table = $('#example').DataTable();
            var data = table.row(this).data();
            document.getElementById('corpo').innerHTML = 
            '<div>' + data[1] + '</div>' + 
            '<div>' + data[0] + '</div>' + 
            '<div>' + data[2] + '</div>' + 
            '<div>' + data[3] + '</div>' + 
            '<div>Fonte: ' + data[4] + '</div>';
          });
      }; 

  