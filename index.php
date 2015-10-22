<!doctype html>  
    <head>
        <meta charset="utf-8" /> 
        <link rel="stylesheet" type="text/css" title="styl css" href="css/style.css" />
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        <script src="http://code.highcharts.com/highcharts.js"></script>
        <script src="http://code.highcharts.com/modules/exporting.js"></script>
        <script data-main="scripts/main.js" src="scripts/require.js"></script>
    </head>
    <body class = "main-content">
        <div class = "main-content-div">
            <div class = "header">
                <div id = "menu">
                    <ul>
                        <li id="main-button">Strona główna</li>
                        <li id="about-button"><a>O nas</a></li>
                        <li id="gallery-button"><a>Galeria</a></li>
                        <li id="contact-button"><a>Kontakt</a></li>
                    </ul>
                    <div id = "undermenu">
                        <div id = "selector">
                        </div>
                    </div>
                </div>
            </div>
            <div class = "footer">
                <div class="content" id="main-page">
                    <div id ="photo">
                        <img id="image_source" src="team.jpg"/>
                    </div>
                    <div id ="welcome">
                        <canvas width="400" height="400" background="white" id="canv">
                        </canvas>
                        <div id="container" style="width: 400px; height: 400px; margin: 0 auto; display: inline-block">
                        </div>
                        <canvas width="400" height="400" background="white" id="canvRed">
                        </canvas>
                        <div id="containerRed" style="width: 400px; height: 400px; margin: 0 auto; display: inline-block">
                        </div>
                        <canvas width="400" height="400" background="white" id="canvGreen">
                        </canvas>
                        <div id="containerGreen" style="width: 400px; height: 400px; margin: 0 auto; display: inline-block">
                        </div>
                        <canvas width="400" height="400" background="white" id="canvBlue">
                        </canvas>
                        <div id="containerBlue" style="width: 400px; height: 400px; margin: 0 auto; display: inline-block">
                        </div>
                    </div>
                    <div id ="empty">
                    </div>
                </div> 
                <div class="content-other" id="about-us">
                    <div id ="about-us-content">
                    </div>
                    <div id ="empty">
                    </div>
                </div> 
                <div class="content-other" id="gallery">
                </div> 
                <div class="content-other" id="contact"></div> 
            </div>       
        </div>
    </body>
</html>