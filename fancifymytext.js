function makeBigger()
{
    var txt=document.getElementById("textArea");
    if(txt.style.fontSize<"24pt")
    {
        txt.style.fontSize="24pt";
        alert("Hello, world!");
    } else 
    {
        txt.style.fontSize="10pt";
    }
    
}

function makeFancy()
{
    var txt=document.getElementById("textArea");
    if(document.getElementById("fancyButton").checked==true){
        document.getElementById("boringButton").checked=false;
        txt.style.fontWeight="bold";
        txt.style.color="pink";
        txt.style.textDecorationLine="underline";
        alert("Fancy text");
    }
}

function makeBoring()
{
    var txt=document.getElementById("textArea");
    if(document.getElementById("boringButton").checked==true){
        document.getElementById("fancyButton").checked=false;
        txt.style.fontWeight="normal";
        txt.style.color="black";
        txt.style.textDecoration="none";
        alert("Boring Text");
    }

}

function makeMoo()
{
    var txt=document.getElementById("textArea").value;
    txt=txt.toUpperCase();
    var parts = txt.split('.');
    txt = parts.join('Moo.');
    document.getElementById("textArea").value = txt;
    alert("Moo text");    
}