let btn_main =document.getElementById("Main");
let items =document.getElementById("items")
btn_main.addEventListener("click",function()
{
    if(items.style.display == 'none')
    {
    items.style.display='block';
    }
    else
    {
    items.style.display = 'none';
    }
});