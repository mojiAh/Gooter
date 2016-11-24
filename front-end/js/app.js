
var app= angular.module('myApp',[]);

app.controller('mainController',function ($scope) {
   $scope.posts= [];
   $scope.newPost= {created_by: '', text: '', created_at: '' };

   $scope.post= function () {
        $scope.newPost.created_at= Date.now();
        console.log($scope.newPost);
        $scope.posts.push($scope.newPost);
       console.log($scope.posts);
        $scope.newPost= {Created_by: '', text: '', Created_at: '' };
    };
});

app.controller('authController', function ($scope) {
    $scope.user= {username: '', password: ''};
    $scope.error_message= '';
    
    $scope.login=function () {
       $scope.error_message= 'login for user: '+ $scope.user.username;
    }
    
    $scope.register= function () {
        $scope.error_message= 'Register for user: '+ $scope.user.username;
    }

});

