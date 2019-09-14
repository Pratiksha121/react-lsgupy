import React from 'react';

render () {
let request = new XMLHttpRequest()

request.open('GET', 'https://api.github.com/users', true)
request.onload = function() {
  let data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    console.log(data);
  } else {
    console.log('user id: ');
  }
};
}

request.send()

export default request;