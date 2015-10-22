'use strict';
define('modules/histogram', function () {
    return function () {
     
        this.draw = function (element, histogramData, resolution) {
            
            element.highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Image histogram'
                },
                subtitle: {
                    text: 'Source: orginal image'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'average number for pixels'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
                },
                series: [{
                    name: 'Population',
                    data: [
                        ['0-10', histogramData[0] / resolution],
                        ['10-20', histogramData[1] / resolution],
                        ['20-30', histogramData[2] / resolution],
                        ['30-40', histogramData[3] / resolution],
                        ['40-50', histogramData[4] / resolution],
                        ['50-60', histogramData[5] / resolution],
                        ['60-70', histogramData[6] / resolution],
                        ['70-80', histogramData[7] / resolution],
                        ['80-90', histogramData[8] / resolution],
                        ['90-100', histogramData[9] / resolution],
                        ['100-110', histogramData[10] / resolution],
                        ['110-120', histogramData[11] / resolution],
                        ['120-130', histogramData[12] / resolution],
                        ['130-140', histogramData[13] / resolution],
                        ['140-150', histogramData[14] / resolution],
                        ['150-160', histogramData[15] / resolution],
                        ['160-170', histogramData[16] / resolution],
                        ['170-180', histogramData[17] / resolution],
                        ['180-190', histogramData[18] / resolution],
                        ['190-200', histogramData[19] / resolution],
                        ['200-210', histogramData[20] / resolution],
                        ['210-220', histogramData[21] / resolution],
                        ['220-230', histogramData[22] / resolution],
                        ['230-240', histogramData[23] / resolution],
                        ['240-250', histogramData[24] / resolution],
                        ['250-255', histogramData[25] / resolution]
                    ],
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.3f}', // one decimal
                        y: 10, // 10 pixels down from the top
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            });
        };
     
        this.getHistogramDataFromBinaryImage = function (imagePixels) {
            var i, n, histogramData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            for (i = 0, n = imagePixels.length; i < n; i += 4) {
                histogramData[Math.floor(imagePixels[i] / 10)] = histogramData[Math.floor(imagePixels[i] / 10)] + 1;
            }
            return histogramData;
        };
     
        this.getHistogramDataFromRedCanal = function (imagePixels) {
            var i, n, histogramData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (i = 0, n = imagePixels.length; i < n; i += 4) {
                histogramData[Math.floor(imagePixels[i] / 10)] = histogramData[Math.floor(imagePixels[i] / 10)] + 1;
            }
            return histogramData;
        };
     
        this.getHistogramDataFromGreenCanal = function (imagePixels) {
            var i, n, histogramData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (i = 0, n = imagePixels.length; i < n; i += 4) {
                histogramData[Math.floor(imagePixels[i + 1] / 10)] = histogramData[Math.floor(imagePixels[i + 1] / 10)] + 1;
            }
            return histogramData;
        };
     
        this.getHistogramDataFromBlueCanal = function (imagePixels) {
            var i, n, histogramData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (i = 0, n = imagePixels.length; i < n; i += 4) {
                histogramData[Math.floor(imagePixels[i + 2] / 10)] = histogramData[Math.floor(imagePixels[i + 2] / 10)] + 1;
            }
            return histogramData;
        };
    };
});
    
