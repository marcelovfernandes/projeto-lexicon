// Fiz este teste eliminando os loopings de criação do cabeçalho dinâmico, para ter maior controle sobre a visibilidade das colunas conforme diferentes opções de busca (ver infos/mapeamento.txt)

$( document ).ready(function() { 
    geraTable()
})

// Início da função geraTable:

function geraTable () {

        var data = dataSet1;
        var mydata = data.slice(1, data.lenght);

		    // for (var i = 1; i < data[0].length; i++) {
        //   document.getElementById("cabecalhoDinamico").innerHTML =
        //   document.getElementById("cabecalhoDinamico").innerHTML +
        //   `<th style="display: none">` +
        //   data[0][i] +
        //   `</th>`;
        //   }
	  
        // data = data.slice(1, data.length);
	      // var qualTd = data[0].length;

        // var stringParaStyle = ``;
        // var stringParaSearch = [];

        // // console.log(qualTd);
        // for (var i = 2; i < qualTd + 1; i++) {
	      //   stringParaSearch.push(i - 1);

        //   // console.log(i);
    
        //   stringParaStyle =
	      //   stringParaStyle +
        //     `#example .even > td:nth-child(` +
        //     i.toString() +
        //     `) {
        //     display: none
        //       }
        //       #example .odd > td:nth-child(` +
        //     i.toString() +
        //     `) {
        //     display: none
        //       }`;
        //     }

        //   // console.log(stringParaSearch);

        // var style = document.createElement("style");
        // style.innerHTML = stringParaStyle;

        // document.getElementsByTagName("body")[0].appendChild(style);

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
		        // columnDefs: [
			      //   {targets: stringParaSearch, searchable: false }
				    //   ],
            columnDefs: [{
                targets: [1, 2, 3, 4], //Opção 1 - default: ver infos/mapeamento.txt
                visible: false,
                searchable: false,
            }],
            language: {
                search: 'Buscar',
                zeroRecords: 'Sem resultados para essa busca',
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
      }; //Opção 1 - default: ver infos/mapeamento.txt

// Fim da função geraTable.




  // Nestas últimas linhas, usei a api row().data() do dataTables (https://datatables.net/reference/api/row().data())
  
  //O código original (para construção dinâmica dos resultados a partir da tabela) era este:

    // $(document.getElementById("example")).on("click", "tr", function (e) {
    //   document.getElementById("corpo").innerHTML = "";
    //   for (var i = 1; i < data[0].length; i++) {
    //     document.getElementById("corpo").innerHTML =
    //       document.getElementById("corpo").innerHTML + "<div>" +
    //       e.currentTarget.getElementsByTagName("td")[i].innerHTML + "</div>";
    //   }
    // });