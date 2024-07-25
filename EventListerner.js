function AttachEventListerner(){
    var count = 0;
    document.getElementById("change")
    .addEventListener('click',function(){
        console.log("Button clicked", ++count)
        document.getElementById("head").textContent = count;
    })
}
AttachEventListerner();