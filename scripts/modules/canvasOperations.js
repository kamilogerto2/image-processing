define('modules/canvasOperations', function () {
    return function () {
        
        this.readImage = function (imageId) {
            var image = document.getElementById("image_source");
            return image;
        }
        
        this.getCanvasContext = function (canvasId) {
            var canvas = document.getElementById(canvasId);
            var canvasContext2D = canvas.getContext("2d");
            return canvasContext2D;
        }
        
        this.putImage = function(canvasContext, imageContext) {
            canvasContext.putImageData(imageContext, 0, 0);
        }
        
        this.getCanvasPixelContext = function(canvasContext, width, height){    
            var imageContext = canvasContext.getImageData(0, 0, width, height);
            return imageContext;
        }
    }
});