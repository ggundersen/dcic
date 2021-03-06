var mod = angular.module("carouselMod", []);

mod.controller("carouselCtrl", ["$scope", function($scope) {
    $scope.slides = [
        {
            index: 0,
            image: '/images/carousel/bubble-graph.png',
            title: 'Big Data Science',
            caption: 'Learn various methods of analysis of LINCS data and other relevant Big Data with the DCIC\'s MOOC on Coursera.',
            link: 'https://www.coursera.org/course/bd2klincs',
            target: '_blank'
        },
        {
            index: 1,
            image: '/images/carousel/summer-fellows-2015.png',
            title: 'Summer Research',
            caption: 'BD2K-LINCS DCIC summer fellows complete a ten-week intensive research experience within our Center.',
            link: '#/summer-fellows-2015'
        }
    ];

    $(function() {
       $('#carousel').carousel({
           interval: 5000
       });
    });
}]);
