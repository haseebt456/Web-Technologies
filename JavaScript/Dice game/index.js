      var randomnumber1=Math.floor(Math.random()*6)+1;
      var randomnumber2=Math.floor(Math.random()*6)+1;
      var randomSRC1="./images/dice"+randomnumber1+".png";
      var randomSRC2="./images/dice"+randomnumber2+".png";
      var image1=document.querySelector('.img1');
      var image2=document.querySelector('.img2');
      image1.setAttribute('src',randomSRC1);
      image2.setAttribute('src',randomSRC2);
      if(randomnumber1 > randomnumber2){
      document.querySelector('h1').innerHTML='Player 1 wins';
      }
      else if(randomnumber2 > randomnumber1){
      document.querySelector('h1').innerHTML='Player 2 wins';
      }
      else {
        document.querySelector('h1').innerHTML="DRAW!";
      }
