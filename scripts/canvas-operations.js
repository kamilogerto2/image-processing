var canvasOperations = {
        
        readImage: function (imageId) {
            var image = document.getElementById("image_source");
            return image;
        },
        
        getCanvasContext: function (canvasId) {
            var canvas = document.getElementById(canvasId);
            var canvasContext2D = canvas.getContext("2d");
            return canvasContext2D;
        },
        
        
        getCanvasPixelContext: function(canvasContext, width, height){    
            var imageContext = canvasContext.getImageData(0, 0, width, height);
            return imageContext;
        },
        
        putImage: function(canvasContext, imageContext) {
            canvasContext.putImageData(imageContext, 0, 0);
        }
        
        
    };