'use strict';
requirejs(['modules/imageCanvasOperations', 'modules/canvasOperations', 'modules/histogram'], function (imageCanvasOperations, canvasOperations, histogram) {
    $(function () {
        var canvasOperationsObject = new canvasOperations(),
            imageOperationsObject = new imageCanvasOperations(),
            histogramObject = new histogram(),
            image = canvasOperationsObject.readImage('image_source');

       //binary image
        (function () {
            var canvasContext = canvasOperationsObject.getCanvasContext('canv');

            canvasContext.drawImage(image, 0, 0);
            var pixelsContext = imageOperationsObject.convertToBinary(
                canvasOperationsObject.getCanvasPixelContext(canvasContext, 400, 400)
            );

            canvasOperationsObject.putImage(canvasContext, pixelsContext);
            var histogramData = histogramObject.getHistogramDataFromBinaryImage(pixelsContext.data);
            histogramObject.draw($('#container'), histogramData, 160000);
        })();

        //red image
        (function () {
            var canvasContext = canvasOperationsObject.getCanvasContext('canvRed');

            canvasContext.drawImage(image, 0, 0);
            var pixelsContext = imageOperationsObject.convertToRCanal(
                canvasOperationsObject.getCanvasPixelContext(canvasContext, 400, 400)
            );

            canvasOperationsObject.putImage(canvasContext, pixelsContext);
            var histogramData = histogramObject.getHistogramDataFromRedCanal(pixelsContext.data);
            histogramObject.draw($('#containerRed'), histogramData, 160000);

        })();

        //green image
        (function () {
            var canvasContext = canvasOperationsObject.getCanvasContext('canvGreen');

            canvasContext.drawImage(image, 0, 0);
            var pixelsContext = imageOperationsObject.convertToGCanal(
                canvasOperationsObject.getCanvasPixelContext(canvasContext, 400, 400)
            );

            canvasOperationsObject.putImage(canvasContext, pixelsContext);
            var histogramData = histogramObject.getHistogramDataFromGreenCanal(pixelsContext.data);
            histogramObject.draw($('#containerGreen'), histogramData, 160000);
        })();

        //blue image
        (function () {
            var canvasContext = canvasOperationsObject.getCanvasContext('canvBlue');

            canvasContext.drawImage(image, 0, 0);
            var pixelsContext = imageOperationsObject.convertToBCanal(
                canvasOperationsObject.getCanvasPixelContext(canvasContext, 400, 400)
            );

            canvasOperationsObject.putImage(canvasContext, pixelsContext);
            var histogramData = histogramObject.getHistogramDataFromBlueCanal(pixelsContext.data);
            histogramObject.draw($('#containerBlue'), histogramData, 160000);
        })();
    });
});


