// document.querySelector("#name1").innerHTML=document.getElementById("tbox1").value;
// document.querySelector("#name2").innerHTML=document.getElementById("tbox2").value;


document.getElementById('btn').onclick = function(e){
      var randomNumber1 = Math.floor(Math.random()*6)+1;
      var randomImage1 = "dice" + randomNumber1+".png";
      var randomImageSource = "images/" +randomImage1;
      var image1 = document.querySelectorAll("img")[0];

      image1.setAttribute("src",randomImageSource);

      var randomNumber2 = Math.floor(Math.random()*6)+1;
      var randomImage2 = "dice" + randomNumber2+".png";
      var randomImageSource2 = "images/" +randomImage2;
      var image2 = document.querySelectorAll("img")[1];

      image2.setAttribute("src",randomImageSource2);

      click(randomNumber1,randomNumber2);

    }

    function click(r1,r2){
      player=document.querySelector("h1").innerHTML;
      if(r1==1 && r2==1){
          document.querySelector("p").innerHTML=" 😧 Oh bad luck! Reduced a mark";
          document.querySelector("h1").innerHTML="Player 02";
          if(player=="Player 01"){
            // nMark=eval(document.getElementById("player1").value+"-1");
            document.getElementById("player1").value=0;

          }else if(player=="Player 02"){
            // nMark=eval(document.getElementById("player2").value+"-1");
            document.getElementById("player2").value=0;
            document.querySelector("h1").innerHTML="Player 01";
          }


      }else if(r1==r2){
        if(player=="Player 01"){
          mar=r1+r2;
          val=document.getElementById("player1").value+"+mar";
          nMark1=eval(val);
          document.getElementById("player1").value=nMark1;
          if(nMark1<100){
            document.querySelector("p").innerHTML="😀 Player 1 wins another chance.";
          }else{
            document.querySelector("p").innerHTML="🚩 Player 1 won 🥂";
            disBtn();
            document.querySelector("h1").innerHTML="Congratulations 🎈";
          }


        }else if(player=="Player 02"){
          mar=r1+r2;
          val=document.getElementById("player2").value+"+mar";
          nMark2=eval(val);
          document.getElementById("player2").value=nMark2;
          if(nMark2<100){
            document.querySelector("p").innerHTML="😀 Player 2 wins another chance.";
          }else{
            document.querySelector("h1").innerHTML="Congratulations 🎈";
            disBtn();
            document.querySelector("p").innerHTML="🚩 Player 2 won 🥂";
          }
        }

      }else{
        if(player=="Player 01"){
          document.querySelector("h1").innerHTML="Player 02";
          mar=r1+r2;
          val=document.getElementById("player1").value+"+mar";
          nMark1=eval(val);
          document.getElementById("player1").value=nMark1;
          if(nMark1<100){
            document.querySelector("p").innerHTML="Next Chance goes to player 2";
          }else{
            document.querySelector("h1").innerHTML="Congratulations 🎈";
            disBtn();
            document.querySelector("p").innerHTML="🚩 Player 1 won 🥂";
          }

        }else if(player=="Player 02"){
          document.querySelector("h1").innerHTML="Player 01";
          mar=r1+r2;
          val=document.getElementById("player2").value+"+mar";
          nMark2=eval(val);
          document.getElementById("player2").value=nMark2;
          if(nMark2<100){
            document.querySelector("p").innerHTML="Next Chance goes to player 1";
          }else{
            document.querySelector("h1").innerHTML="Congratulations 🎈";
            disBtn();
            document.querySelector("p").innerHTML="🚩 Player 2 won 🥂";
          }

        }

      }

    }

function disBtn(){
  const button = document.querySelector('#btn');

  const disableButton = () => {
        button.disabled = true;
    };

  button.addEventListener('click', disableButton);
}
