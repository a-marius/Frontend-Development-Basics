"use strict";angular.module("dropboxModule",[]).factory("dropboxService",function(o){function t(t,r,e,n){var i={Authorization:"Bearer "+n},u={method:t,url:e?r+e:r};return n&&(u.headers=i),o(u).error(function(o,t,r,e){alert("error")})}function r(o){return t("GET","https://api.dropbox.com/1/account/info","/",o)}function e(o,r){return t("GET","https://api.dropbox.com/1/metadata/auto",o,r)}function n(o,r){return t("GET","https://api.dropbox.com/1/media/auto",o,r)}function i(o,r,e){var n="https://api.dropbox.com/1/oauth2/token?code="+o+"&grant_type=authorization_code&client_id="+r+"&client_secret="+e;return t("POST",n)}function u(o){return"https://www.dropbox.com/1/oauth2/authorize?response_type=code&client_id="+o}return{getLinkForToken:u,getPromiseToken:i,getProfileInfo:r,getFolderInfo:e,downloadFile:n}});