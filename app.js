(function() {
  var app = angular.module('gemStore', ['store-products','ngAnimate']);

  app.controller('StoreController', ['$http', function($http) {
    var store = this;

    store.products = [];

    $http.get('products.json').
      success(function(data) {
        store.products = data;
      }).
      error(function(data) {
        console.log('An error occurred:' + data);
      });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};
    this.active = false;
    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    }
  });
})();
