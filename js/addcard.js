$(document).ready(function () {
  var API = 'http://localhost:3000/';
  function getdata(value) {
    var data = ` <tr>
    <td><img src="`+value.image+`"></td>
    <td> `+value.name+`</td>
    <td>`+value.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+`<sup>đ</sup></td>
    <td>`+value.total+`</td>
    <td>`+(value.price * value.total).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+`<sup>d</sup></td>
    <td><i class="fa fa-trash"></i></td>
  </tr>`
    return data;
  }
  function loadHome() {
    $.ajax({
      url: API + 'add_cards',
      method: "GET",
      success: function (data) {
        $.each(data, function (key, value) {
          $('#tbl__pro').append(getdata(value));
        })
      }
    })
  }
  loadHome();

  //thanh toan
  function getdatas(value) {
    var datas = `<tr>
    <td>`+value.name+`</td>
    <td>`+value.total+`</td>
    <td>`+(value.price * value.total).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+`<sup>d</sup></td>
  
  </tr>`
    return datas;
  }
  function loadAccount() {
    var sumMoney = 0;
    $.ajax({
      url: API + 'add_cards',
      method: "GET",
      success: function (datas) {
        $.each(datas, function (key, value) {
          sumMoney += value.price * value.total;// Tính tổng tiền
          $('#id__buy').append(getdatas(value));
        })
        $('#dv_bought').append(getsumMoney(sumMoney));
        
        localStorage.setItem("datas", JSON.stringify(datas));
      }
    })
  }
  loadAccount();

  //tinh tong tien
  function getsumMoney(value) {
    var dataM = ` <label >Tổng tiền:</label>
    <label id ="lb__bought" >`+ value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")  + `<sup>đ</sup></label>`
    return dataM;
  }
});

