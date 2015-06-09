(function(){
  var app = angular.module('store-products', []);

  app.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/product-title.html'
    };
  });

  app.directive('productGallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/product-gallery.html',
      controller: function() {
        this.current = 0;
        this.setCurrent = function(newGallery) {
          this.current = newGallery || 0;
        };
        this.isActive = function(index) {
          return index === this.current;
        }
      },
      controllerAs: 'gallery'
    };
  });

  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/product-panels.html',
      controller: function() {
        this.tab = 1;

        this.setTab = function(newValue) {
          this.tab = newValue;
        };

        this.isSet = function(tabName) {
          return this.tab === tabName;
        };
      },
      controllerAs: 'panels'
    };
  });

  app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/product-description.html'
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/product-specs.html'
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "directives/product-reviews.html"
    };
  });
}());
