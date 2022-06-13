// Fiz este teste eliminando os loopings de criação do cabeçalho dinâmico, para ter maior controle sobre a visibilidade das colunas conforme diferentes opções de busca (ver infos/mapeamento.txt)

// Tabela padrão: 

$( document ).ready(function() { 
    geraTable1()
})


// Botões de escolha:

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');

link1.onclick = (e) => {geraTable1()};
link2.onclick = (e) => {geraTable2()};
link3.onclick = (e) => {geraTable3()};
link4.onclick = (e) => {geraTable4()};


// Tabelas geradas a partir da escolha:

// Função geraTable1 (default: buscando pelo português) (ver infos/mapeamento.txt, Opção 1):

  function geraTable1 () {

        var data = dataSet1;
        var mydata = data.slice(1, data.lenght);

        $("#example").DataTable({
            destroy: true,
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


// Função geraTable2 (buscando pelo inglês) (ver infos/mapeamento.txt, Opção 2):

  function geraTable2 () {

        var data = dataSet1;
        var mydata = data.slice(1, data.lenght);

        $("#example").DataTable({
            destroy: true,
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


// Função geraTable3 (buscando pelo francês) (ver infos/mapeamento.txt, Opção 3):

  function geraTable3 () {

        var data = dataSet1;
        var mydata = data.slice(1, data.lenght);

        $("#example").DataTable({
            destroy: true,
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
            '<div>Fonte: ' + data[4] + '</div>';
          });
      }; 

// Função geraTable4 (buscando pelo latim) (ver infos/mapeamento.txt, Opção 4):

  function geraTable4 () {

        var data = dataSet1;
        var mydata = data.slice(1, data.lenght);

        $("#example").DataTable({
            destroy: true,
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

  