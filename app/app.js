'use strict';

angular.module('KursLister', ['chart.js']);
angular.module('KursLister')
    // Optional configuration
    .config(['ChartJsProvider', function(ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            hover: {
                // Overrides the global setting
                mode: 'label'
            },
            colours: ['#1f69b3', '#418fde'],
            responsive: false,
        });

    }])
    .directive('nkKursliste', ['$log', 'kursMockService', function() {
        var controller = ['$scope', '$log', 'kursMockService',
            function($scope, $log, kursservice) {
                $scope.populate = function(kode) {
                    $scope.series = kursservice.getSeries('DK0009504599');
                    $scope.bondname = $scope.series[0];
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
