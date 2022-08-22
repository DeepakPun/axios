var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var xhrButton = document.getElementById('xhr')
var fetchButton = document.getElementById('Fetch')
var jqueryButton = document.getElementById('jquery')
var axiosButton = document.getElementById('axios')
var quotePara = document.getElementById('quote')

xhrButton.addEventListener('click', function () {
  // console.log('You clicked xhr button')
  var XHR = new XMLHttpRequest()
  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      // console.log(XHR.responseText)
      var quote = JSON.parse(XHR.responseText)[0]
      quotePara.innerText = quote
    }
  }
  XHR.open('GET', url)
  XHR.send()
})

fetchButton.addEventListener('click', function () {
  // console.log('You clicked Fetch button')
  fetch(url)
    .then(function (req) {
      // console.log(req)
      req.json().then(function (data) {
        // console.log(data[0])
        quotePara.innerText = data[0]
      })
    })
    .catch(function () {
    alert('ERROR')
  })
})

// This can be done using addEventListener but it's best to use the jquery way 
$('#jquery').click(function () {
  $.getJSON(url)
    .done(function (data) {
    // console.log(res)
     $('#quote').text(data[0])
  })
})

axiosButton.addEventListener('click', function () {
  // console.log('You clicked axios button')
  axios.get(url)
    .then(function (res) {
    // console.log(res)
      quotePara.innerText = res.data[0]
    })
    .catch(function (err) {
    console.log('Error', err)
  })
})