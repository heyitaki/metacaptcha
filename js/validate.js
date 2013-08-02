// jQuery(document).ready(function (){ 
//     jQuery("#comment-form input[name=metacaptchaField]").attr("id","metacaptchaField");
//     // jQuery.getScript("//rabbit.cs.pdx.edu/headwinds_new/application/js/metacaptcha_drupal.js", function(data, textStatus, jqxhr) {
//     //     initialize_metacaptcha(Drupal.settings.processPath, Drupal.settings.formID );
//     // });
        
//         // var content = jQuery("#metacaptchaField").val();
//         // alert(content);

//     jQuery("#comment-form").submit(function (){
//         if (typeof metacaptcha_enable !== "undefined"){
//             var content = jQuery("#edit-comment-body-und-0-value").val();
//             alert(content);
//         //     // metaCAPTCHA.execute(content);
//             metacaptcha_enable = undefined;
//             return false;
//         }
//         return true;
//     });
// });

jQuery(document).ready(function (){
    //assign ID to hidden field
    jQuery("#comment-form input[name=metacaptchaField]").attr("id","metacaptchaField");
    //load the external script
    jQuery.getScript("//ox.cs.pdx.edu/services/application/js/metacaptcha_drupal.js", function(data, textStatus, jqxhr) {
        initialize_metacaptcha(Drupal.settings.processPath, Drupal.settings.formID );

    });


    jQuery("#comment-form").submit(function (){
        //click on SAVE button
        if (typeof metacaptcha_enable !== "undefined"){
            var content = jQuery("#edit-comment-body-und-0-value").val();
            metaCAPTCHA.execute(content);
            metacaptcha_enable = undefined;
            return false;
        }
        //click on preview button
        return true;
    });

})



