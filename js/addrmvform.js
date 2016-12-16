$(document).ready(function(){
    $("#add").click(function (e){
        $('#jury').append('<div>'
        +'<label data-required="true" class="form-label" style="padding-top:15px;">Un membre supplémentaire</label><input type="button" id="delete" value="Supprimer"/>'
        +'<div  class="flexform">'
        +'<input id="juryfirstname" value="" class="form-input required" autofocus="autofocus" required="required" type="text" name="juryfirstname" placeholder="Prénom"/>'
        +'<input id="juryname" value="" class="form-input required" autofocus="autofocus" required="required" type="text" name="juryname" placeholder="Nom"/>'
        +'<input id="juryprof" value="" class="form-input required" autofocus="autofocus" required="required" type="text" name="juryprof" placeholder="Profession"/>'
        +'<input id="juryfct" value="" class="form-input required" autofocus="autofocus" required="required" type="text" name="juryfct" placeholder="Examinateur/Rapporteur..."/>'
        +'</div>'
        +'<div>'
        +'<input id="jurylieu" value="" class="form-input required" autofocus="autofocus" required="required" type="text" name="jurylieu" placeholder="Université ou autre"/>'
        +'</div>'
        +'</div>'
    );
});
$('body').on('click','#delete',function (e){
    $(this).parent('div').remove();
});
});
