$( document ).ready(function() { 
    geraTable()
})

// Início da função geraTable:

function geraTable () {

        var data = dataSet2;

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

        // console.log(qualTd);
        for (var i = 2; i < qualTd + 1; i++) {
	        stringParaSearch.push(i - 1);

          // console.log(i);
    
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

        document.getElementsByTagName("body")[0].appendChild(style);
        $("#example").DataTable({
            dom: '<f>t',
            data: data,
            ordering: false,
            deferRender: true,
            // scrollCollapse: false,
            // scroller: true,
            paginate: false,
            scrollY: 400,
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