$(document).ready(function(){
    $('#submit').click(function(){
      var total = math.eval($('#total').val());
      var subtotal = math.eval($("#subtotal").val());
      var item = math.eval($("#item").val());
      var pay = item / subtotal * total;

      $("#item_amount").html(pay);
    });
});
