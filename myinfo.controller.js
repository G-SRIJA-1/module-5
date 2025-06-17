(function () {
  'use strict';

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserService'];
  function MyInfoController(UserService) {
    var myinfoCtrl = this;
    myinfoCtrl.user = UserService.getUser();
    myinfoCtrl.favorite = UserService.getFavorite();
  }
})();