function run (){
    let htmlCode = document.getElementById("html-code");

    let cssCode = document.getElementById("css-code");
    let javaCode = document.getElementById("java-code");
    let output = document.getElementById("OUTPUT");
    output.contentDocument.body.innerHTML = htmlCode.value
    + "<style>"+ cssCode.value + "</style>";
    output.contentwindow.eval(javaCode.value); 

}