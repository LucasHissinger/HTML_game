  /*=================================================*/
/*=== Squelette de projet avec la balise Canvas ===*/
/*=================================================*/

/*====================*/
/*=== Global space ===*/
/*====================*/

// Object to manage directions
var Direction = {
	Aucune	: {value: 0, name: "Aucune", code: "A"}, 
	Gauche	: {value: 1, name: "Gauche", code: "G"}, 
	Droite	: {value: 2, name: "Droite", code: "D"},
	Gauche2 : {value: 3, name: "Gauche2", code: "H"},
	Droite2	: {value: 4, name: "Droite2", code: "B"} 
};

// Mob position 
var posXMenu = 225;
var posYMenu = 25;
var soloNiv = 0;
var niv1V = 1.5;
var niv2V = 2.5;
var niv3V = 3.5;
var soloB = 1;
var stop = 0;
var multiB = 0;
var niv1B = 1;
var niv2B = 0;
var niv3B = 0;
var Fige = 0;
var Fige2 = 0;
var FigeWave = 0;
var Fige2Wave = 0;
var posXF = 0;
var posXW = 0;
var vie2 = 3;
var vie = 3;
var posX2 = 500;
var posY2 = 675;
var posXN = 0;
var posYN = 0;
var multi = 0;
var S2 = 0;
var posYE = 450;
var posYS = 350;
var Bouclier = 0;
var Bouclier2 = 0;
var S1 = 0;
var start = 0;
var speedM = 1.5;
var wave2 =0;
var Inverse = 0;
var Inverse2 = 0;
var wave = 0;
var BoucWave = wave + 3;
var Bouc2Wave = wave + 3;
var max = 981;
var powerW = 0;
var min = -10;
var Fige2Wave = 0;
var InvWave = 0;
var Inv2Wave = 0;
var posX =475;
var posY = 601;
var dire = 0;
var dire2 = 0;
var posYP = -50;
var powerP = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
var maxwave = wave + 5;
var powerWave = Math.floor(Math.random() * (maxwave - wave + 2)) + wave;
var posXP = Math.floor(Math.random() * (max - min + 1)) + min;
var posXM1 = Math.floor(Math.random() * (max - min + 1)) + min;
var posXM2 = Math.floor(Math.random() * (max - min + 1)) + min;
var posXM3 = Math.floor(Math.random() * (max - min + 1)) + min;
var posXM4 = Math.floor(Math.random() * (max - min + 1)) + min;
var posXM5 = Math.floor(Math.random() * (max - min + 1)) + min;
var posXM6 = Math.floor(Math.random() * (max - min + 1)) + min;
var posYM = -50;

var speed = 10;
var direction;
var winer = 0;

// Graphic objects
var canvas;
var context;
var audio = new Audio();
       audio.src = "audio.mp3";
var power = new Image();
	 power.src = "power.png";
var imgmulti = new Image();
	 imgmulti.src = "multi.png";
var multi2 = new Image();
	 multi2.src = "multi2.png";
	 var niv1 = new Image();
	 niv1.src = "niv1.png";
	 var niv1S = new Image();
	 niv1S.src = "niv1S.png";
	 var niv2 = new Image();
	 niv2.src = "niv2.png";
	 var niv2S = new Image();
	 niv2S.src = "niv2S.png";
	 var niv3 = new Image();
	 niv3.src = "niv3.png";
	 var niv3S = new Image();
	 niv3S.src = "niv3S.png";
var coeur = new Image();
	 coeur.src = "coeur.png";
var win = new Image();
	 win.src = "win.png";
var fin = new Image();
	 fin.src = "fin.png";
var missile = new Image();
	 missile.src = "missile.png";
var persopause = new Image();
	 persopause.src = "pause.png";
	 var persopause2 = new Image();
	 persopause2.src = "pause2.png";
var persodroite = new Image();
	 persodroite.src = "droite.png";
	 var persodroite2 = new Image();
	 persodroite2.src = "droite2.png";
