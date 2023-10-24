window.onload = function() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      var randomnumber1=getRandomInt(1,6);
      var randomnumber2=getRandomInt(1,6);
      var image1=document.querySelector('.img1');
      var image2=document.querySelector('.img2');
      if(randomnumber1==1)
      {
        image1.setAttribute('src','./images/dice1.png')
      }
      if(randomnumber1==2)
      {
        image1.setAttribute('src','./images/dice2.png')
      }
      if(randomnumber1==3)
      {
        image1.setAttribute('src','./images/dice3.png')
      }
      if(randomnumber1==4)
      {
        image1.setAttribute('src','./images/dice4.png')
      }
      if(randomnumber1==5)
      {
        image1.setAttribute('src','./images/dice5.png')
      }
      if(randomnumber1==6)
      {
        image1.setAttribute('src','./images/dice6.png')
      }
      if(randomnumber2 == 1)
      {
        image2.setAttribute('src','./images/dice1.png');
      }
      if(randomnumber2 == 2)
      {
        image2.setAttribute('src','./images/dice2.png');
      }
      if(randomnumber2 == 3)
      {
        image2.setAttribute('src','./images/dice3.png');
      }
      if(randomnumber2 == 4)
      {
        image2.setAttribute('src','./images/dice4.png');
      }
      if(randomnumber2 == 5)
      {
        image2.setAttribute('src','./images/dice5.png');
      }
      if(randomnumber2 == 6)
      {
        image2.setAttribute('src','./images/dice6.png');
      }
      if(randomnumber1 > randomnumber2){
      document.querySelector('h1').innerHTML='Player 1 wins';
      }
      else{
      document.querySelector('h1').innerHTML='Player 2 wins';
      }
}