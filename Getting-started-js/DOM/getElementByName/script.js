
function collectData(){
    const languageProficiencyEls = document.getElementsByName("languageProficiency");

    console.log(languageProficiencyEls);
    // loop thorugh the nodelist to find the selected radio button
    
    for(let i=0; i<languageProficiencyEls.length; i++){
        if(languageProficiencyEls[i].checked){
            console.log(`selected language is: ${languageProficiencyEls[i].value}`);
        }
    }
    //log all elemnts with email:
    const emailEl = document.getElementsByName("email");
    console.log(emailEl);
}