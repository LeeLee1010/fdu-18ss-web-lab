    window.onload = function () {
    var img = document.querySelector("#featured img");
    var text = document.querySelector("#featured figcaption");
    document.getElementById("thumbnails").addEventListener("click",
        function (e) {
            var click = e.target;
            img.src = (click.src).replace("small", "medium");;
            img.title = click.title;
            text.innerHTML  = click.title.toString();

        });
        
        text.style.transition = "opacity , 2s";
        document.getElementById("featured").onmouseover=function (){
            text.style.opacity=0.8;     
        }
        document.getElementById("featured").onmouseout=function (){
            text.style.opacity=0;
        }
        

};
