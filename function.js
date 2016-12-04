
var toppinglist = [
                  {type:'mushroom',price:5}, 
                  {type:'pepperoni',price:6},
                  {type:'pepper',price:3},
                  {type:'chicken',price:5},
                  {type:'bacon',price:3},
                  {type:'pineapple',price:2},
                  {type:'chess',price:4},
                  {type:'beef',price:5},
                  {type:'olive',price:3}
                  ];

function showinfo(){

   
    var topping = $('#topping').val().split(",");
    var s = "<p style = 'margin-bottom:10px'>You ordered the following toppings: </p>";
    
    var count = 0;
    for(i = 0 ; i <topping.length;i++){
         var price = findprice(topping[i].trim().toLowerCase());
         if(price === "unknown"){
             s += "<p style = 'margin-bottom:10px'>Unknown topping !</p>";
         }else{
            s += "<p style = 'margin-bottom:10px'>" + topping[i] + ', Price - ' + price + '</p>';
            count += price;
         }
         
     }
     s += '<p> Total Price: '+ count+ '</p>'
    $('#orderinfo').html(s);
    console.log(topping[0]);
 $('#prepareorder').show();
}

function findprice(type){
    for(j = 0 ; j <toppinglist.length;j++){
        if(toppinglist[j].type === type){
            return toppinglist[j].price; 
        }
    }
    return "unknown";
}

function toggle(){
    document.getElementById('prepareorder').style.display='none';
    document.getElementById('thank').style.display='block';
}

function close(){
    $("#thank").removeClass("in");
    $(".modal-backdrop").remove();
    $("#thank").hide();
}