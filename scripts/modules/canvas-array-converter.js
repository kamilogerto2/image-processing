var canvasArrayConverter = {
    
    canalToArray: function (imagePixels, width, height, colorCanal) {
        var imageArray = new Array(height);
        
        for (var i = 0; i < height; i++) {
            imageArray[i] = new Array(width);
        }
        
        for (var i = 0, actualWidth = 0, actualHeight = 0; i < imagePixels.length; i += 4) {
            imageArray[actualHeight][actualWidth] = imagePixels[i + colorCanal]; //czerwony
            actualWidth += 1;
            
            if ( actualWidth / width == 1 ) {
                actualWidth = 0;
                actualHeight += 1;
            }
        }
                    
        return imageArray;
    },
    
    arayToCanal: function (redCanalArray, imageContext, colorCanal) {
        imagePixels = imageContext.data;
        
        for (var i = 0, actualWidth = 0, actualHeight = 0; i < imagePixels.length; i += 4) {
            imagePixels[i + colorCanal] = redCanalArray[actualHeight][actualWidth];  //czerwony
            actualWidth += 1;
            
            if ( actualWidth / width == 1 ) {
                actualWidth = 0;
                actualHeight += 1;
            }
        }
        
        return imageContext;
    },
    
    Enums: {  
        Canal : {
            RED: 0,
            GREEN: 1,
            BLUE: 2
        }
    }
}