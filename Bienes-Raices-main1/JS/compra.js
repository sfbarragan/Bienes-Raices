function mostrarCheckboxes() {
    
    let checkboxes = document.getElementById("checkboxes");
 
    if(checkboxes.classList.contains("hide")) {
        checkboxes.classList.remove("hide");
      
      

        
    } else {
        checkboxes.classList.add("hide");
       
       
    }
}

function mostrarPrecios(){
    let precios = document.getElementById("precios");
        if(precios.classList.contains("hidePrecios")) {
            precios.classList.remove("hidePrecios");
        } else {
            precios.classList.add("hidePrecios");
        }

}
// slider
