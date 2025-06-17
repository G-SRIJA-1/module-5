(function () {
  'use strict';

  angular.module('public')
    .service('UserService', UserService);

  function UserService() {
    var service = this;
    var user = null;
    var favorite = null;

    service.saveUser = function (userInfo, favoriteItem) {
      user = userInfo;
      favorite = favoriteItem;
    };

    service.getUser = function () {
      return user;
    };

    service.getFavorite = function () {
      return favorite;
    };
  }
})();