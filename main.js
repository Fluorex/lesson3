function completeAndRedirect(){
    var form = document.forms['myform'];
    text.innerHTML="Веденные вами данные: <br> Имя: "+ form.elements.login.value + "<br> EMAIL : " + form.elements.email.value + "<br> ПОвідомлення : " + form.elements.messenger.value;
}
