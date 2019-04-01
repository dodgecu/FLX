function XHR() {
  this.request = new XMLHttpRequest();
}

XHR.prototype = {
  get: function(reqUrl, successCall) {
    this.request.open("GET", reqUrl, true);
    this.request.onload = () => {
      if (this.request.status === 200) {
        successCall(null, JSON.parse(this.request.responseText));
      } else {
        successCall(`Error ${this.request.status}`);
      }
    };
    this.request.send();
  },

  post: function(url, data, successCall) {
    this.request.open("POST", url, true);
    this.request.setRequestHeader("Content-type", "application/json");
    this.request.onload = () => successCall(null, this.request.responseText);
    this.request.send(JSON.stringify(data));
  },

  put: function(url, data, successCall) {
    this.request.open("PUT", url, true);
    this.request.setRequestHeader("Content-type", "application/json");
    this.request.onload = () => successCall(null, this.request.responseText);
    this.request.send(JSON.stringify(data));
  },

  delete: function(url, successCall) {
    this.request.open("DELETE", url, true);

    this.request.onload = () => {
      if (this.request.status === 200) {
        successCall(null, "Post deleted!");
      } else {
        successCall(`Error ${this.request.status}`);
      }
    };

    this.request.send();
  }
};
