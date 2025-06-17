(function () {
  'use strict';

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$http', 'UserService'];
  function SignUpController($http, UserService) {
    var signupCtrl = this;
    signupCtrl.user = {};
    signupCtrl.success = false;
    signupCtrl.error = false;

    signupCtrl.submit = function () {
      var shortName = signupCtrl.user.favorite;
      var category = shortName.charAt(0).toUpperCase();
      var number = parseInt(shortName.substring(1)) - 1;
      var url = `https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/${category}/menu_items/${number}.json`;

      $http.get(url).then(function (response) {
        if (response.data) {
          UserService.saveUser(signupCtrl.user, response.data);
          signupCtrl.success = true;
          signupCtrl.error = false;
        } else {
          signupCtrl.success = false;
          signupCtrl.error = true;
        }
      });
    };
  }
})();