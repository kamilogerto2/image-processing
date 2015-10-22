 var imageOperations = {
     
    convertToBinary: function (imageContext) {
        
            var imagePixels = imageContext.data;

            for (var i = 0, n = imagePixels.length; i < n; i += 4) {
                var grayscale = imagePixels[i ] * .3
                + imagePixels[i+1] * .59
                + imagePixels[i+2] * .11;
                imagePixels[i ] = grayscale; // czerwony
                imagePixels[i+1] = grayscale; // zielony
                imagePixels[i+2] = grayscale; // niebieski 
            }
        
            return imageContext;
        },  
     
     convertToRCanal: function(imageContext) {
         
            var imagePixels = imageContext.data;

            for (var i = 0, n = imagePixels.length; i < n; i += 4) {
                imagePixels[i+1] = 0; // zielony
                imagePixels[i+2] = 0; // niebieski 
            }
        
            return imageContext;
        },
     
     convertToGCanal: function(imageContext) {
         
            var imagePixels = imageContext.data;

            for (var i = 0, n = imagePixels.length; i < n; i += 4) {
                imagePixels[i ] = 0; // czerwony
                imagePixels[i+2] = 0; // niebieski  
            }
        
            return imageContext;
        },
     
     convertToBCanal: function(imageContext) {
         
            var imagePixels = imageContext.data;

            for (var i = 0, n = imagePixels.length; i < n; i += 4) {
                imagePixels[i ] = 0; // czerwony
                imagePixels[i+1] = 0; // zielony 
            }
        
            return imageContext;
        }
        
        
 };
    
   