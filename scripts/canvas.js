$(function () { 

    var image = canvasOperations.readImage('image_source');
    
    //binary image
    (function(){
    var canvasContext = canvasOperations.getCanvasContext('canv');  
    
    canvasContext.drawImage(image, 0, 0);  
    pixelsContext = imageOperations.convertToBinary (
        canvasOperations.getCanvasPixelContext(canvasContext, 400, 400)
    ); 
    
    canvasOperations.putImage(canvasContext,pixelsContext);
    histogramData = histogram.getHistogramDataFromBinaryImage(pixelsContext.data);
    histogram.draw($('#container'), histogramData, 160000);  
    })();
    
    //red image
    (function(){
        var canvasContext = canvasOperations.getCanvasContext('canvRed');  

        canvasContext.drawImage(image, 0, 0);  
        pixelsContext = imageOperations.convertToRCanal (
            canvasOperations.getCanvasPixelContext(canvasContext, 400, 400)
        ); 

        canvasOperations.putImage(canvasContext,pixelsContext);
        histogramData = histogram.getHistogramDataFromRedCanal(pixelsContext.data);
        histogram.draw($('#containerRed'), histogramData, 160000);
        var array = convertRedCanalToArray(pixelsContext.data, 400, 400);
    })();
    
    //green image
    (function(){
    var canvasContext = canvasOperations.getCanvasContext('canvGreen');  
    
    canvasContext.drawImage(image, 0, 0);  
    pixelsContext = imageOperations.convertToGCanal (
        canvasOperations.getCanvasPixelContext(canvasContext, 400, 400)
    ); 
    
    canvasOperations.putImage(canvasContext,pixelsContext);
    histogramData = histogram.getHistogramDataFromGreenCanal(pixelsContext.data);
    histogram.draw($('#containerGreen'), histogramData, 160000);  
    })();
    
    //blue image
    (function(){
    var canvasContext = canvasOperations.getCanvasContext('canvBlue');  
    
    canvasContext.drawImage(image, 0, 0);  
    pixelsContext = imageOperations.convertToBCanal (
        canvasOperations.getCanvasPixelContext(canvasContext, 400, 400)
    ); 
    
    canvasOperations.putImage(canvasContext,pixelsContext);
    histogramData = histogram.getHistogramDataFromBlueCanal(pixelsContext.data);
    histogram.draw($('#containerBlue'), histogramData, 160000);  
    })();
    
    function convertRedCanalToArray (imagePixels, width, height) {   
        var imageArray = new Array(height);
        
        for (var i = 0; i < height; i++) {
            imageArray[i] = new Array(width);
        }
        
        for (var i = 0, actualWidth = 0, actualHeight = 0; i < imagePixels.length; i += 4) {
            imageArray[actualHeight][actualWidth] = imagePixels[i]; //czerwony
            actualWidth += 1;
            
            if ( actualWidth / width == 1 ) {
                actualWidth = 0;
                actualHeight += 1;
            }
        }
                    
        return imageArray;
    }
    
});



