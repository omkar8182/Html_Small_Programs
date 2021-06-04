<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="fontawesome-free-5.15.1-web/css/all.css">

    <link rel="stylesheet" href="musicplayer.css">

  
</head>

<body>
    <header class="header">
<?php include "connection.php" ?>
     <div class="imgs"><img id ="mainimg" src="images/bk1.jpg" alt="error"></div>
     <div id="fonts">
        <i class="fas fa-backward" id="prev"></i>
        <i class="fas fa-play-circle playpause"></i>
        <i class="fas fa-forward" id="next"></i>
        
    </div> 
    </header>

    <script src="musicplayer.js"></script>     
</body>

</html>