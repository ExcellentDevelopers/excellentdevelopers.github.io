/****************** Modal **********************/
$(document).ready(function(){
    $("#myModal").on("hidden.bs.modal",function(){
        $("#iframeYoutube").attr("src","#");
    })

    if( $('mce-success-response').css('display') == 'block' ) {
        $('#mc-field-group').css("display", "none");
        $('#buttonSubscription').css("display", "none");
    } else {
        console.log('It did not equal block');
    }
})

function changeVideo(vId){
    var iframe = document.getElementById("iframeYoutube");
    iframe.src="https://www.youtube.com/embed/"+vId+"?autoplay=1";

    $("#myModal").modal("show");
}

/********************* Sent Subscription ********************/

function sentCheck() {
    var sentMessage = '<h3>Thanks, we will contact you personally very soon</h3>';

    $('.subscribe-section').empty();
    $('.subscribe-section').append(sentMessage);
}


/********************* Mailchimp ********************/