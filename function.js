$(document).ready(function() { 
	
     $('#main li a').click(function(){

        var d = $(this).html()

		
		
		$.getJSON("http://localhost:3000/TVGrid", function (json){

            
            var programms = json['Event']
                       
            var table = document.getElementById('table')
            
            
            var rows = table.getElementsByTagName('tr')
            
            
            for(var i = rows.length-1; i > -1 ; i--)
            {
			   table.removeChild(rows[i])	
					
				
			}    
			
			
		  var row = document.createElement('tr')
		  
		  var td = document.createElement('td')
		  td.innerHTML = 'Время'
		  row.appendChild(td)
		  
		  
		  td = document.createElement('td')
		  td.innerHTML = 'Заголовок'
		  row.appendChild(td)
		  
		  td = document.createElement('td')
		  td.innerHTML = 'Название'
		  row.appendChild(td)
		  
		  td = document.createElement('td')
		  td.innerHTML = 'Описание'
		  row.appendChild(td)
		  
		  
		table.appendChild(row)
			        
            for(var i = 0; i < programms.length; i++)
            {
			  	
                  if( d == programms[i]['Date'])
			      {
					  
					  row = document.createElement('tr')
					  
					  td = document.createElement('td')
					  td.innerHTML = programms[i]['Start']
					  row.appendChild(td)
					  
					  
					  td = document.createElement('td')
					  td.innerHTML = programms[i]['Title']
					  row.appendChild(td)
					  
					  td = document.createElement('td')
					  td.innerHTML = programms[i]['Name']
					  row.appendChild(td)
					  
					  td = document.createElement('td')
					  td.innerHTML = programms[i]['Info']
					  row.appendChild(td)
					  
					  
					  table.appendChild(row)
			      }			  	
				
		    }
            
            

			
		});

	});
	
	


		
});
