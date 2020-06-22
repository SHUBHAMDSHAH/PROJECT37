class Form {

  constructor() {
    this.input = createInput("NAME");
    this.button = createButton('START');
    this.greeting = createElement('h2');
    this.button1 = createButton("CLEAR")
  }
  
    
  display(){
    var title = createElement('h2')
    title.html("PAINT IT ");
    title.position(250,20);
   
    
    this.input.position(250,100);
    this.button.position(250,150);
    this.button1.position(250,25);


    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

    if(mousePressedover = this.button1){
      strokeWeight.hide();
    }

    });
    if(gameState === 0){
      mousePressed(strokeWeight = 5 );
     }
     else{
       mouseReleased(strokeWeight = 0);
     }

  }
}