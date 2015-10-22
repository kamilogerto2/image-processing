requirejs(['modules/imageOperations', 'modules/canvasOperations', 'modules/histogram'], function (imageOperations, canvasOperations, histogram) {
    $(function () { 
        var canvasOperationsObject = new canvasOperations();
        var imageOperationsObject = new imageOperations();
        var histogramObject = new histogram();
        var image = canvasOperationsObject.readImage('image_source');

       //binary image
        (function(){
        var canvasContext = canvasOperationsObject.getCanvasContext('canv');  

        canvasContext.drawImage(image, 0, 0);  
        pixelsContext = imageOperationsObject.convertToBinary (
            canvasOperationsObject.getCanvasPixelContext(canvasContext, 400, 400)
        ); 

        canvasOperationsObject.putImage(canvasContext,pixelsContext);
        histogramData = histogramObject.getHistogramDataFromBinaryImage(pixelsContext.data);
        histogramObject.draw($('#container'), histogramData, 160000);  
        })();

        //red image
        (function(){
            var canvasContext = canvasOperationsObject.getCanvasContext('canvRed');  

            canvasContext.drawImage(image, 0, 0);  
            pixelsContext = imageOperationsObject.convertToRCanal (
                canvasOperationsObject.getCanvasPixelContext(canvasContext, 400, 400)
            ); 

            //var array = canvasArrayConverter.canalToArray(pixelsContext.data, 400, 400, canvasArrayConverter.Enums.RED);
            //var array = convertRedCanvasCanalToArray(pixelsContext.data, 400, 400);
            //pixelsContext = convertRedArrayToCanvas (array, pixelsContext, 400);

            canvasOperationsObject.putImage(canvasContext,pixelsContext);
            histogramData = histogramObject.getHistogramDataFromRedCanal(pixelsContext.data);
            histogramObject.draw($('#containerRed'), histogramData, 160000);

        })();

        //green image
        (function(){
        var canvasContext = canvasOperationsObject.getCanvasContext('canvGreen');  

        canvasContext.drawImage(image, 0, 0);  
        pixelsContext = imageOperationsObject.convertToGCanal (
            canvasOperationsObject.getCanvasPixelContext(canvasContext, 400, 400)
        ); 

        canvasOperationsObject.putImage(canvasContext,pixelsContext);
        histogramData = histogramObject.getHistogramDataFromGreenCanal(pixelsContext.data);
        histogramObject.draw($('#containerGreen'), histogramData, 160000);  
        })();

        //blue image
        (function(){
        var canvasContext = canvasOperationsObject.getCanvasContext('canvBlue');  

        canvasContext.drawImage(image, 0, 0);  
        pixelsContext = imageOperationsObject.convertToBCanal (
            canvasOperationsObject.getCanvasPixelContext(canvasContext, 400, 400)
        ); 

        canvasOperationsObject.putImage(canvasContext,pixelsContext);
        histogramData = histogramObject.getHistogramDataFromBlueCanal(pixelsContext.data);
        histogramObject.draw($('#containerBlue'), histogramData, 160000);  
        })(); 
    });
});


