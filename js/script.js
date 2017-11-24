// console.log('script.js says "I\'m here"');
var userdata = $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    // console.log(userdata.responseJSON.results[0].name);
  }
});

var lastname = document.getElementById('lastname');
lastname.innerHTML = userdata.responseJSON.results[0].name.last;
// console.log(userdata.responseJSON.results[0].name.last);
