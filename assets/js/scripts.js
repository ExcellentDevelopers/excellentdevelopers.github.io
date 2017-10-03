/****************** Modal **********************/
$(document).ready(function() {
    $("#myModal").on("hidden.bs.modal",function() {
        $("#iframeYoutube").attr("src","#");
    });

    $("#open-introduction-video").on('click', function() {
        var iframe = document.getElementById("iframeYoutube");
        iframe.src="https://www.youtube.com/embed/nc3ou27HOdQ?autoplay=1";

        $("#myModal").modal("show");
    });

    $("#signup-popup-button").on('click', function() {
        // In order to be able to reopen the subscribe popup after is first time closed
        document.cookie = "MCPopupClosed=no; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "MCPopupSubscribed=no; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        
        require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us16.list-manage.com","uuid":"829e1db7cd28c56d108eb426f","lid":"aaecaa4b78"}) });
    });
});
