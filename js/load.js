
$(document).ready(function () {
  var API = 'http://localhost:3000/';
  function getdata(value) {
    var data = ` <div class="sp__grid__all--threeS"><img src="`+value.image+`"
    style="float: left">
  <div class="sp__detail__select33">
    <div class="sp__detail__name">`+value.name+`</div>
    <div class="product__detail__buy"><i class="fa fa-heart"></i><i class="fa fa-heart"></i><i
        class="fa fa-heart"></i><i class="fa fa-heart"></i><i class="fa fa-heart"></i><span>( 4 lượt mua
        )</span></div>
    <p class="product__detail__text">Tự hào được ghi là năm mà Tiffany & Co là thành lập, bộ sưu tập mang tính
      biểu tượng này cung cấp cho một cái gật đầu với qua trong khi thể hiện một cảm giác hiện đại với kiểu
      dáng
      đẹp đường cong và đường nét mượt mà.</p>
    <div class="sp__detail__price">
      <p class="price__tit">`+value.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+`<sup>$</p>
    </div>
    <div class="sp__detail__button"><button id="btn__buy" data-id="`+ value.id +`">MUA HÀNG</button><button class="icons__select"><i
          class="fa fa-heart"></i></button><button><i class="fa fa-refresh"></i></button></div>
  </div>
</div>`
    return data;
  }
  function loadHome() {
    $.ajax({
      url: API + 'posts',
      method: "GET",
      success: function (data) {
        $.each(data, function (key, value) {
          $('#sp__gridSSS').append(getdata(value));
        })
      }
    })
  }
  loadHome();
  $("body").on("click", "#btn__buy", function () {
    var id = $(this).attr('data-id');
  
    $.ajax({
      url: API + 'posts/' + id,
      method: "GET",
      success: function (data) {
      
        $.ajax({
          url: API + 'add_cards',
          method: "POST",
          data: {
            name: data.name,
            price: data.price,
            image: data.image,
            total: 1
          },
          success: function (data) {
            window.location.href = "store.html";
            localStorage.setItem("data", JSON.stringify(data));
          }
        })
      }
    });
  });
});



