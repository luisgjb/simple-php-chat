$(document).on("ready", function(){
    var mensajes = [];
    setInterval(function () {
        $.ajax({
            method: "POST",
            data: {
                fecha: new Date()
            },
            dataType: "json",
            url: "mensajes.php",
            success: function(res){
                var resLength = res.length,
                    mensaje = "",
                    chat = document.getElementById('chats');
                for(var i = 0; i < resLength; i++){
                    mensaje = ''+
                        '<div class="media msg">'+
                        '<a class="pull-left" href="#">'+
                        '   <img class="media-object" data-src="holder.js/64x64" alt="64x64" style="width: 32px; height: 32px;" src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABAAEADAREAAhEBAxEB/8QAGwAAAwADAQEAAAAAAAAAAAAABQYHAgMEAQj/xAAwEAACAQMDAwMBCAIDAAAAAAABAgMEBREAEiEGMUETFFFhByIyUnGBkaGx0TOS8f/EABkBAAMBAQEAAAAAAAAAAAAAAAEDBAIABf/EACURAAICAgICAgIDAQAAAAAAAAABAhEDEiExBBNBURQiMmGh8P/aAAwDAQACEQMRAD8AqXVfVD24SUdAR7lQDJIRn08+APnH8a1FWLnOuETO+G6XO50zitqXONu3efxNnB+O4GlZZOL4DjWyM6WtSS209bINihSzj8pHcfzpscsXHYW8bToEi9KLkkNT60T7WdkC5CNjIX+O51N7W3sP9dLUPBhLG0o4DhX/AJxqxO0TNUZEYMhPbA1wDojramlLvTVM0TgDBRyNDsKb+B56W6oe4yexrse4AykgGN/yCPn/ADrLQ2E74Yi1kpqaq4TMSWkkL/3rYpu2cN0uHtKF4oVMcxQN7lnwq5+6q4+SdS5/5clGHhcE6ordfLjc3gEhNSEJECPyV8/d+NTTa6+CiCl22OfS1xt0yXRr5SmeujSMBo2w7BAOQSe/z+mtP9VSR2ykg0iAQlQDjYuATz286vXRA+zPH4vquiaZ4RyfquuYDfR1DUtdDOhwY3Vs/odczQTXpevYyktCoYfmzpLzxO9TEnrT21qutFBWTxmaGP1AhYhWPcY45b/egpKfIxKhXXqG2U9a1ymhndzykkMhR4nB+R+3bWHHjg0nzbMhQWmvtdReaa8yirV8uk+AH3HkZGOedJjKcZayRtxi1aY/2mutU9qilqJ5422bHCIGAI+uq9mI0QapKOz17AU1zZzjBUqFI/Y6XkzuHYdEFU6dtsZzLNK3GO+lflx+zShE2np+z7N26TPxu0Py412HSJ0etK5ACgDOvL2bM7sXes7b05X9FJe7rT0wlhfZucZdyGK7ARznzj6a9fFjrGkizwsuLHk2zxuLX/Mmt7tHRdx+yysuNrl9pdKGUb4mlYGUM2AApJzxyCPIOdNSpKweQ8eXJKeCNRX+E7ts8uxVO993EMJJ27uwYjtoNIkHOyzzQwCGRicrg4HBPnGl7X0FI656uop6eOpgfLgkja3PB1nY248FM6P6hbqK0tJPgVELbZFX+jrzs2JRlx0KfDDxQFTnP76VoCzqDO33Sqg/A1tWZsnn2kdIxVNuqrsk00cS4lqaaLB9RhwHXPCtzz8jVOCck6LV5kn4/wCPNWl0/ohdYNzpT0KVCxEj/lYFmbx4AGr0l2xUcsljeNdPscunegbrVK1TPH6CZySzje2RknjPHkanyZ1dI1DE+2FbgsdKgpYVKxwISzA8gkcDRg+LOkqfAPt7e4gWB3GSpJz4Jz30u+Qjd9m9xip+oqy1hAgmhVxzwWUc/wAj/Gs5o3BMRk7KZII/UzvViPGpXqLs2btinc54+mgl9gs0TxR1lLVUpkiYSRlTu+vb+9ahLWV2cmfMPU1WouB9FvTdJSrgLgqQf9jXqY6Y3sdKGbqmltypItW9DMuY3ljUMwPOQe41NkjC/wCyjG50A6yd46aQTsyuOHVxz8A586MFaoE+HZyWy5xQKwjGWby3OToqLvkXt9BW3T3GzXGmvwgIpfUMfq9wHAB2t8d8fvovVpwZiTUnRb6C8QXy2x1tHWJGr91wNyHyp1BkxuDpsU7CNT6MMvoyLn02Ixg889tCfEnF/AH9GaTR7i0SRkdmOPGhsu0dZLrn0BS3X7VUR4j7Cti95KU7ZX8YHxklf+2qIZn6+H0Pwx2dDb1lTsixSNOtLSwrg5HCKMDjU8cjcqZ6WqjHgnVFZ+mbxHUV9xuckcbykLDAMmZAcbnPjJ+NVOcoPWJ5WbLboF9dU1iS50k1jIWnjg9MRquAWB4z89++mYZNL9jsfKtFA6ColXo6KkrVknklZpapXi4DMT93n4A5PzqbO28jkuhbds6rT0jDa+qYJbNIwoKg+nPQyg4VTyGQ+MHnB8a5T9lQlyzny0ijXqxGtcz0z7JDjev5seR9ccar8nxfY9o9jJQvoXqmJ4Eljljk3Y7CMj/3vrz5YpK00Y6A8F7udDeRCaRDSOHjjLqVaRweAG7Afr8E/GtRwrXhleHJjiqB3UldVdTv7S2xxmFSpdpDgyLkB9ufGDn66OPWErfZnN5N/rAD0/2czpOqJU7oYWBYjgAEnAA8nGP51p5rb4ItGw7SdB0NKnpyQxSumcStyxJ5J/oaTKU2+GbjcVSGRLdWMZIIEB/DtYg4AwQfpwdcscpOlyzkn8B6xWGWjk9zXSCWfkr5IJ7kn516Hi+J63vPs3CFcs//2Q==">' +
                        '</a>'+
                        '<div class="media-body">'+
                        '   <small class="pull-right time"><i class="fa fa-clock-o"></i> '+res[i].fecha+'</small>'+
                        '   <h5 class="media-heading">'+res[i].usuario+'</h5>'+
                        '   <small class="col-lg-10">'+res[i].mensaje+'</small>'+
                        '</div>'+
                        '</div>'+
                        '';
                    chat.appendChild(document.createRange().createContextualFragment(mensaje));

                }
            },
            error: function(res){
                console.log(res);
            },
            fail: function(res){
                console.log(res);
            }
        })
    },2000);

    document.getElementById('btnEnviar').addEventListener('click', function (e) {
        e.preventDefault();
        var mensaje = document.getElementById('mensaje').value;
        document.getElementById('mensaje').value = '';
        if(mensaje == '') {
            alert('El cuerpo del mensaje se encuentra vacio.');
            return;
        }
        $.ajax({
            method: "POST",
            data: {
                mensaje: mensaje
            },
            dataType: "json",
            url: "enviarMensaje.php?XDEBUG_SESSION_START=PHPSTORM",
            success: function(res){
                console.log(res);
            },
            error: function(res){
                console.log(res);
            },
            fail: function(res){
                console.log(res);
            }
        });
    });
});