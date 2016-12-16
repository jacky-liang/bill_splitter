$(document).ready(function(){

    $('#submit').click(function(){
      var total = parseFloat($('#total').val());
      var subtotal = parseFloat($("#subtotal").val());
      var item = parseFloat($("#item").val());

      var pay = item / subtotal * total;

      console.log(pay);
      $("#item_amount").html(pay);
    });

});
