var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6d54e5a1-27be-42c4-b52b-15ef4baf8c82","cf66c6d8-f4ab-4a85-89ea-4bcf815dc9af","a0b69906-f2dc-4cb9-bbb7-0dda7670a0c5","cfde5a03-9556-42cd-8e34-20f4f6561df1","544e1a0e-f5a7-49f8-9c17-57ee7e745bae","3b0a74c5-3708-4086-a2e0-4811d524b17e","d88fef49-dfb2-4bff-a7cb-b38903fde8d6","f1c5733e-0f92-4765-8416-f6c0bc499129","16e64a20-a1ea-42ab-b72a-baac7e70f391","fac132e8-99b4-4185-8c05-2f5cf29a8dbf"],"propsByKey":{"6d54e5a1-27be-42c4-b52b-15ef4baf8c82":{"name":"enemyBlack4_1","sourceUrl":null,"frameSize":{"x":82,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"WRZsiN6IJhltFQAoD7g84IRHG3qz6G5Z","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":84},"rootRelativePath":"assets/6d54e5a1-27be-42c4-b52b-15ef4baf8c82.png"},"cf66c6d8-f4ab-4a85-89ea-4bcf815dc9af":{"name":"space_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"OHDjxs0CgVkTw5jYzAflE32pw6qG.rTi","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/cf66c6d8-f4ab-4a85-89ea-4bcf815dc9af.png"},"a0b69906-f2dc-4cb9-bbb7-0dda7670a0c5":{"name":"enemyRed4_1","sourceUrl":"assets/api/v1/animation-library/gamelab/e8snIAw.ai8GPEKO_1xI6brjUxSYnyfz/category_vehicles/enemyRed4.png","frameSize":{"x":82,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"e8snIAw.ai8GPEKO_1xI6brjUxSYnyfz","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/e8snIAw.ai8GPEKO_1xI6brjUxSYnyfz/category_vehicles/enemyRed4.png"},"cfde5a03-9556-42cd-8e34-20f4f6561df1":{"name":"enemyRed4_1_copy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/e8snIAw.ai8GPEKO_1xI6brjUxSYnyfz/category_vehicles/enemyRed4.png","frameSize":{"x":82,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"e8snIAw.ai8GPEKO_1xI6brjUxSYnyfz","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/e8snIAw.ai8GPEKO_1xI6brjUxSYnyfz/category_vehicles/enemyRed4.png"},"544e1a0e-f5a7-49f8-9c17-57ee7e745bae":{"name":"enemyBlue4_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZC3cFcsqxPuVogpf7nhdNxq1hw2wqaYK/category_vehicles/enemyBlue4.png","frameSize":{"x":82,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZC3cFcsqxPuVogpf7nhdNxq1hw2wqaYK","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZC3cFcsqxPuVogpf7nhdNxq1hw2wqaYK/category_vehicles/enemyBlue4.png"},"3b0a74c5-3708-4086-a2e0-4811d524b17e":{"name":"enemyBlue4_1_copy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZC3cFcsqxPuVogpf7nhdNxq1hw2wqaYK/category_vehicles/enemyBlue4.png","frameSize":{"x":82,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZC3cFcsqxPuVogpf7nhdNxq1hw2wqaYK","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZC3cFcsqxPuVogpf7nhdNxq1hw2wqaYK/category_vehicles/enemyBlue4.png"},"d88fef49-dfb2-4bff-a7cb-b38903fde8d6":{"name":"enemyGreen4_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Out9s7IT6dwunZ6qCrNeBaBwO_.iKAZN/category_vehicles/enemyGreen4.png","frameSize":{"x":82,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"Out9s7IT6dwunZ6qCrNeBaBwO_.iKAZN","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Out9s7IT6dwunZ6qCrNeBaBwO_.iKAZN/category_vehicles/enemyGreen4.png"},"f1c5733e-0f92-4765-8416-f6c0bc499129":{"name":"enemyGreen4_1_copy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Out9s7IT6dwunZ6qCrNeBaBwO_.iKAZN/category_vehicles/enemyGreen4.png","frameSize":{"x":82,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"Out9s7IT6dwunZ6qCrNeBaBwO_.iKAZN","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Out9s7IT6dwunZ6qCrNeBaBwO_.iKAZN/category_vehicles/enemyGreen4.png"},"16e64a20-a1ea-42ab-b72a-baac7e70f391":{"name":"little_robot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/sN2hjAr9KTf9BcPT52K1YA4BLkKyA53k/category_robots/little_robot.png","frameSize":{"x":161,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"sN2hjAr9KTf9BcPT52K1YA4BLkKyA53k","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":161,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sN2hjAr9KTf9BcPT52K1YA4BLkKyA53k/category_robots/little_robot.png"},"fac132e8-99b4-4185-8c05-2f5cf29a8dbf":{"name":"building_22_1","sourceUrl":null,"frameSize":{"x":368,"y":212},"frameCount":1,"looping":true,"frameDelay":12,"version":"6yzNReiGxgTbrUtkKY4H7wWILv.54oUy","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":368,"y":212},"rootRelativePath":"assets/fac132e8-99b4-4185-8c05-2f5cf29a8dbf.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gamestate="serve";
var life = 0;
var inicio = createSprite(20,190,52,140);
var fin = createSprite(380,190,52,140);
var  la=createSprite(200,200);
la.setAnimation("space_1")
var boundary1 = createSprite(190,120,420,3);
var boundary2 = createSprite(190,260,420,3);
var  sam = createSprite(20,190,13,13);
sam.setAnimation("little_robot_1")
sam.scale=.1
var fin = createSprite(380,190,52,140);
fin.setAnimation("building_22_1")
fin.rotation=90
fin.scale=.4
var  car1 = createSprite(100,130,10,10);
car1.setAnimation("enemyBlack4_1")
car1.scale=.3
var  car2 = createSprite(215,130,10,10);
car2.setAnimation("enemyRed4_1");
car2.scale=.3
var  car3 = createSprite(165,250,10,10);
car3.setAnimation("enemyBlue4_1")
car3.scale=.3
var  car4 = createSprite(270,250,10,10);
car4.setAnimation("enemyBlue4_1")
car4.scale=.3
createEdgeSprites()
function draw() {
  background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0)
  drawSprites();
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
 if (gamestate==="serve") {
   fill("red");
   textSize(20);
   text("presiona enter para",150,200)
if (keyDown(ENTER)) {
car1.velocityY = 4;
car2.velocityY = 4;
car3.velocityY = -4;
car4.velocityY = -4;
  gamestate="play"
    }
  }
if (gamestate==="play") {
    if(keyDown("right")){
      sam.x = sam.x + 4;
    }
    if(keyDown("left")){
      sam.x = sam.x - 4;
    }
    if(keyDown("down")){
      sam.y +=4;
    }
    if(keyDown("UP_ARROW")){
      sam.y -=4;
    }
    if(
       sam.isTouching(car1)||
       sam.isTouching(car2)||
       sam.isTouching(car3)||
       sam.isTouching(car4))
    {
       sam.x = 20;
       sam.y = 190;
       fill("red")
       textSize(30)
       text("te atropellaron",100,200)
       life = life + 1;
    }
    if (sam.isTouching(fin)) {
     car1.destroy()
     car2.destroy()
     car3.destroy()
     car4.destroy()
     fin.destroy()
     sam.destroy();
     playSound("assets/category_achievements/peaceful_win_1.mp3")
     gamestate="end"
    }
  }
  if (gamestate==="end") {
    textSize(50);
    fill("white");
    text("ganaste",100,200);
  }
if (life==="3") {
    sam.destroy()
  }
  sam.bounce(edges)
  sam.bounce( boundary1)
  sam.bounce( boundary2)
if (sam.isTouching(fin)) {
  fill("red")
  textSize(30)
  text("ganaste",150,200)
}
  
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
