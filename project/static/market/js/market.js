$(document).ready(function(){
    var alltypebtn = document.getElementById("alltypebtn")
    var showsortbtn = document.getElementById("showsortbtn")
    var typediv = document.getElementById("typediv")
    var sortdiv = document.getElementById("sortdiv")

    typediv.style.display = "none"
    sortdiv.style.display = "none"

    alltypebtn.addEventListener("click", function(){
        typediv.style.display = "block"
        sortdiv.style.display = "none"
    })

    showsortbtn.addEventListener("click", function(){
        typediv.style.display = "none"
        sortdiv.style.display = "block"
    })
    typediv.addEventListener("click", function(){
        typediv.style.display = "none"
    })
    sortdiv.addEventListener("click", function(){
        sortdiv.style.display = "none"
    })

    //修改购物车
    var addShoppings = document.getElementsByClassName("addShopping")
    var subShoppings = document.getElementsByClassName("subShopping")

    for (var i = 0; i < addShoppings.length; i++){
        addShopping = addShoppings[i]
        addShopping.addEventListener("click", function(){
            pid = this.getAttribute("ga")
            $.post("/changecart/0/", {"productid": pid}, function(data){
                if (data.status == "success"){
                    document.getElementById(pid).innerHTML = data.data
                }
                else{
                    if (data.data == -1){
//                        $.get("/login/")
                        window.location.href = "http://127.0.0.1:8000/login/"
                    }
                }
            })
        })
    }

    for (var i = 0; i < subShoppings.length; i++){
        subShopping = subShoppings[i]
        subShopping.addEventListener("click", function(){
            pid = this.getAttribute("ga")
            $.post("/changecart/1/", {"productid": pid}, function(data){
                if (data.status == "success"){
                    document.getElementById(pid).innerHTML = data.data
                }
                else{
                    if (data.data == -1){
//                        $.get("/login/")
                        window.location.href = "http://127.0.0.1:8000/login/"
                    }
                }
            })
        })
    }
})