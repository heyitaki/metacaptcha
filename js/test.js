jQuery(document).ready(function (){ 
 jQuery("#comment-form").submit(function (){
        if (typeof metacaptcha_enable !== "undefined"){
            var content = jQuery("#edit-comment-body-und-0-value").val();
            alert(content);
        //     // metaCAPTCHA.execute(content);
            metacaptcha_enable = undefined;
            return false;
        }
        return true;
    });
});