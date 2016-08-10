'use strict';

angular.module('NKKursLister', ['chart.js']);
angular.module('NKKursLister')
    .directive('nkKursliste', ['$log', 'kursMockService', function() {
        var controller = ['$scope', '$log', 'kursMockService',
            function($scope, $log, kursservice) {
                $scope.populate = function(kode) {
                    var bonds = ["DK0009504599"];
                    $scope.series = kursservice.getSeries('DK0009504599');
                    $scope.bondname = $scope.series.join();
                    $scope.labels = kursservice.getLabels('DK0009504599');
                    $scope.data = kursservice.getData('DK0009504599');
                };
                $scope.onClick = function(points, evt) {
                    console.log(points, evt);
                };
            }
        ];
        return {
            restrict: 'E',
            scope: {
                fondskode: '='
            },
            controller : controller,
            link : function(scope, elem, attrs, controller) {
              scope.populate(attrs.fondskode);
            },
            templateUrl: 'kurshist.html'
        };
    }]);
