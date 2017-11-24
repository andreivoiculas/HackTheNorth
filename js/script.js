// console.log('script.js says "I\'m here"');
var userdata = $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    var honorific = document.getElementById('honorific');
    honorific.innerHTML = data.results[0].name.title;
    var firstname = document.getElementById('firstname');
    firstname.innerHTML = data.results[0].name.first;
    var lastname = document.getElementById('lastname');
    lastname.innerHTML = data.results[0].name.last;
    console.log(data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last);
  }
});
