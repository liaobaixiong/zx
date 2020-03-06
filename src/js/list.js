var flag = true;
var sz = []

getList5()
function getList5() {

    $.ajax({
        url: "../lib/05shuju.json",
        dataType: 'json',
        success: function (res) {
            console.log(res)
            sz = res;
            let str = "";
            res.forEach(item => {
                str += `<li data-id="${item.id}">
                <img src="${item.src_1}">
                <p class="lb-p1">${item.name}</p>
                <p class="lb-p2">${item.name_}</p>
                <p class="lb-p3">
                <span class="p31">￥${item.per}</span>
                <span class="p32">${item.per_1}</span>
                <a href="./detail.html">
                    <span class="qg fs14">现在抢购</span>
                    </a></p>
             </li>`
            });
            $('.splb>ul').html(str)
        }
    })
}
var btn = document.querySelector('.jgpx');
btn.onclick = function () {
    flag = !flag;
    console.log(flag)
    sz.sort(function (a, b) {
        if (flag === true) {
            return a.per - b.per
        } else {
            return b.per - a.per
        }
    })
    console.log(sz)
    // getList5(sz)
    let str = "";
    sz.forEach(item => {
        str += `<li data-id="${item.id}">
                <img src="${item.src_1}">
                <p class="lb-p1">${item.name}</p>
                <p class="lb-p2">${item.name_}</p>
                <p class="lb-p3">
                <span class="p31">￥${item.per}</span>
                <span class="p32">${item.per_1}</span>
                <a href="./detail.html">
                    <span class="qg fs14">现在抢购</span>
                    </a></p>
             </li>`
    });
    $('.splb>ul').html(str)
}

$('.splb>ul').on('click','li',function(){
    // console.log(this)
    const id=$(this).data('id')
    
    let data={}

    for(let i=0;i<sz.length;i++){
        if(sz[i].id===id){
            data=sz[i]
            break;
        }
    }
    // console.log(data)
    localStorage.setItem('goods_info',JSON.stringify(data))
    window.location.href='./detail.html'
})