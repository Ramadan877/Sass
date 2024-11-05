// // npm install angular angularCSS angular-route gulp gulp-sass sass

// var app = angular.module('app', ['ngRoute', 'angularCSS']);

// app.config(function($routeProvider, $cssProvider){

//     angular.extend($cssProvider.defaults, {
//         breakpoints:{
//             mobile: '(max-width: 480px)',
//             tablet: '(min-width: 481px) and (max-width: 1024px)',
//             desktop: '(min-width: 1025px)'
//         }
//     });

//     $routeProvider
//     .when('/home', {
//         templaterUrl: 'pages/home.html',
//         controller: 'HomeController',
//         css: {
//             href:'assets/sass/pages/home.css',
//             preload: true, // Stylesheet wird vorgeladen
//             bustCache: true // Cache busting aktiviert
//         }
//     })
//     .when('/about', {
//         templateUrl: 'pages/about.html',
//         controller: 'AboutController',
//         css: {
//             href:'assets/sass/pages/about.css',
//             preload: true, // Stylesheet wird vorgeladen
//             bustCache: true // Cache busting aktiviert
//         } 
    
//     })
//     .otherwise({
//         redirectTo : '/home'
//     });
// });

// app.controller('MainCtrl', function($scope){
//     $scope.title = "Welcome to the Home Page";
//     $scope.description = "Dies ist ein Beispiel mit Sass un Gulp";
// });

// app.controller('HomeController', function($scope){
//     $scope.message = "Das ist die Startseite";
// })

// app.controller('AboutController', function($scope){
//     $scope.message = "Über uns !";
// });



angular.module('app', [])
.directive('changeColor', function(){
    return {
        restrict: 'A',// A -> Attribute 'h1' , E -> element <div>, C -> class <div class='item'> 
        scope:{},
        link: function(scope, element, attrs){
            element.on('click', function(){
            element.css('color', 'blue')
            console.log('Farbe wurde geändert');
        
        });

        scope.$on('$destory', function(){
            element.css('color', '');
        });
    }
}
});


.directive('toggleClass', function(){
    return{
        restrict: 'C',// A -> Attribute 'h1' , E -> element <div>, C -> class <div class='item'> 
        scope:{
            classToAdd: '@'
        },
        link: function(scope, element, attrs){
            element.on('mouseenter', function(){
                element.addClass(scope.classToAdd);
            });
            element.on('mouseleave', function(){
                element.removeClass(scope.classToAdd);
            })
    }};
});
