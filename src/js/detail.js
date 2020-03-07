$(function () {
    $(".tp").imagezoomsl({
      zoomrange: [1, 12],
      zoomstart: 4,
      innerzoom: true,
      magnifierborder: "none"
    });
  });  
  const goodsInfo = JSON.parse(localStorage.getItem('goods_info'))
  console.log(goodsInfo)
  
  let str=''
  let img_z=''
  img_z=`<img src="${goodsInfo.src}" class="tp">`
  str=`<p class="xq1">${goodsInfo.name}</p>
      <p class="xq2">${goodsInfo.name_}</p>
      <p class="xq3">价格：<span>${goodsInfo.per}</span></p>
      <p class="xq4">购买数量：<span>1</span></p>
      <p class="xq5"><a href="./cart.html"></a><span class="gwc">加入购物车</span><span class="xzgm">现在购买</span></p>`
  // console.log(str)
  $('.xq-nr').html(str)
  $('.xq-img').html(img_z)