<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Javascript Dynamic content by ID -->
     <!-- <p id="bit"></p>
     <p id="sathy"></p>
     <script>
          document.getElementById("bit").innerHTML="Bannari amman institute Of Technology";
          document.getElementById("sathy").innerHTML="BIT";
     </script> -->

     <!-- Update an element by ID -->
      <!-- <p id="demo">Bannari Amman Institute Of Technology</p>
      <script>
         const element =document.getElementById("demo");
         element.innerHTML="Kongu Enginnering College";
      </script> -->

      <!-- Javascript Dynamic Image Changes -->
       <!-- <img  id="image" src="/images/cap1.jpeg" alt="">
       <p id="date"></p>

       <script>
          document.getElementById("image").src="images/cap2.jpeg";
          document.getElementById("date").innerHTML=Date();
       </script> -->


       <!-- Task -->
      
       <!-- <button onclick="alert('Success!!')">clickHere</button> -->

       <button onclick="document.getElementById('image').src='bulbon.jpg';">Bulb On</button>
       <img id="image" src="/images/bulb off.jpeg" alt="Bulb Off">
       <button onclick="document.getElementById('image').src='bulboff.jpg';">Bulb Off</button>
</body>
</html>