$.ajax({
    url: '/zxlogin',
    type: 'post',
    data: {
      username: $('.nm').value,
      password: $('.pw').value
    },
    dataType: 'json',
    success: function (res) {
      console.log(res)
    }
  })