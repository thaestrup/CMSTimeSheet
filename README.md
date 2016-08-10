# NKKursLister
A directive that renderes the depicts Nykredit bond rates in a chart.
It uses an AngularJS wrapping of Chart.js to accomplise this.
The build is done using the standard Gript setup.

# Instructions
Add the nk-kursliste tag in you HTML where you want the graph to appear. Remember to include the Javascript library also if not included in you project by other means. The fondskode parameter controls which bond is shown. For now it is only mock data.

```html
<div>
    <nk-kursliste fondskode="0950459"></nk-kursliste>
</div>
```
