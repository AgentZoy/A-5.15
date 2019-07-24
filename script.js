const render = data => {
    const tale = data.text;
    const $result = $(".result");

    
    for(let i= 0; i < 5; i++){
        tale[i] += '. ';
    }
    tale[5] = tale[5].charAt(0).toUpperCase() + tale[5].slice(1) + ' ';
    tale[6] = tale[6].charAt(0).toUpperCase() + tale[6].slice(1) + ' ';
    tale[7] = tale[7].charAt(0).toUpperCase() + tale[7].slice(1) + '!!';

   
    $result.html(tale);

    $(document).ready(function() {
        $(".btn").click(function() {
            
            const vars = [];
            
            for (let i = 0; i < 6; i++) {
                vars[i] = $(`.var${i+1}`).val();
            }
            const speach = $(".speach").val();
            
            
            const newTale = [];
            for(let i = 0; i < 7; i++) {
                newTale[i] = tale[i].replace(/{var(\d+)}/g, (_, n) => vars[+n-1])
                };
            newTale[7] = tale[7].replace('{speach}', speach);
            

            
            $result.html(newTale);
        });
    });
}

$.getJSON(
    'https://api.myjson.com/bins/jcmhn',   
    function(data) {                       
    console.log(data);                     
    console.log(data.text[0]);
    render(data);
    }
);

function removeForm() {
    var elem = document.getElementById('form');
    elem.parentNode.removeChild(elem);
    return false;
}


