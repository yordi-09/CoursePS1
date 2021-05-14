$(document).ready(function () {
    console.log("Hola");

    //var theForm = document.getElementById('theForm');

    //console.log(theForm);

    var form = $('#theForm');

    console.log("Form: " + form);
    form.hide();


    //var button = document.getElementById('buyButton');
    //button.addEventListener('click', function () {
    //    console.log('buy item');
    //})

    var button = $("#buyButton");
    button.on('click', function () {
        console.log('buy item');
    })

    //var productInfo = document.getElementsByClassName('product-props');
    //console.log(productInfo);
    //var listItems = productInfo.item[0].children;
    //console.log(lastItems);

    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("Press on " + $(this).text());
    });

    var $logginToggle = $("#logginToggle");
    var $popupForm = $(".popup-form");

    $logginToggle.on("click", function () {
        $popupForm.slideToggle(1000);
    })
})