var mySwiper = new Swiper('.swiper-container', {
  loop: true, // 循环模式选项
  autoplay: {
    play: 1000
  },
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
  }
})
getList()
function getList() {
  $.ajax({
    url: "../lib/01shuju.json",
    dataType: 'json',
    success: function (res) {
      console.log(res)
      let str = "";
      res.forEach(item => {
        str += `<li> ${item.name} </li>`
      });
      $('.nav-ul').html(str).on({
        mouseenter: () => $('.bta').stop().slideDown(),
        mouseleave: () => $('.bta').stop().slideUp()
      }).children('li').on('mouseover', function () {
        const index = $(this).index()
        const list = res[index].list
        // console.log(list)
        let str = ''
        list.forEach(item => {
          str += `
          <li>
            <img src="${item.list_src}">
            <span class="btas1">${item.list_name}</span>
            <span class="bats">${item.list_price}</span>
          </li>`
        })
        $('.bta>ul').html(str)
      })
      $('.bta').on({
        mouseover: function () { $(this).finish().show() },
        mouseout: function () { $(this).finish().slideUp() }
      })
    }
  })
}
getList2()
function getList2() {
  $.ajax({
    url: "../lib/02shuju.json",
    dataType: 'json',
    success: function (res) {
      console.log(res)
      let str = "";
      res.forEach(item => {
        str += `<li><p>${item.name}</p>
        <p class="nav-list-p"><span>${item.name_1}</span>
          <span>${item.name_2}</span><span>${item.name_3}</span>
          </p></li>`
      });
      $('.nav-list>ul').html(str).on({
        mouseenter: () => $('.lb-list').stop().slideDown(),
        mouseleave: () => $('.lb-list').stop().slideUp()
      }).children('li').on('mouseover', function () {
          const index = $(this).index()
          const list = res[index].list
          // console.log(list)
          let str = ''
          list.forEach(item => {
            str += `
              <div class="list1">
              <img src="${item.list_src}" alt="">
              <span>${item.list_name}</span>
            </div>`
          })
          $('.lb-list').html(str)
        })
      $('.lb-list').on({
        mouseover: function () { $(this).finish().show() },
        mouseout: function () { $(this).finish().slideUp() }
      })
    }
  })
}