var persogauche = new Image();
	 persogauche.src = "gauche.png";
	 var persogauche2 = new Image();
	 persogauche2.src = "gauche2.png";
var imgsolo = new Image();
	 imgsolo.src = "solo.png";
var solo2 = new Image();
	 solo2.src = "solo2.png";
var bouclier = new Image();
	 bouclier.src = "bouclier.png";
var fige = new Image();
     fige.src = "fige.png";
var inverse = new Image();
     inverse.src = "inverse.png";
var menu = new Image();
      menu.src="menu2.png";
	  var fondnoir = new Image();
      fondnoir.src="fondnoir.png";
	  var fondnoir2 = new Image();
      fondnoir2.src="fondnoir2.png";
/*==================*/
window.onload = function()	// At start
{
	audio.play();
	//init our canvas and graphic context
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	// Stop at start
	direction = Direction.Aucune;

	// Render the scene
	dessine();

	// launch animation
	setInterval(animate,1);
}


window.onkeydown=function(event)	// At key pressed
{
	switch (event.keyCode)
	{
                  
                case 81 :
                        if(Fige == 0){
                        if(Inverse == 0){
                        direction = Direction.Gauche2
                        }else{
                        direction = Direction.Droite2
                        }
                        }
                break; 

                case 68 : 
                        if(Fige == 0){
                        if(Inverse == 0){
                        direction = Direction.Droite2
                        }else{
                        direction = Direction.Gauche2
                        }
                        }
                break;
				
				case 38 : 
				         if(soloNiv == 1){
							 soloNiv = 0;
							 soloB = 1;
							 niv1B = 1;
							 niv2B = 0;
							 niv3B = 0;
						 }
				
				
			    break;

		case 39 : 
			        if(start == 0){
			        	if(multiB == 0 && soloNiv == 0){
			        	    multiB = 1;
			        	    soloB = 0;
			        	    } else if(multiB == 1 && soloNiv == 0){
			        	    	multiB = 1;
			        	    	soloB = 0;
			        	    }
			        }
					
					if(start == 0 && soloNiv == 1){
						if(niv1B == 1){
							niv1B = 0;
							niv2B = 1;
						} else if(niv2B == 1){
							niv3B = 1;
							niv2B = 0;
						} else if(niv3B == 1){
							niv3B = 1;
						}
					}
					
			        if(start == 1){
                        if(Fige2 == 0){
			if(Inverse2 == 0){
                        direction = Direction.Droite
                        }else{
                        direction = Direction.Gauche
                        }
            }}
		break;
		
		case 37 :
			if(start == 0){
	        	if(soloB == 0 && soloNiv == 0){
	        	    soloB = 1;
	        	    multiB = 0;
			} else if(soloB == 1  && soloNiv == 0){
				   soloB = 1;
				   multiB = 0;
			}
	        }
			
			if(start == 0 && soloNiv == 1){
						if(niv1B == 1){
							niv1B = 1;
						} else if(niv2B == 1){
							niv1B = 1;
							niv2B = 0;
						} else if(niv3B == 1){
							niv2B = 1;
							niv3B = 0;
						}
					}
			            if(start == 1){
                        if(Fige2 == 0){
			if(Inverse2 == 0){
                        direction = Direction.Gauche
                        }else{
                        direction = Direction.Droite
                        }
			}}
		break;

                case 32 :
                           if (start == 0 && multiB == 1)
                          {
                                   multi = 1;
								   winer = 0;
                                   powerP = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
                                   start = 1;
                                   Fige = 0;
                                   stop = 0;
                                   Fige2 = 0;
                                   Inverse = 0;
                                   Inverse2 = 0;
                                   Bouclier = 0;
                                   Bouclier2 = 0;
                                   posX = 450;
                                   speedM = 1.5;
                                   posY2 = 601;
                                   posX2 = 500;
                                   wave = 0;
                                   speedM = 1.5;
                                   vie = 3;
                                   vie2 = 3;
                                   maxwave = wave + 5;
                                   powerWave = Math.floor(Math.random() * (maxwave - wave + 1)) + wave;
                                   posXM1 = Math.floor(Math.random() * (max - min + 1)) + min;
                                   posXM2 = Math.floor(Math.random() * (max - min + 1)) + min;
                                   posXM3 = Math.floor(Math.random() * (max - min + 1)) + min;
                                   posXM4 = Math.floor(Math.random() * (max - min + 1)) + min; 
                                   posXM5 = Math.floor(Math.random() * (max - min + 1)) + min;
                                   posXM6 = Math.floor(Math.random() * (max - min + 1)) + min;
                                   posYM = -50;
                          }
						  if(niv1B == 1 && soloNiv == 1 && start == 0){
								vie = 3;
								start = 1;
                              Fige = 0;
							  winer = 0;
                              stop = 0;
                              Fige2 = 0;
                              Inverse = 0;
                              Inverse2 = 0;
                              Bouclier = 0;
                              Bouclier2 = 0;
                              vie2 = 3;         
                              soloNiv = 0;							  
                              multi = 0;
                              powerP = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                              posX = 475;
                              wave = 0;
                              maxwave = wave + 10;
                              powerWave = Math.floor(Math.random() * (maxwave - wave + 1)) + wave;
                              speedM = 1.5;
							}
                           if (start == 0 && multiB == 0){
                        	  soloNiv = 1;
                              
                            }
							
							
							if(niv2B == 1 && soloNiv == 1 && start == 0){
								vie = 3;
								start = 1;
                              Fige = 0;
							  winer = 0;
                              stop = 0;
                              Fige2 = 0;
                              Inverse = 0;
                              Inverse2 = 0;
							  soloNiv = 0;
                              Bouclier = 0;
                              Bouclier2 = 0;
                              vie2 = 3;                         
                              multi = 0;
                              powerP = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                              posX = 475;
                              wave = 0;
                              maxwave = wave + 10;
                              powerWave = Math.floor(Math.random() * (maxwave - wave + 1)) + wave;
                              speedM = 2.5;
							}
							
							if(niv3B == 1 && soloNiv == 1 && start == 0){
								vie = 3;
                              Fige = 0;
							  start = 1;
							  winer = 0;
                              stop = 0;
							  soloNiv = 0;
                              Fige2 = 0;
                              Inverse = 0;
                              Inverse2 = 0;
                              Bouclier = 0;
                              Bouclier2 = 0;
                              vie2 = 3;                         
                              multi = 0;
                              powerP = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                              posX = 475;
                              wave = 0;
                              maxwave = wave + 10;
                              powerWave = Math.floor(Math.random() * (maxwave - wave + 1)) + wave;
                              speedM = 3.5;
							}
                 break;
	}	
       
    
}

