window.onload = ()=> {

    const input = document.getElementById("filter-input");
    input.oninput = ()=> {

        const keyword = input.value.toLowerCase();
        const label = document.getElementsByTagName("label");
        for(let el of label){
           const text = el.innerHTML.toLowerCase();
           const matched = text.indexOf(keyword);
           if(matched != -1){
                el.parentElement.style.display = "flex";
           }
           else {
                el.parentElement.style.display = "none";
           }
        }
    }

    // Delete list
    const dleteIcon = document.getElementsByTagName("i");
    for(let delIcon of dleteIcon){
        delIcon.onclick = (e)=> {
            const currentIcon = e.target;
            currentIcon.parentElement.remove();
        }
    }

}