'use strict';

define('modules/imageCanvasOperations', function () {
    return function () {

        this.convertToBinary = function (imageContext) {

            var i, grayscale, n, imagePixels = imageContext.data;
            for (i = 0, n = imagePixels.length; i < n; i += 4) {
                grayscale = imagePixels[i] * 0.3
                    + imagePixels[i + 1] * 0.59
                    + imagePixels[i + 2] * 0.11;
                imagePixels[i] = grayscale; // czerwony
                imagePixels[i + 1] = grayscale; // zielony
                imagePixels[i + 2] = grayscale; // niebieski
            }

            return imageContext;
        };

        this.convertToRCanal = function (imageContext) {

            var i, n, imagePixels = imageContext.data;

            for (i = 0, n = imagePixels.length; i < n; i += 4) {
                imagePixels[i + 1] = 0; // zielony
                imagePixels[i + 2] = 0; // niebieski
            }

            return imageContext;
        };

        this.convertToGCanal = function (imageContext) {

            var i, n, imagePixels = imageContext.data;

            for (i = 0, n = imagePixels.length; i < n; i += 4) {
                imagePixels[i] = 0; // czerwony
                imagePixels[i + 2] = 0; // niebieski
            }

            return imageContext;
        };

        this.convertToBCanal = function (imageContext) {
            var i, n, imagePixels = imageContext.data;

            for (i = 0, n = imagePixels.length; i < n; i += 4) {
                imagePixels[i] = 0; // czerwony
                imagePixels[i + 1] = 0; // zielony
            }

            return imageContext;
        };

    };
});