function avance_position()	// Mob moving
{
	switch (direction.name)
	{
		case "Gauche" : 
			if (posX <= 1)
{
			posX = -9;
} else {
                      
			posX -= speed;
                        dire = 1;                       
}             
               break;
		
		case "Droite" : 
			if (posX >= 961)
{
			posX = 980;
}else {
			posX += speed;
                        dire = 0;
                   
}
                   break;

               case "Gauche2" :
			if (posX2 <= 1)
{
			posX2 = -9;
} else {
                      
			posX2 -= speed;
                        dire2 = 1;                       
}
		break;


		case "Droite2" : 
			if (posX2 >= 961)
{
			posX2 = 980;
}else {
			posX2 += speed;
                        dire2 = 0;
                   
}
		break;
	}	
	direction = Direction.Aucune;
        
}

function animate()	// Animation core
{
        if (posYM <= 595 && vie != 0 && start == 1 && winer == 0 || vie2 != 0 && posYM <= 595 && vie != 0 && start == 1 && winer == 0){
        posYM += speedM;
}       

	avance_position();

	dessine();
}

function dessine()	// Draw the scene
{
	// Clear
	context.clearRect(0, 0, canvas.width, canvas.height);
	if(start == 0){
	context.drawImage(menu, posXMenu, posYMenu);
	}
	if(soloB == 1 && soloNiv == 1 && niv1B == 1){
		context.drawImage(niv1S, 215, 465);
	}
	
	if(soloB == 1 && soloNiv == 1 && niv2B == 1){
		context.drawImage(niv2S, 255, 465);
	}
	
	if(soloB == 1 && soloNiv == 1 && niv3B == 1){
		context.drawImage(niv3S, 295, 465);
	}
	if(soloB == 1 && soloNiv == 1 && niv1B == 0){
		context.drawImage(niv1, 215, 465);
	}
	
	if(soloB == 1 && soloNiv == 1 && niv2B == 0){
		context.drawImage(niv2, 255, 465);
	}
	
	if(soloB == 1 && soloNiv == 1 && niv3B == 0){
		context.drawImage(niv3, 295, 465);
	}

    if(start == 0){
    	if(multiB == 0 && soloNiv == 0){
    		context.drawImage(solo2, 230, 400);
    		context.drawImage(imgmulti, 660, 400);
    	} else if(soloB == 0 && soloNiv == 0){
    		context.drawImage(imgsolo, 230, 400);
    		context.drawImage(multi2, 660, 400);
    		
    	} else {
               context.drawImage(imgmulti, 660, 400);
               context.drawImage(imgsolo, 230, 400);
}
    	
    }
                if (dire == 0 && (posX/10 & 1)==1)  {
             context.drawImage(persodroite, posX, posY);
} else if (dire == 0 && (posX/10 & 1)!=1){
             context.drawImage(persopause, posX, posY);
} else if (dire == 1 && (posX/10 & 1)==1){
             context.drawImage(persogauche, posX, posY);
} else if (dire == 1 && (posX/10 & 1)!=1){
             context.drawImage(persopause, posX, posY);
}

                if (dire2 == 0 && (posX2/10 & 1)==1 && multi == 1)  {
             context.drawImage(persodroite2, posX2, posY2);
} else if (dire2 == 0 && (posX2/10 & 1)!=1 && multi == 1){
             context.drawImage(persopause2, posX2, posY2);
} else if (dire2 == 1 && (posX2/10 & 1)==1 && multi == 1){
             context.drawImage(persogauche2, posX2, posY2);
} else if (dire2 == 1 && (posX2/10 & 1)!=1 && multi == 1){
             context.drawImage(persopause2, posX2, posY2);
}
        if (posYM <= 595 && vie != 0 && start == 1 && winer == 0 || vie2 != 0 && posYM <= 595 && vie != 0 && start == 1 && winer == 0 && stop == 0){
	context.drawImage(missile, posXM1, posYM);
        context.drawImage(missile, posXM2, posYM);
        context.drawImage(missile, posXM3, posYM);
        context.drawImage(missile, posXM4, posYM);
        context.drawImage(missile, posXM5, posYM);
        context.drawImage(missile, posXM6, posYM);
} else if (posYM > 595 && vie != 0 && start == 1 && winer == 0 || vie2 != 0 && posYM <= 595 && vie != 0 && start == 1 && winer == 0 && stop == 0){ 
        wave += 1;
        posXM1 = Math.floor(Math.random() * (max - min + 1)) + min;
        posXM2 = Math.floor(Math.random() * (max - min + 1)) + min;
        posXM3 = Math.floor(Math.random() * (max - min + 1)) + min;
        posXM4 = Math.floor(Math.random() * (max - min + 1)) + min; 
        posXM5 = Math.floor(Math.random() * (max - min + 1)) + min;
        posXM6 = Math.floor(Math.random() * (max - min + 1)) + min;
		if(multi == 1){
			speedM += 0.08;
		}
        posYM = -50;
        maxwave = wave + 5;
}

        if(posYP >= 605){
        powerW = 0;
        if(multi == 0){
        powerWave = Math.floor(Math.random() * (maxwave + 5 - wave + 1)) + wave;
        } else {
        powerWave = Math.floor(Math.random() * (maxwave - wave + 1)) + wave;
        }
        posYP = -50;
        posXP = Math.floor(Math.random() * (max - min + 1)) + min;
}

        if(wave == 30 && vie != 0 && multi == 0){
          winer = 1;
}
      
        if(winer == 1){
          start = 0;
          context.drawImage(win, 320, 385);
}         

        if (posYM >= 585){
              if(posX <= posXM1+17 && posX >= posXM1-17 || posX <= posXM2+17 && posX >= posXM2-17 || posX <= posXM3+17 && posX >= posXM3-17 || posX <= posXM4+17 && posX >= posXM4-17 || posX <= posXM5+17 && posX >= posXM5-17 || posX <= posXM6+17 && posX >= posXM6-17){
                 if(Bouclier == 0){
                 vie -= 1; }
                 posXM1 = Math.floor(Math.random() * (max - min + 1)) + min;
        posXM2 = Math.floor(Math.random() * (max - min + 1)) + min;
        posXM3 = Math.floor(Math.random() * (max - min + 1)) + min;
        posXM4 = Math.floor(Math.random() * (max - min + 1)) + min; 
        posXM5 = Math.floor(Math.random() * (max - min + 1)) + min;
        posXM6 = Math.floor(Math.random() * (max - min + 1)) + min;
                 posYM = -50;              
                 
   }
} 
       if (posYM >= 585 && multi == 1){
             if (posX2 <= posXM1+17 && posX2 >= posXM1-17 || posX2 <= posXM2+17 && posX2 >= posXM2-17 || posX2 <= posXM3+17 && posX2 >= posXM3-17 || posX2 <=                 posXM4+17 && posX2 >= posXM4-17 || posX2 <= posXM5+17 && posX2 >= posXM5-                17 || posX2 <= posXM6+17 && posX2 >= posXM6-17){
                if(Bouclier2 == 0){
                vie2 -= 1; }
                posXM1 = Math.floor(Math.random() * (max - min + 1)) + min;
        posXM2 = Math.floor(Math.random() * (max - min + 1)) + min;
        posXM3 = Math.floor(Math.random() * (max - min + 1)) + min;
        posXM4 = Math.floor(Math.random() * (max - min + 1)) + min; 
        posXM5 = Math.floor(Math.random() * (max - min + 1)) + min;
        posXM6 = Math.floor(Math.random() * (max - min + 1)) + min;
                posYM = -50;  
         }
}

        if (posYP >= 585){
              if(posX <= posXP+17 && posX >= posXP-17 && multi == 0 && powerP == 1){
                 vie += 1;
                 maxwave = wave + 10; 
                 powerP = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                 powerWave = Math.floor(Math.random() * (maxwave - wave + 1)) + wave;
                 posXP = Math.floor(Math.random() * (max - min + 1)) + min;
                 posYP = -50;
   }
        }
       if (posYP >= 585){
              if(posX <= posXP+17 && posX >= posXP-17 && powerP == 1 && multi == 1){
                 vie += 1;
                 maxwave = wave + 5; 
                 powerWave = Math.floor(Math.random() * (maxwave - wave + 1)) + wave;
                 posXP = Math.floor(Math.random() * (max - min + 1)) + min;
                 powerP = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
                 posYP = -50;
   }
       }
              if (posYP >= 585){
                   if(posX2 <= posXP+17 && posX2 >= posXP-17 && powerP == 1){
                 vie2 += 1;
                 maxwave = wave + 5; 
                 powerWave = Math.floor(Math.random() * (maxwave - wave + 1)) + wave;
                 posXP = Math.floor(Math.random() * (max - min + 1)) + min;
                 powerP = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
                 posYP = -50;               
   }
}

              if (posYP >= 585){
              if(posX <= posXP+17 && posX >= posXP-17 && powerP == 2 && multi == 1){
                 Fige = 1;
                 maxwave = wave + 10;
                 maxwave = wave + 5; 
                 powerWave = Math.floor(Math.random() * (maxwave - wave + 1)) + wave;
                 posXP = Math.floor(Math.random() * (max - min + 1)) + min;
                 powerP = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
                 posYP = -50;  
                 FigeWave = wave + 3;            
                 
   }
}

                           if (posYP >= 585){
              if(posX2 <= posXP+17 && posX2 >= posXP-17 && powerP == 2 && multi == 1){
                 Fige2 = 1;
                 maxwave = wave + 5; 
                 powerWave = Math.floor(Math.random() * (maxwave - wave + 1)) + wave;
                 posXP = Math.floor(Math.random() * (max - min + 1)) + min;
                 powerP = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
                 posYP = -50;  
                 Fige2Wave = wave + 3;            
                 
   }
}
             
             if(wave == FigeWave){
             Fige = 0; 
}

             if(wave == Fige2Wave){
             Fige2 = 0;
}

                     if (posYP >= 585){
              if(posX2 <= posXP+17 && posX2 >= posXP-17 && powerP == 3 && multi == 1){
                 Inverse2 = 1;
                 maxwave = wave + 5; 
                 powerWave = Math.floor(Math.random() * (maxwave - wave + 1)) + wave;
                 posXP = Math.floor(Math.random() * (max - min + 1)) + min;
                 powerP = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
                 posYP = -50;              
                 InvWave = wave + 5;  
   }
}

                           if (posYP >= 585){
              if(posX <= posXP+17 && posX >= posXP-17 && powerP == 3 && multi == 1){
                 Inverse = 1;
                 maxwave = wave + 5; 
                 powerWave = Math.floor(Math.random() * (maxwave - wave + 1)) + wave;
                 posXP = Math.floor(Math.random() * (max - min + 1)) + min;
                 powerP = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
                 posYP = -50;              
                 Inv2Wave = wave + 5;  
   }
}
                               if (posYP >= 585){
              if(posX <= posXP+17 && posX >= posXP-17 && powerP == 2 && multi == 0){
                 Bouclier = 1;
                 maxwave = wave + 10; 
                 powerWave = Math.floor(Math.random() * (maxwave - wave + 1)) + wave;
                 posXP = Math.floor(Math.random() * (max - min + 1)) + min;
                 powerP = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                 posYP = -50;              
                 BoucWave = wave + 3;  
   }
}
                               if (posYP >= 585){
              if(posX <= posXP+17 && posX >= posXP-17 && powerP == 4 && multi == 1){
                 Bouclier = 1;
                 maxwave = wave + 5; 
                 powerWave = Math.floor(Math.random() * (maxwave - wave + 1)) + wave;
                 posXP = Math.floor(Math.random() * (max - min + 1)) + min;
                 powerP = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
                 posYP = -50;              
                 BoucWave = wave + 3;  
   }
}
                                         if (posYP >= 585){
              if(posX2 <= posXP+17 && posX2 >= posXP-17 && powerP == 4 && multi == 1){
                 Bouclier2 = 1;
                 maxwave = wave + 5; 
                 powerWave = Math.floor(Math.random() * (maxwave - wave + 1)) + wave;
                 posXP = Math.floor(Math.random() * (max - min + 1)) + min;
                 powerP = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
                 posYP = -50;              
                 Bouc2Wave = wave + 3;  
   }
}
                                 if(wave == BoucWave){
             Bouclier = 0;
}
                                             if(wave == Bouc2Wave){
             Bouclier2 = 0;
}
                                             
              if(Inverse == 1 && Fige == 1){
                 Inverse = 0;
                 }
              if(Inverse2 == 1 && Fige2 == 1){
                 Inverse2 = 0;
                   }
                    if(wave == Inv2Wave){
             Inverse = 0;
}

                if(wave == InvWave){
             Inverse2 = 0;
}

 if (vie == 0 && multi == 0){
      start = 0;
      context.drawImage(fin, 235, 375);
      posXF = 185;
}


        if(Bouclier == 1){
        context.drawImage(bouclier, 0, 650);
}
        if(Bouclier2 == 1){
            context.drawImage(bouclier, 975, 650);
    }
        if(Fige2 == 1 && Bouclier == 0){
            context.drawImage(fige, 0, 650);
    }
        if(Fige == 1 && Bouclier == 0){
            context.drawImage(fige, 975, 650);
    }
        if(Fige2 == 1 && Bouclier == 1){
            context.drawImage(fige, 22, 650);
    }
        if(Fige == 1 && Bouclier == 1){
            context.drawImage(fige, 953, 650);
    }
        if(Inverse2 == 1 && Bouclier == 0){
            context.drawImage(inverse, 0, 650);
    }
        if(Inverse == 1 && Bouclier == 0){
            context.drawImage(inverse, 975, 650);
    }
        if(Inverse2 == 1 && Bouclier == 1){
            context.drawImage(inverse, 22, 650);
    }
        if(Inverse == 1 && Bouclier == 1){
            context.drawImage(fige, 953, 650);
    }

        if(wave == powerWave){
   powerW = 1;
} 

 if(powerW == 1 && start == 1){
 posYP += 0.9;
 context.drawImage(power, posXP, posYP);
}

                if (posYE <= 450){
        S2 = 0;
}

        if (posYE >= 530){
        S2 = 1;
}

        if (posYS <= 320){
        S1 = 0;
}

        if (posYS >= 400){
        S1 = 1;
}
        if(vie == 6){
        vie = 5;
}
        if(vie2 == 6){
        vie2 = 5;
}

                        if(vie == 5){       
        context.drawImage(coeur, 0, 675);
        context.drawImage(coeur, 22, 675);
        context.drawImage(coeur, 44, 675);
        context.drawImage(coeur, 66, 675);
        context.drawImage(coeur, 88, 675);
}
                if(vie == 4){       
        context.drawImage(coeur, 0, 675);
        context.drawImage(coeur, 22, 675);
        context.drawImage(coeur, 44, 675);
        context.drawImage(coeur, 66, 675);
}
        if(vie == 3){       
        context.drawImage(coeur, 0, 675);
        context.drawImage(coeur, 22, 675);
        context.drawImage(coeur, 44, 675);
}
        if(vie == 2){        
        context.drawImage(coeur, 0, 675);
        context.drawImage(coeur, 22, 675);

}
           if(vie == 1){        
        context.drawImage(coeur, 0, 675);

}

                        if(multi == 1 && vie2 == 5){
        context.drawImage(coeur, 975, 675);
        context.drawImage(coeur, 953, 675);
        context.drawImage(coeur, 931, 675);
        context.drawImage(coeur, 909, 675);
        context.drawImage(coeur, 887, 675);
}
                if(multi == 1 && vie2 == 4){
        context.drawImage(coeur, 975, 675);
        context.drawImage(coeur, 953, 675);
        context.drawImage(coeur, 931, 675);
        context.drawImage(coeur, 909, 675);
}  
        if(multi == 1 && vie2 == 3){
        context.drawImage(coeur, 975, 675);
        context.drawImage(coeur, 953, 675);
        context.drawImage(coeur, 931, 675);
}  
        if(multi == 1 && vie2 == 2){
        context.drawImage(coeur, 975, 675);
        context.drawImage(coeur, 953, 675);
}      
        if(multi == 1 && vie2 == 1){
        context.drawImage(coeur, 975, 675);
}

        if(vie2 == 0 && multi == 1 && soloNiv == 0){
        start = 0;
        context.drawImage(win, 0, 450);
        context.drawImage(fin, 500, 450);
}
        if(vie == 0 && multi == 1 && soloNiv == 0){
        start = 0;
        context.drawImage(win, 675, 450);
        context.drawImage(fin, 0, 450);
}
         if(multi == 1){
         context.drawImage(persopause, 110, 670);
         context.drawImage(persopause2, 855, 670);			 
		 }
	     if(posXN != 2500){
			  context.drawImage(fondnoir, posXN, 0);
			  context.drawImage(fondnoir2, 0, posYN);
			  posXN += 3.5;
			  posYN += 2.45;
		 }
		
		
	// Draw Mob
	context.beginPath();
	context.closePath();
	context.fill();	
}