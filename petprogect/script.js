<!DOCTYPE html>
<html lang="ru">

<head>
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <div class="conteiner">
      
        <div class="two_column">  
            <div class="tema"><h2>TEMA</h2>
                <select name="select" class="son"> 
                    <option value="1" selected>Winter</option>
                    <option value="2" >Autumn</option>
                    <option value="3">Spring</option>
                    <option value="4">Summer</option>
                    <option value="5">Day</option>
                     <option value="6">Night</option>
                  </select> 
                </div>
            <div class="season"></div>
            <div><h1>Timer</h1></div>
            <div class="timer">
             
                <p class="p2_2">HOURE</p>
                <p>:</p>
                <p class="p2_1">Minute</p>
                <p>:</p>
                <p class="p2">Second</p>
              </div>  
                    <div class="two_row">
                        <div class="wrap">
                    <button class="c-btn1"  name="but">
                    <span class="sp1">Start</span>
                    <span class="sp2">Pause</span>
                </button></div>
                <button class="c-btn1 perv"  name="but">Сброс</button>
                <div class="clock2">
                    <img class="strelka" src="./image_pet/strelka.png" alt="1" />
                </div>
                </div>
            <p class="tim"></p>
<progress id="prog" value="0" max="60"></progress>
        </div>
    </div>
</body>
<script type="text/javascript" src="script.js"></script>
<script type="text/javascript" src="pict.js"></script>
</html>