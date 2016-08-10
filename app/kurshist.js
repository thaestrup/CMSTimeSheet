(function(module) {
try {
  module = angular.module('NKKursLister');
} catch (e) {
  module = angular.module('NKKursLister', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('kurshist.html',
    '<!DOCTYPE html><h1>Kurshistorik for {{bondname}}</h1><div><canvas class="chart chart-line" chart-data="data" chart-labels="labels" chart-series="series" chart-click="onClick"></canvas></div>');
}]);
})();
