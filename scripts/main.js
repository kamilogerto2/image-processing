'use strict';
requirejs(['modules/imageCanvasOperations', 'modules/canvasOperations', 'modules/histogram'], function (imageCanvasOperations, canvasOperations, histogram) {
    $(function () {
        var canvasOperationsObject = new canvasOperations(),
            imageOperationsObject = new imageCanvasOperations(),
            histogramObject = new histogram(),
            image = canvasOperationsObject.readImage('image_source');

        (function () {
            //binary image
            convertImageAndShowInHTMLWithHistogarm(
                'canv',
                '#container',
                imageOperationsObject.convertToBinary,
                histogramObject.getHistogramDataFromBinaryImage
            );
            //only red canal in image
            convertImageAndShowInHTMLWithHistogarm(
                'canvRed',
                '#containerRed',
                imageOperationsObject.convertToRCanal,
                histogramObject.getHistogramDataFromRedCanal
            );
            //only green canal in image
            convertImageAndShowInHTMLWithHistogarm(
                'canvGreen',
                '#containerGreen',
                imageOperationsObject.convertToGCanal,
                histogramObject.getHistogramDataFromGreenCanal
            );
            //only blue canal in image
            convertImageAndShowInHTMLWithHistogarm(
                'canvBlue',
                '#containerBlue',
                imageOperationsObject.convertToBCanal,
                histogramObject.getHistogramDataFromBlueCanal
            );
        })();


        function convertImageAndShowInHTMLWithHistogarm (canvId, containerId, convertToFunction, getHistogramDataFunction) {
            var canvasContext = canvasOperationsObject.getCanvasContext(canvId);

            canvasContext.drawImage(image, 0, 0);
            var pixelsContext = convertToFunction(
                canvasOperationsObject.getCanvasPixelContext(canvasContext, 400, 400)
            );

            canvasOperationsObject.putImage(canvasContext, pixelsContext);
            var histogramData = getHistogramDataFunction(pixelsContext.data);
            histogramObject.draw($(containerId), histogramData, 160000);
        }
    });
});


