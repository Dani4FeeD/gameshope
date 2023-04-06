$('document').ready(function(){
    loadGoods();
});

function loadGoods() {
    //загружаю товары на страницу
    $.getJSON('../json/console.json', function (data) {
        console.log(data);
        var out = '';
        
        
            out+='<tr>'

            let i=0
            
            for (var key in data){
                
                out+='<td>'
                
                out+='<div class="product-inner">'
                out+='<div class="product-wrap">'
                out+='<img src="'+data[key].image+'" width="400px" height="300px">'
                out+='<div class="actions">'
                out+='<a href="" class="add-to-cart"></a>'
                
                out+='<a href="" class="wishlist"></a>'
                out+='</div>'
                out+='</div>'
                out+='<div class="product-info">'
                out+='<h3 class="product-title"><a href="">'+data[key]['name']+'</a></h3>'
                out+='<span class="price">₽'+data[key]['cost']+'</span>'
                out+='</div>'
                out+='<td>'
                
                if(i==2){
                    i=0
                    out+='<tr>'
                }else{
                    i++
                }
            }
            
            out+='<tr>'
        
        
        
        
        $('#goods').html(out);
    })
}