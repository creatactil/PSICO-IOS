function listafavorito() {
				
    	var xnumero = localStorage.numero;
		$.mobile.changePage("#page14", {transition: "slide"},
            true,
            true);
	
			
			$('#page14 ul').empty();
            $("#carga14").show();
		                 
						
		$.ajax({
		url: 'http://appcoplp.micolegioapp.com/php/listafavorito.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {numero: xnumero},
		success: function(data){			
	   	 
		     
	    $.each(data, function(index, item) {
			
			var registro = item.registro;
            var codigo = item.codigo;
			var estado = item.estado;
			var id_aux = item.id_aux;
			var cial = item.cial;
			
			$('#id_'+index).remove();
			
			var verde = "#005099";
			
			if(estado==0){
				var tema = "c";
				var listo2 = "#listafav1";
				
				}else{	
				var tema = "c";
				var listo2 = "#listafav1";}
									
			$(listo2).append(
			
						
			'<li class="ui-li-has-alt ui-li-has-thumb ui-first-child ui-last-child" style="height: 60px"><a href="#" class="ui-btn" onclick="changePage(id' + index + '), contador(\''+registro+'\');" style="height: 60px; padding:0; background-color:#ffffff" >'+
			'<img src="imagenes/icono.jpg" class="ui-li-thumb" style="margin-top: 5px; margin-left: 5px; height: 50px">'+
		'<p style="margin-left:60px; margin-top:5px; font-weight: bold; color:#000000" >'+item.titulo+'</p>'+
		'<p style="margin-left:60px; padding:0; color:'+verde+'; font-size: 0.7em ">'+'Nº Registro:  '+item.registro+'<br>'+
    	''+'Fecha: '+''+item.fecha+'</p>'+
		
		'<a data-icon="delete" class="ui-btn ui-btn-icon-notext ui-icon-delete" title=""></a>'+
        '<a href="#" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="purchase" aria-expanded="false" class="ui-btn ui-btn-icon-notext ui-icon-delete ui-btn-a" title="" onClick="borrafavorito(\''+item.id_aux+'\' )" style="height: 62px; background-color:#ffffff">'+
		'</a>'+
    	'</li>'
						
			);
			
			
			
										
		 /*Pagina dinamica*/
		    content = 
			'<div data-role="page"  id="id' + index + '" data-url="id' + index + '" data-theme="a" >' +
					'<div style="height:20px; visibility:hidden"></div>'+
					'<div data-role="header" data-theme="a" style="background-image:url(imgportada/cabecera.png)">' + 
					'<a href="#page14" onClick="listafavorito()" data-role="button" data-icon="carat-l" data-iconpos="notext" data-theme="a" class="ui-link ui-btn-left ui-btn ui-btn-a ui-icon-carat-l ui-btn-icon-notext ui-shadow ui-corner-all" role="button"><span class="ui-btn-inner ui-corner-bottom ui-controlgroup-last" aria-hidden="true"><span class="ui-btn-text">Atrás</span><span class="ui-icon ui-icon-back ui-icon-shadow"></span></span></a>'+
					'<h1 style="margin: 0 15%">' + item.titulo + '</h1>' +
					'</div>' +
					
					
									
					
					'<div data-role="content" id="contenido14">' +
					'<p style="margin:-1em; padding:0;">' +
                    '<div data-role="fieldcontain" class="result2">' +
                                  '<p style="margin:0; padding:0; color:'+verde+'; font-size: 0.9em">Nº de Registro: '+item.registro+''+
                                  '<br>'+
								  'Fecha: '+item.fecha+'</p>'+
								  '<p>'+ item.texto + '</p>' +
								  '<p><strong>'+item.nombre+'</strong></p>'+
								  '<br>'+
                                  '<a href="" onclick="descargarArchivo(\''+item.enlace+'\')" >'+item.enlace+'</a>'+
								  '<br>'+
								  '<br>'+
								  '<br>'+
								  '<a href="#page11" style="color:#005099"  data-rel="pop" onClick="textofirma(\''+item.registro+'\' ), textofirma2(\''+item.titulo+'\' )">'+item.firma+'</a>'+
								   
                                  '</div>' +
                                '</p>' +
								'</div>';
	   
			
			 $('body').append(content).trigger('refresh');
			$(index).page();
			
			
		});
			$("#carga14").hide(); 
			
		}
		
		});
			$('#piepagina14').append('<div data-role="footer" data-theme="a" data-position="fixed" role="contentinfo" class="ui-footer ui-bar-b ui-footer-fixed slideup ui-fixed-hidden">'+
    '<div data-role="navbar" class="ui-navbar" role="navigation">'+
    '<ul class="ui-grid-c">'+
    '<li class="ui-block-a"><a href="#page1" data-transition="slide" data-role="button" onclick="globo()" data-icon="home" class="ui-link ui-btn ui-icon-home ui-btn-icon-top ui-shadow ui-corner-all" role="button" style="background-color:#005099; color:#fff">Inicio</a></li>'+
    '<li class="ui-block-b"><a href="#" data-role="button" onclick="crearLista()" data-icon="mail" class="ui-link ui-btn ui-icon-mail ui-btn-icon-top ui-shadow ui-corner-all" role="button" style="background-color:#005099;"><img src="" class="globo" style="float:left; width:15px;" >Circulares</a></li>'+
    '<li class="ui-block-c"><a href="#" data-role="button" onclick="listafavorito()" data-icon="star" class="ui-link ui-btn ui-icon-star ui-btn-icon-top ui-shadow ui-corner-all" role="button" style="background-color:#005099;">Favoritos</a></li>'+
    '<li class="ui-block-d"><a href="#page5" data-role="button" onclick="" data-icon="info" class="ui-link ui-btn ui-icon-info ui-btn-icon-top ui-shadow ui-corner-all" role="button" style="background-color:#005099; color:#fff">Ayuda</a></li>'+
    '</ul>'+
	'</div>'
									);
	
			
		  	$('#listafav').listview('refresh', true);
			$('#listafav1').listview('refresh', true);
			globo();
    } 
	 
 
function changePage(id) {
		$.mobile.changePage($(id), {transition : "slide"});
		
	}
	
	
function borrar2(id_aux2){
	
	var elidaux2 = id_aux2; 
	$("#id_aux4").val(elidaux2);	
	
	}
	
