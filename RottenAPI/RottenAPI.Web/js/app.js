angular.module("rottenApi", [])
    .service("movieService", function ($http) {
        return {
            getMovies: function () {
                return $http.jsonp("http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=frp6quchv3mhrwpmtb9sq7sy&callback=JSON_CALLBACK");
            }
        }
    })
    .controller("indexController", function ($scope, movieService) {
        movieService.getMovies().success(function (data) {
            $scope.movies = data;
        });
    })