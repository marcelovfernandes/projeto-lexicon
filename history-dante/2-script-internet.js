// Tentativa de ajustar o tamanho dos containers do Bootstrap, para usar no "2-projeto-14-adapt-internet"


$( document ).ready(function() { 
    geraTable()
})

// Início da função geraTable:


function geraTable () {
        var data = dataSet2;
        // Essa variável foi importada do database.js no html na tag: <script src="./arquivos/database.js"></script> de acesso global
        
        // Gerador de Cabeálho
		    for (var i = 1; i < data[0].length; i++) {
          document.getElementById("cabecalhoDinamico").innerHTML =
          document.getElementById("cabecalhoDinamico").innerHTML +
          `<th style="display: none">` +
          data[0][i] +
          `</th>`;
          }
	  
        data = data.slice(1, data.length);
	      var qualTd = data[0].length;

        var stringParaStyle = ``;
        var stringParaSearch = [];

        for (var i = 2; i < qualTd + 1; i++) {
	        stringParaSearch.push(i - 1);
          stringParaStyle =
	        stringParaStyle +
            `#example .even > td:nth-child(` +
            i.toString() +
            `) {
            display: none
              }
              #example .odd > td:nth-child(` +
            i.toString() +
            `) {
            display: none
              }`;
            }

          // console.log(stringParaSearch);

        var style = document.createElement("style");
        style.innerHTML = stringParaStyle;
        
        var tamanhoDaTela = document.documentElement.scrollHeight;
        var tamanhoDoContainer = document.querySelector("body > div > div:nth-child(2) > div.col-sm-4.bg-warning").scrollHeight

        document.getElementsByTagName("body")[0].appendChild(style);
        $("#example").DataTable({
            dom: '<f>t',
            data: data,
            ordering: false,
            deferRender: true,
            scrollCollapse: false, //Tamanho náo interefere na filtragem
            // scroller: true,
            paginate: false,
            scrollY: tamanhoDoContainer * 0.9,
            info: false,
		        columnDefs: [
			        {targets: stringParaSearch, searchable: false }
				      ],
            language: {
                search: 'Buscar',
                zeroRecords: 'Sem resultados para essa busca',
            }
          });

        $("#example").on("click", "tr", function (e) {
          document.getElementById("corpo").innerHTML = "";
          for (var i = 0; i < data[0].length; i++) {
            document.getElementById("corpo").innerHTML += "<div>" +
              e.currentTarget.getElementsByTagName("td")[i].innerHTML + "</div>";
            }
          });

      };


// Fim da função geraTable.

  // Simplifiquei umas linhas. O código original é este:

          // $(document.getElementById("example")).on("click", "tr", function (e) {
          //   document.getElementById("corpo").innerHTML = "";
          //   for (var i = 1; i < data[0].length; i++) {
          //     document.getElementById("corpo").innerHTML =
          //       document.getElementById("corpo").innerHTML + "<div>" +
          //       e.currentTarget.getElementsByTagName("td")[i].innerHTML + "</div>";
          //   }
          // });