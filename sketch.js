//STILL TO DO

// - GAME DISCRIPTION
// - BALANCE ITEMS
// - commenting
// - WIN CON?


//define variables to be used
let loadCount;
let openShopButton;
let shopToMenuButton;
let gameoverToMenuButton;
let purchaseButton;
let selectSummoner;
let selectSummoner2;
let hit = false;
let itemabilities;
let summonerD;
let summonerDicon;
let summonerF;
let summonerFicon;
let allSummoners;
let currentTime;
let castTime;
let buffs;
let cds;
let cdcharge;
let castability;
let dashvelocity;
let files;
let state;
let abilitycosts;
let currentItem;
let currentSummoner;
let tstatus;
let inGameShop;
let statsToggle;
let shopSubstate;
let volumeControl;
let titlepic;
let charpos;
let velocity;
let destinationpos;
let timer;
let abilitytiming;
let invins;
let soundOn;
let soundOff;
let player;
let bg;
let summoners;
let icon;
let menumusic;
let difficulty;
let globalMouseToggle;
let globalMouse;
let openInGameShop;
let stats;
let price;
let translatecount;
let rmode;
let texts;
let images;
let sound;
let items;
let direction;
let excessls;
let playerdisplay;
let qup = false;
let eup = false;
let cannonbolthitbox = [];
let bolthitbox = [];
let playerhitbox = [];
let enemyminionhitbox = [];
let qhitbox = [];
let ehitbox = [];
let inventory = [];
let bullets = [];
let minions = [];
let enemyMinions = [];
let bolts = [];
let cannonbolts = [];

//preload assets
function preload() {

  setAssets();

}

//set up variables and play sounds files to begin game
function setup() {

  createCanvas(windowWidth, windowHeight);
  loadItems();
  loadSummoners();
  loadFiles();
  loadData(createButtons());

}

//game functions
function draw() {

  drawBackground();
  itemEffects();
  showCursor();
  showMenus();
  showShop();
  showSound();
  gameMusic();
  globalMouseControl();
  gameMode();
  characterPosition();
  determineVelocity();
  characterMovement();
  castingAbilities();
  updateTimer();
  minionFunctions();
  moveProjectiles();
  inGameShopDisplay();
  itemDetails();
  characterStatus();
  gameOverYet();

}

//load the basic assets needed to run the menu, notes the total amount of files to load
function setAssets() {

  bg = loadImage("assets/pictures/gamebackground.jpg");
  titlepic = loadImage("assets/pictures/gamename.png");
  menumusic = loadSound("assets/sounds/menumusic.wav");
  soundOn = loadImage("assets/pictures/soundon.png");
  soundOff = loadImage("assets/pictures/soundoff.png");
  volumeControl = true;
  files = 108;

}

//load files
function loadFiles() {

  soundFormats("mp3", "wav");
  sound = {
    bg : loadSound("assets/sounds/bgmusic.mp3", itemLoaded),
    flash : loadSound("assets/sounds/flashsound.wav", itemLoaded),
    barrier : loadSound("assets/sounds/barrier.wav", itemLoaded),
    ignite : loadSound("assets/sounds/ignite.wav", itemLoaded),
    heal : loadSound("assets/sounds/heal.wav", itemLoaded),
    clarity : loadSound("assets/sounds/clarity.mp3", itemLoaded),
    openstore : loadSound("assets/sounds/openstore.wav", itemLoaded),
    closestore : loadSound("assets/sounds/closestore.wav", itemLoaded),
    startgame : loadSound("assets/sounds/startgame.wav", itemLoaded),
    gameover : loadSound("assets/sounds/gameover.wav", itemLoaded),
    click : loadSound("assets/sounds/click.mp3", itemLoaded),
    clickItem : loadSound("assets/sounds/clickItem.wav", itemLoaded),
    buyItem : loadSound("assets/sounds/buyItem.wav", itemLoaded),
    levelUp : loadSound("assets/sounds/levelUp.mp3", itemLoaded),
    cannonfire : loadSound("assets/sounds/cannonfire.wav", itemLoaded),
    cannonhit : loadSound("assets/sounds/cannonhit.wav", itemLoaded),
    supernova : loadSound("assets/sounds/supernova.mp3", itemLoaded),
  };

  images = {
    tower : loadImage("assets/pictures/tower.png", itemLoaded),
    flash : loadImage("assets/pictures/flash.jpg", itemLoaded),
    barrier : loadImage("assets/pictures/barrier.jpg", itemLoaded),
    heal : loadImage("assets/pictures/heal.png", itemLoaded),
    ignite : loadImage("assets/pictures/ignite.png", itemLoaded),
    clarity : loadImage("assets/pictures/clarity.png", itemLoaded),
    gold : loadImage("assets/pictures/gold.png", itemLoaded),
    ad : loadImage("assets/pictures/ad.PNG", itemLoaded),
    ap : loadImage("assets/pictures/ap.PNG", itemLoaded),
    armor : loadImage("assets/pictures/armor.PNG", itemLoaded),
    mr : loadImage("assets/pictures/mr.PNG", itemLoaded),
    speed : loadImage("assets/pictures/speed.PNG", itemLoaded),
    crit : loadImage("assets/pictures/crit.PNG", itemLoaded),
    hpregen : loadImage("assets/pictures/hpregen.PNG", itemLoaded),
    manaregen : loadImage("assets/pictures/manaregen.PNG", itemLoaded),
    armorpen : loadImage("assets/pictures/armorpen.PNG", itemLoaded),
    magicpen : loadImage("assets/pictures/magicpen.PNG", itemLoaded),
    cdr : loadImage("assets/pictures/cdr.PNG", itemLoaded),
    friendlyCannon : loadImage("assets/pictures/friendlyCannon.png", itemLoaded),
    enemyCannon : loadImage("assets/pictures/enemyCannon.png", itemLoaded),
    friendlyMinion : loadImage("assets/pictures/friendlyMinion.png", itemLoaded),
    enemyMinion : loadImage("assets/pictures/enemyMinion.png", itemLoaded),
    border : loadImage("assets/pictures/border.png", itemLoaded),
    border2 : loadImage("assets/pictures/border2.png", itemLoaded),
    border3 : loadImage("assets/pictures/border3.png", itemLoaded),
    buttonborder : loadImage("assets/pictures/buttonborder.png", itemLoaded),
    buttonborder2 : loadImage("assets/pictures/buttonborder2.png", itemLoaded),
    startgameborder : loadImage("assets/pictures/startgameborder.png", itemLoaded),
    startgameborder2 : loadImage("assets/pictures/startgameborder2.png", itemLoaded),
    cannonbolt : loadImage("assets/pictures/cannonbolt.png", itemLoaded),
  };

  player = {
    avatar1 : loadImage("assets/pictures/character/charfacecrop1.gif", itemLoaded),
    avatar2 : loadImage("assets/pictures/character/charfacecrop2.gif", itemLoaded),
    charaa1 : loadImage("assets/pictures/character/charaa1.PNG", itemLoaded),
    charaa1b : loadImage("assets/pictures/character/charaa1b.png", itemLoaded),
    charaa2 : loadImage("assets/pictures/character/Charaa2.PNG", itemLoaded),
    charaa2b : loadImage("assets/pictures/character/charaa2b.png", itemLoaded),
    character1 : loadImage("assets/pictures/character/character1.PNG", itemLoaded),
    character1b : loadImage("assets/pictures/character/character1b.PNG", itemLoaded),
    character2 : loadImage("assets/pictures/character/character2.PNG", itemLoaded),
    character2b : loadImage("assets/pictures/character/character2b.PNG", itemLoaded),
    character3 : loadImage("assets/pictures/character/character3.PNG", itemLoaded),
    character3b : loadImage("assets/pictures/character/character3b.PNG", itemLoaded),
    charaltform2 : loadImage("assets/pictures/character/charaltform2.PNG", itemLoaded),
    charaltform2b : loadImage("assets/pictures/character/charaltform2b.PNG", itemLoaded),
    charaltform3 : loadImage("assets/pictures/character/charaltform3.PNG", itemLoaded),
    charaltform3b : loadImage("assets/pictures/character/charaltform3b.PNG", itemLoaded),
    charcast1 : loadImage("assets/pictures/character/charcast1.PNG", itemLoaded),
    charcast1b : loadImage("assets/pictures/character/charcast1b.PNG", itemLoaded),
    charcast2 : loadImage("assets/pictures/character/charcast2.PNG", itemLoaded),
    charcast2b : loadImage("assets/pictures/character/charcast2b.PNG", itemLoaded),
    charcast3 : loadImage("assets/pictures/character/charcast3.PNG", itemLoaded),
    charcast3b : loadImage("assets/pictures/character/charcast3b.PNG", itemLoaded),
    chardash1 : loadImage("assets/pictures/character/chardash1.PNG", itemLoaded),
    chardash1b : loadImage("assets/pictures/character/chardash1b.PNG", itemLoaded),
    chardash2 : loadImage("assets/pictures/character/chardash2.PNG", itemLoaded),
    chardash2b : loadImage("assets/pictures/character/chardash2b.PNG", itemLoaded),
    charq2 : loadImage("assets/pictures/character/charq2.PNG", itemLoaded),
    charq2b : loadImage("assets/pictures/character/charq2b.PNG", itemLoaded),
    // not currently used
    charrun1 : loadImage("assets/pictures/character/charrun1.PNG", itemLoaded),
    charrun1b : loadImage("assets/pictures/character/charrun1b.PNG", itemLoaded),
    charrun2 : loadImage("assets/pictures/character/charrun2.PNG", itemLoaded),
    charrun2b : loadImage("assets/pictures/character/charrun2b.PNG", itemLoaded),
    charrun3 : loadImage("assets/pictures/character/charrun3.PNG", itemLoaded),
    charrun3b : loadImage("assets/pictures/character/charrun3b.PNG", itemLoaded),
    //
    projectile1 : loadImage("assets/pictures/character/projectile1.PNG", itemLoaded),
    projectile1b : loadImage("assets/pictures/character/projectile1b.PNG", itemLoaded),
    projectile2 : loadImage("assets/pictures/character/projectile2.PNG", itemLoaded),
    projectile2b : loadImage("assets/pictures/character/projectile2b.PNG", itemLoaded),
    qicon : loadImage("assets/pictures/character/qicon.png", itemLoaded),
    rqicon : loadImage("assets/pictures/character/rqicon.png", itemLoaded),
    wicon : loadImage("assets/pictures/character/wicon.png", itemLoaded),
    rwicon : loadImage("assets/pictures/character/rwicon.jpg", itemLoaded),
    eicon : loadImage("assets/pictures/character/eicon.png", itemLoaded),
    reicon : loadImage("assets/pictures/character/reicon.png", itemLoaded),
    ricon : loadImage("assets/pictures/character/ricon.jpg", itemLoaded),
    overlay : loadImage("assets/pictures/character/overlay.png", itemLoaded),
    statsicon : loadImage("assets/pictures/character/statsicon.gif", itemLoaded),
    passiveicon : loadImage("assets/pictures/character/passive.jpg", itemLoaded),
    passive1icon : loadImage("assets/pictures/character/passive1.png", itemLoaded),
    passive2icon : loadImage("assets/pictures/character/passive2.png", itemLoaded),
    qsound : loadSound("assets/sounds/qsound.wav", itemLoaded),
    rqsound : loadSound("assets/sounds/rqsound.wav", itemLoaded),
    wsound1 : loadSound("assets/sounds/projectile1.wav", itemLoaded),
    wsound2 : loadSound("assets/sounds/projectile2.wav", itemLoaded),
    wsound3 : loadSound("assets/sounds/projectile3.wav", itemLoaded),
    esound : loadSound("assets/sounds/esound.wav", itemLoaded),
    rsound : loadSound("assets/sounds/rsound.wav", itemLoaded),
    whit : loadSound("assets/sounds/whit.wav", itemLoaded),
    holyfire : loadImage("assets/pictures/character/holyfire.png", itemLoaded),
    angelicshield : loadImage("assets/pictures/character/angelicshield.png", itemLoaded),
    haste : loadImage("assets/pictures/character/haste.png", itemLoaded),
  };

}

//Loads in all the items into its class and created the 2d array for in-game shop
function loadItems() {

  items = {

    //item creation separated by categories
    infinityEdge : new Item("Infinity Edge", width * 0.15, height * 0.05, width * 0.05, width * 0.05, loadImage("assets/pictures/items/infinityEdge.png"), "assets/cursors/startgame.cur", [25, 104, 232], [93, 152, 247], 1),
    essenceReaver : new Item("Essence Reaver", width * 0.225, height * 0.05, width * 0.05, width * 0.05, loadImage("assets/pictures/items/essenceReaver.png"), "assets/cursors/startgame.cur", [25, 104, 232], [93, 152, 247], 2),
    stormRazor : new Item("Storm Razor", width * 0.3, height * 0.05, width * 0.05, width * 0.05, loadImage("assets/pictures/items/stormRazor.png"), "assets/cursors/startgame.cur", [25, 104, 232], [93, 152, 247], 3),
    starfireSpellblade : new Item("Starfire Spellbalde", width * 0.375, height * 0.05, width * 0.05, width * 0.05, loadImage("assets/pictures/items/starfireSpellblade.jpg"),"assets/cursors/startgame.cur", [25, 104, 232], [93, 152, 247], 4),
    lastWhisper : new Item("Last Whisper", width * 0.45, height * 0.05, width * 0.05, width * 0.05, loadImage("assets/pictures/items/lastWhisper.png"),"assets/cursors/startgame.cur", [25, 104, 232], [93, 152, 247], 5),
    frostMourne : new Item("Frost Mourne", width * 0.525, height * 0.05, width * 0.05, width * 0.05, loadImage("assets/pictures/items/frostMourne.png"), "assets/cursors/startgame.cur", [25, 104, 232], [93, 152, 247], 6),

    rapidFirecannon : new Item("Rapid Firecannon", width * 0.15, height * 0.2, width * 0.05, width * 0.05, loadImage("assets/pictures/items/rapidFirecannon.png"), "assets/cursors/startgame.cur", [221, 239, 57], [93, 152, 247], 7),
    thoridal : new Item("Thori'dal, Star's Fury", width * 0.225, height * 0.2, width * 0.05, width * 0.05, loadImage("assets/pictures/items/thoridal.jpg"), "assets/cursors/startgame.cur", [221, 239, 57], [93, 152, 247], 8),
    staticShiv : new Item("Statikk Shiv", width * 0.3, height * 0.2, width * 0.05, width * 0.05, loadImage("assets/pictures/items/staticShiv.png"), "assets/cursors/startgame.cur", [221, 239, 57], [93, 152, 247], 9),
    runnansHurricane : new Item("Runnan's Hurricane", width * 0.375, height * 0.2, width * 0.05, width * 0.05, loadImage("assets/pictures/items/runnansHurricane.png"),"assets/cursors/startgame.cur", [221, 239, 57], [93, 152, 247], 10),
    phantomDancer : new Item("Phantom Dancer", width * 0.45, height * 0.2, width * 0.05, width * 0.05, loadImage("assets/pictures/items/phantomDancer.png"), "assets/cursors/startgame.cur", [221, 239, 57], [93, 152, 247], 11),
    nashorsTooth : new Item("Nashor's Tooth", width * 0.525, height * 0.2, width * 0.05, width * 0.05, loadImage("assets/pictures/items/nashorsTooth.png"),"assets/cursors/startgame.cur", [221, 239, 57], [93, 152, 247], 12),

    ludensEcho : new Item("Luden's Echo", width * 0.15, height * 0.35, width * 0.05, width * 0.05, loadImage("assets/pictures/items/ludensEcho.png"), "assets/cursors/startgame.cur", [177, 30, 191], [93, 152, 247], 13),
    rabadonsDeathcap : new Item("Rabadon's Deathcap", width * 0.225, height * 0.35, width * 0.05, width * 0.05, loadImage("assets/pictures/items/rabadonsDeathcap.png"), "assets/cursors/startgame.cur", [177, 30, 191], [93, 152, 247], 14),
    voidStaff : new Item("Void Staff", width * 0.3, height * 0.35, width * 0.05, width * 0.05, loadImage("assets/pictures/items/voidStaff.png"), "assets/cursors/startgame.cur", [177, 30, 191], [93, 152, 247], 15),
    lichBane : new Item("Lich Bane", width * 0.375, height * 0.35, width * 0.05, width * 0.05, loadImage("assets/pictures/items/lichBane.png"), "assets/cursors/startgame.cur", [177, 30, 191], [93, 152, 247], 16),
    liandrysTorment : new Item("Liandry's Torment", width * 0.45, height * 0.35, width * 0.05, width * 0.05, loadImage("assets/pictures/items/liandrysTorment.png"),"assets/cursors/startgame.cur", [177, 30, 191], [93, 152, 247], 17),
    hextechGunblade : new Item("Hextech Gunblade", width * 0.525, height * 0.35, width * 0.05, width * 0.05, loadImage("assets/pictures/items/hextechGunblade.png"),"assets/cursors/startgame.cur", [177, 30, 191], [93, 152, 247], 18),

    deadmansPlate : new Item("Dead Man's Plate", width * 0.15, height * 0.5, width * 0.05, width * 0.05, loadImage("assets/pictures/items/deadmansPlate.png"), "assets/cursors/startgame.cur", [214, 80, 23], [93, 152, 247], 19),
    randuinsOmen : new Item("Randuin's Omen", width * 0.225, height * 0.5, width * 0.05, width * 0.05, loadImage("assets/pictures/items/randuinsOmen.png"),"assets/cursors/startgame.cur", [214, 80, 23], [93, 152, 247], 20),
    thornMail : new Item("Thornmail", width * 0.3, height * 0.5, width * 0.05, width * 0.05, loadImage("assets/pictures/items/thornMail.png"), "assets/cursors/startgame.cur", [214, 80, 23], [93, 152, 247], 21),
    sunfireCape : new Item("Sunfire Cape", width * 0.375, height * 0.5, width * 0.05, width * 0.05, loadImage("assets/pictures/items/sunfireCape.png"),"assets/cursors/startgame.cur", [214, 80, 23], [93, 152, 247], 22),
    zhonyasHourglass : new Item("Zhonya's Hourglass", width * 0.45, height * 0.5, width * 0.05, width * 0.05, loadImage("assets/pictures/items/zhonyasHourglass.png"),"assets/cursors/startgame.cur", [214, 80, 23], [93, 152, 247], 23),
    thunderFury : new Item("Thunderfury", width * 0.525, height * 0.5, width * 0.05, width * 0.05, loadImage("assets/pictures/items/thunderFury.png"),"assets/cursors/startgame.cur", [214, 80, 23], [93, 152, 247], 24),

    abyssalMask : new Item("Abyssal Mask", width * 0.15, height * 0.65, width * 0.05, width * 0.05, loadImage("assets/pictures/items/abyssalMask.png"),"assets/cursors/startgame.cur", [94, 44, 135], [93, 152, 247], 25),
    spiritVisage : new Item("Spirit Visage", width * 0.225, height * 0.65, width * 0.05, width * 0.05, loadImage("assets/pictures/items/spiritVisage.png"), "assets/cursors/startgame.cur", [94, 44, 135], [93, 152, 247], 26),
    adaptiveHelm : new Item("Adaptive Helm", width * 0.3, height * 0.65, width * 0.05, width * 0.05, loadImage("assets/pictures/items/adaptiveHelm.png"),"assets/cursors/startgame.cur", [94, 44, 135], [93, 152, 247], 27),
    bansheesVeil : new Item("Banshee's Veil", width * 0.375, height * 0.65, width * 0.05, width * 0.05, loadImage("assets/pictures/items/bansheesVeil.png"), "assets/cursors/startgame.cur", [94, 44, 135], [93, 152, 247], 28),
    hexDrinker : new Item("Hex Drinker", width * 0.45, height * 0.65, width * 0.05, width * 0.05, loadImage("assets/pictures/items/hexDrinker.png"), "assets/cursors/startgame.cur", [94, 44, 135], [93, 152, 247], 29),
    trinityForce : new Item("Trinity Force", width * 0.525, height * 0.65, width * 0.05, width * 0.05, loadImage("assets/pictures/items/trinityForce.png"), "assets/cursors/startgame.cur", [94, 44, 135], [93, 152, 247], 30),

  };

  //shop 2-d array
  inGameShop = [[items.infinityEdge, items.essenceReaver, items.stormRazor, items.starfireSpellblade, items.lastWhisper, items.frostMourne], 
    [items.rapidFirecannon, items.thoridal, items.staticShiv, items.runnansHurricane, items.phantomDancer, items.nashorsTooth],
    [items.ludensEcho, items.rabadonsDeathcap, items.voidStaff, items.lichBane, items.liandrysTorment, items.hextechGunblade],
    [items.deadmansPlate, items.randuinsOmen, items.thornMail, items.sunfireCape, items.zhonyasHourglass, items.thunderFury],
    [items.abyssalMask, items.spiritVisage, items.adaptiveHelm, items.bansheesVeil, items.hexDrinker, items.trinityForce]];

}  

//load summoner spells and push them into a list
function loadSummoners() {

  summoners = {

    ignite : new Summoners (width * 0.475, height * 0.1, width * 0.1, height * 0.2, loadSound("assets/sounds/ignite.wav"), loadImage("assets/pictures/ignite.png"),"assets/cursors/gotomenu.cur", [53, 0, 96], [255, 10, 218], 1),
    clarity : new Summoners (width * 0.1, height * 0.4, width * 0.1, height * 0.2, loadSound("assets/sounds/clarity.mp3"), loadImage("assets/pictures/clarity.png"), "assets/cursors/gotomenu.cur", [53, 0, 96], [255, 10, 218], 2),
    heal : new Summoners (width * 0.225, height * 0.1, width * 0.1, height * 0.2, loadSound("assets/sounds/heal.wav"), loadImage("assets/pictures/heal.png"), "assets/cursors/gotomenu.cur", [53, 0, 96], [255, 10, 218], 3),
    barrier  :new Summoners (width * 0.35, height * 0.1, width * 0.1, height * 0.2, loadSound("assets/sounds/barrier.wav"), loadImage("assets/pictures/barrier.jpg"), "assets/cursors/gotomenu.cur", [53, 0, 96], [255, 10, 218], 4),
    flash : new Summoners (width * 0.1, height * 0.1, width * 0.1, height * 0.2, loadSound("assets/sounds/flashsound.wav"), loadImage("assets/pictures/flash.jpg"), "assets/cursors/gotomenu.cur", [53, 0, 96], [255, 10, 218], 5),

  };

  allSummoners = [summoners.ignite, summoners.clarity, summoners.heal, summoners.barrier, summoners.flash];

}
  
//Superclass that encompasses the basic coordinates
class GameObject {
  constructor(x, y, width, height) {
    //position cords
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.mouse;
  }

  //check mouseover
  checkMouse() {
    this.mouse = mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height;
  }
}

//class for Mystic Shot projectiles, responsible for displaying, creating hitbox, and running each projectile, also carries a damage value
class Bolt extends GameObject {
  constructor(x, y, width, height, type, orientation, damage, magicpenetration, vx, vy, theta, id) {
    super(x, y, width, height);
    if (orientation === 1) {
      if (type === 1) {
        this.image = player.projectile1;
      }
      if (type === 2) {
        this.image = player.projectile2;
      }
    }

    if (orientation === 0) {
      if (type === 1) {
        this.image = player.projectile1b;
      }
      if (type === 2) {
        this.image = player.projectile2b;
      }
    }
    let tempdmg = damage;
    if (buffs.holyfire) {
      tempdmg = tempdmg * 1.1;
    }
    if (buffs.ignite) {
      tempdmg = tempdmg * 1.1;
    }
    this.damage = tempdmg;
    this.magicpen = magicpenetration;
    this.vx = vx;
    this.vy = vy;
    this.theta = theta;
    this.id = id;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;  
  }

  hitbox() {
    let hitx = this.x;
    let hity = this.y;
    let hitwidth = this.width;
    let hitheight = this.height;
    bolthitbox[this.id][0] = createVector(hitx, hity);
    bolthitbox[this.id][1] = createVector(hitx + hitwidth, hity);
    bolthitbox[this.id][2] = createVector(hitx + hitwidth, hity + hitheight);
    bolthitbox[this.id][3] = createVector(hitx, hity + hitheight);
  }

  display() {
    push();
    translate(this.x + this.width / 2, this.y + this.width / 2);
    rotate(this.theta);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    imageMode(CORNER);
    pop();
  }

}

//Extension class responsible for clickable buttons
class Button extends GameObject {
  constructor(x, y, width, height, buttonText, textSize, textColor, clickedOn, hoverCursor) {
    super(x, y, width, height);
    this.buttonText = buttonText;
    this.textColor = textColor;
    this.textSize = textSize;
    this.clickedOn = clickedOn;
    this.hoverCursor = hoverCursor;
  }

  //function to call to use buttons previously created
  run() {
    this.checkMouse();

    fill(65, 155, 255);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    if(this.mouse) {
      cursor(this.hoverCursor);
      image(images.buttonborder2, this.x - this.width * 0.026, this.y - this.height * 0.2, this.width * 1.052, this.height * 1.43);
    }
    else {
      image(images.buttonborder, this.x - this.width * 0.026, this.y - this.height * 0.2, this.width * 1.052, this.height * 1.43);
    }

    fill(this.textColor);
    strokeWeight(1);
    textSize(this.textSize);
    text(this.buttonText, this.x + this.width / 2, this.y + this.height / 2);

    if(this.mouse && mouseIsPressed && !globalMouse) {
      globalMouseToggle = 1;
      this.clickedOn();
    }

  }
}

//Extension class responsible for items used in the 2d array
class Item extends GameObject {
  constructor(name, x, y, width, height, picture, hoverCursor, borderColor, hoverBorderColor, itemID) {
    super(x, y, width, height);
    this.name = name;
    this.icon = picture;
    this.hoverCursor = hoverCursor;
    this.borderColor = borderColor;
    this.hoverBorderColor = hoverBorderColor;
    this.itemID = itemID;
  }

  //Function used to call when displaying the shop/all the items
  run() {
    this.checkMouse(); 

    noFill();
    strokeWeight(7.5);

    if(this.itemID === currentItem) {
      image(images.border3, this.x - this.width * 0.028, this.y - this.height * 0.08, this.width * 1.066, this.height * 1.12);
    }
    else if (this.mouse) {
      image(images.border2, this.x - this.width * 0.028, this.y - this.height * 0.08, this.width * 1.066, this.height * 1.12);
    }
    else {
      image(images.border, this.x - this.width * 0.028, this.y - this.height * 0.08, this.width * 1.066, this.height * 1.12);
    }

    if (mouseX >= this.x && mouseY >= this.y && mouseX <= this.x + this.width && mouseY <= this.y + this.height) {
      cursor("assets/cursors/gotomenu.cur");
    }

    image(this.icon, this.x, this.y, this.width, this.height);

    if(this.mouse && mouseIsPressed && !globalMouse) {
      globalMouseToggle = 1;
      currentItem = this.itemID;
      if (volumeControl) {
        sound.clickItem.setVolume(0.1);
        sound.clickItem.play();
      }
    }

  }
}

//class for range attack cannon monsters, including basic functionality scripts
class Cannons extends GameObject {

  constructor(x, y, width, height, direction, damage, id) {
    super(x, y, width, height);
    this.health = 20 + sq(stats.lvl) * 1.5 + sq(inventory.length) * 5;
    this.maxhp = 20 + sq(stats.lvl) * 1.5 + sq(inventory.length) * 5;
    this.magicresist = 5 + stats.lvl * 0.5 + inventory.length;
    this.armor = 5 + stats.lvl * 0.5 + inventory.length;
    this.speed = width * 0.01;
    this.direction = direction;
    this.id = id;
    this.damage = damage;

    this.spawntime = timer;

    //damage display portion
    this.showdamage = false;
    this.damagedisplay = false;
    this.critdmg = false;
    this.damagetaken = 0;
    this.starttime = -500;
  }

  display() {

    image(images.enemyCannon, this.x, this.y, this.width, this.height);
    stroke(0);
    noFill();
    rect(this.x, this.y - height * 0.03, this.width, height * 0.018);
    fill(249, 22, 26);
    rect(this.x, this.y - height * 0.03, this.width * (this.health / this.maxhp), height * 0.018);
    noStroke();
    fill(255);
    textSize(width / 120);
    text(ceil(this.health) + "/" + ceil(this.maxhp), this.x + this.width / 2, this.y - height * 0.0195);

  }

  move() {
    if (this.direction === 1) {
      this.x += this.speed;
    }
    else if (this.direction === 0){
      this.x -= this.speed;
    }
  }

  hitbox() {
    let hitx = this.x;
    let hity = this.y;
    let hitwidth = this.width;
    let hitheight = this.height;
    enemyminionhitbox[this.id][0] = createVector(hitx, hity);
    enemyminionhitbox[this.id][1] = createVector(hitx + hitwidth, hity);
    enemyminionhitbox[this.id][2] = createVector(hitx + hitwidth, hity + hitheight);
    enemyminionhitbox[this.id][3] = createVector(hitx, hity + hitheight);
  }

  showdmg(crit, damagevalue) {

    if (this.showdamage) {
      this.starttime = millis();
      this.damagedisplay = true;
      this.showdamage = false;
    }

    if (this.damagedisplay) {
      if (crit) {
        fill(249, 22, 26);
        strokeWeight(3);
        textSize(width / 50);
      }
      else {
        fill(255);
        strokeWeight(3);
        textSize(width / 80);
      }
      noStroke();
      text("- " + floor(damagevalue), this.x + this.width / 2, this.y - height * 0.05 * (millis() - this.starttime) / 750);
      strokeWeight(1);

    }

    if (millis() - this.starttime >= 750 && this.starttime !== -500) {
      this.damagedisplay = false;
      this.starttime = -500;
    }

  }


  //creates a projectile with a damage value
  attack() {

    let x;
    let y;
    let theta;
    x = charpos.x + charpos.width / 2 - (this.x + this.width / 2);
    y = charpos.y + charpos.height / 2 - (this.y + this.height / 2);
    theta = atan(x / y);
    let vx = abs(width * 0.0085 * sin(theta));
    let vy = abs(width * 0.0085 * cos(theta));
    if (x < 0) {
      vx = vx * -1;
    }
    if (y < 0) {
      vy = vy * -1;
    }

    if (theta > 0) {
      theta = PI / 2 - theta;
    }
    else if (theta < 0) {
      theta = 3 * PI / 2 - theta;
    }

    cannonbolthitbox.push([]);
    cannonbolts.push(new Cannonbolt(this.x + this.width / 2, this.y + this.height / 2, vx, vy, theta, cannonbolthitbox.length - 1, this.damage));
    
  }

}

//class for the projectile created by Cannons, including basic functionality scripts
class Cannonbolt extends GameObject {
  constructor(x, y, vx, vy, theta, projectilenumber, damage) {
    super(x, y);
    this.width = width * 0.065;
    this.height = height * 0.03;
    this.vx = vx;
    this.vy = vy;
    this.id = projectilenumber;
    this.image = images.cannonbolt;
    this.theta = theta;
    this.damage = damage;
  }

  run () {
    this.x += this.vx;
    this.y += this.vy;
  }

  hitbox() {
    let hitx = this.x - this.width / 2;
    let hity = this.y;
    let hitwidth = this.width;
    let hitheight = this.height;
    cannonbolthitbox[this.id][0] = createVector(hitx, hity);
    cannonbolthitbox[this.id][1] = createVector(hitx + hitwidth * cos(this.theta), hity + hitwidth * sin(this.theta));
    cannonbolthitbox[this.id][2] = createVector(hitx + hitwidth * cos(this.theta) - hitheight * sin(this.theta), hity + hitwidth * sin(this.theta) + hitheight * cos(this.theta));
    cannonbolthitbox[this.id][3] = createVector(hitx - hitheight * sin(this.theta), hity + hitheight * cos(this.theta));
  }

  display() {
    fill(0);
    push();
    translate(this.x - this.width / 2, this.y);
    rotate(this.theta);
    imageMode(CORNER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

}

//class for summoner ability selection in pre-game shop
class Summoners extends GameObject {
  constructor(x, y, width, height, sound, picture, hoverCursor, borderColor, hoverBorderColor, summonerID) {
    super(x, y, width, height);
    this.icon = picture;
    this.sound = sound;
    this.hoverCursor = hoverCursor;
    this.borderColor = borderColor;
    this.hoverBorderColor = hoverBorderColor;
    this.summonerID = summonerID;
  }

  //Function used to call when displaying the shop/all the items
  run() {
    this.checkMouse(); 

    noFill();
    strokeWeight(7.5);

    if(this.summonerID === currentSummoner) {
      image(images.border3, this.x - this.width * 0.028, this.y - this.height * 0.08, this.width * 1.066, this.height + this.height * 0.12);
    }
    else if (this.mouse) {
      image(images.border2, this.x - this.width * 0.028, this.y - this.height * 0.08, this.width * 1.066, this.height + this.height * 0.12);
    }
    else {
      image(images.border, this.x - this.width * 0.028, this.y - this.height * 0.08, this.width * 1.066, this.height + this.height * 0.12);
    }

    if (mouseX >= this.x && mouseY >= this.y && mouseX <= this.x + this.width && mouseY <= this.y + this.height) {
      cursor("assets/cursors/gotomenu.cur");
    }

    image(this.icon, this.x, this.y, this.width, this.height);

    if(this.mouse && mouseIsPressed && !globalMouse) {
      globalMouseToggle = 1;
      currentSummoner = this.summonerID;
      if (volumeControl) {
        this.sound.setVolume(0.1);
        this.sound.play();
      }
    }

  }
}

//function called when all the loading is done, initializing buttons
function createButtons() {

  openShopButton = new Button(width * 0.35, height * (13/24), width * 0.3, height / 8, "Loadout", width / 55, 0, openShop, "assets/cursors/shop.cur");
  shopToMenuButton = new Button(width * 0.35, height * 0.85, width * 0.3, height * 0.1, "Done", width / 55, 0, shopToMenu, "assets/cursors/shop.cur");
  gameoverToMenuButton = new Button(width * 0.35, height * 0.85, width * 0.3, height * 0.1, "Return To Menu", width / 55, 0, gmToMenu, "assets/cursors/gotomenu.cur");
  openInGameShop = new Button(width * 0.603, height * 0.9675, width * 0.099, height * 0.025, "", 0, 0, openInGameShopMenu, "assets/cursors/shop.cur");
  selectSummoner = new Button(width * 0.625, height * 0.7, width * 0.1, height * 0.05, "Equip to D", width / 70, 0, selecttoD, "assets/cursors/gotomenu.cur");
  selectSummoner2 = new Button(width * 0.775, height * 0.7, width * 0.1, height * 0.05, "Equip to F", width / 70, 0, selecttoF, "assets/cursors/gotomenu.cur");

}

//button function that opens the shop
function openShop() {
  state = "shop";
  currentSummoner = 0;
  if (volumeControl) {
    sound.openstore.setVolume(0.05);
    sound.openstore.play();
  }
}

//button function that closes the shop
function shopToMenu() {
  state = "menu";
  currentSummoner = 0;
  if (volumeControl) {
    sound.closestore.setVolume(0.05);
    sound.closestore.play();
  }
  icon = {
    flash : false,
    heal : false,
    clarity : false,
    ignite : false,
    barrier : false,
  };
}

//button function that returned to the main menu from gameover screen
function gmToMenu() {
  state = "menu";
  resetGame();
  if (volumeControl) {
    sound.startgame.play();
  }
}

//function that opens the in-game item shop
function openInGameShopMenu() {

  shopSubstate = !shopSubstate;
  if (!shopSubstate) {
    currentItem = 0;
    if (volumeControl) {
      sound.closestore.setVolume(0.1);
      sound.closestore.play();
    }
  }
  else if (shopSubstate && volumeControl) {
    sound.openstore.setVolume(0.1);
    sound.openstore.play();
  }
  destinationpos = {
    x : charpos.x,
    y : charpos.y,
  };

}

//equip selected summoner to D key
function selecttoD() {

  if (currentSummoner === summonerF) {
    let temp = summonerDicon;
    summonerDicon = summonerFicon;
    summonerFicon = temp;
    summonerF = summonerD;
    summonerD = currentSummoner;
  }

  else {
    for (let i = 0; i < allSummoners.length; i++) {
      if (allSummoners[i].summonerID === currentSummoner) {
        summonerDicon = allSummoners[i].icon;
      }
    }
    summonerD = currentSummoner;
  }

  if (volumeControl) {
    sound.buyItem.setVolume(0.1);
    sound.buyItem.play();
  }

}

//equip selected summoner to F key
function selecttoF() {

  if (currentSummoner === summonerD) {
    let temp = summonerFicon;
    summonerFicon = summonerDicon;
    summonerDicon = temp;
    summonerD = summonerF;
    summonerF = currentSummoner;
  }

  else {
    for (let i = 0; i < allSummoners.length; i++) {
      if (allSummoners[i].summonerID === currentSummoner) {
        summonerFicon = allSummoners[i].icon;
      }
    }
    summonerF = currentSummoner;
  }
  if (volumeControl) {
    sound.buyItem.setVolume(0.1);
    sound.buyItem.play();
  }

}

//assign initial values and default stats to variables and arrays
function loadData() {

  state = "menu";
  shopSubstate = false;
  currentItem = 0;
  currentSummoner = 0;
  translatecount = 0;
  cannonbolts = [];
  cannonbolthitbox = [];
  bolthitbox = [];
  playerhitbox = [];
  enemyminionhitbox = [];
  qhitbox = [];
  ehitbox = [];
  excessls = 0;
  abilitytiming = {
    r : -500,
    ignite : -500,
    barrier : -500,
    supernova : -500,
  };
  summonerD = 5;
  summonerDicon = images.flash;
  summonerF = 3;
  summonerFicon = images.heal;
  bolts = [];
  buffs = {
    barrier : false,
    ignite : false,
    angelicshield : false,
    holyfire : false,    
    haste : false,
  };
  abilitycosts = {
    q : 15,
    w : 35,
    e : 10,
    r : 100,
    d : 0,
    f : 0,
  };
  cds = {
    q : 3,
    w : 8,
    e : 5,
    r : 80,
    d : 0,
    f : 0,
  };
  castability = {
    q : false,
    w : false,
    e : false,
    r : false,
  },
  cdcharge = {
    q : cds.q,
    w : cds.w,
    e : cds.e,
    r : cds.r,
    d : 0,
    f : 0,
  };
  castTime = {
    q : 650,
    w : 200,
    e : 420,
    r : 50,
  };
  itemabilities = {
    infegde : false,
    manaharvest : false,
    quickdash : false,
    culling : false,
    maxhpdmg : false,
    multishot : false,
    supernova : false,
    lightningbolt : false,
    hurricane : false,
    tripleedmg : false,
    morertimer : false,
    nocrit : false,
    lichbane : false,
    maxhpmagicdmg : false,
    movespeed : false,
  };
  tstatus = false;
  invins = false;
  loadCount = 0;
  rmode = false;
  statsToggle = false;
  stats = {
    health : 500,
    maxhp : 500,
    mana : 200,
    maxmana : 200,
    ad : 20,
    ap : 0,
    crit : 0,
    cdr : 0,
    armor : 0,
    mr : 0,
    armorpen : 0,
    magicpen : 0,
    hpregen : 4,
    manaregen : 5,
    speed : 0,
    xp : 0,
    lvlupxp : 100,
    lvl : 1,
    gold : 100000,
    lifesteal : 0,
  };
  texts = {
    effect1 : "",
    effect2 : "",
    effect3 : "",
    effect4 : "",
    effect5 : "",
    effect6 : "",
    effect7 : "",
    additionaltexts : "",
    additionaltexts2 : "",
  };
  charpos = {
    x : width / 2,
    y : height / 2,
    width : 0.044,
    height : 0.09,
  };
  destinationpos = {
    x : charpos.x,
    y : charpos.y,
  };
  velocity = {
    x : 0,
    y : 0,
  };
  timer = 0;
  difficulty = 2500;

}

//tracks the number and percentage of total files loaded
function itemLoaded() {
  loadCount += 1;
}

//function drawing the background
function drawBackground() {
  background(bg);
}

function itemEffects() {

  //stormrazor static ability
  if (itemabilities.quickdash) {
    cds.e = 1;
  }

  //supernova recharge
  if (abilitytiming.supernova !== -500 && timer - abilitytiming.supernova >= 60) {
    abilitytiming.supernova = -500;
    itemabilities.supernova = true;
  }

}

//basic game cursor, called here to be overwritten later if needed
function showCursor() {

  cursor("assets/cursors/gamecursor1.cur");

}

//menuscreen using rectangles and text boxes, including hovering lighting and changing cursors
function showMenus() {

  if (state === "menu") {

    textAlign(CENTER, CENTER);
    rectMode(CORNER);
    image(titlepic, width * 0.2, height * 0.1, width * 0.6, height * 0.15);
    
    noStroke();
    if (loadCount < files) {
      fill(65, 155, 255, 155);
    }
    else if (mouseX >= width * 0.25 && mouseX <= width * 0.75 &&
      mouseY >= height * 0.75 && mouseY <= height / 4 * 3 + height / 6 && loadCount === files) {
      fill(65, 155, 255);
      cursor("assets/cursors/startgame.cur");
    }
    else {
      fill(65, 155, 255);
    }
    rect(width * 0.25, height * 0.75, width * 0.5 / files * loadCount, height / 6);

    if (loadCount < files) {
      image(images.startgameborder, width * 0.235, height * 0.705, width * 0.53, height * 0.235);
    }
    else if (mouseX >= width * 0.25 && mouseX <= width * 0.75 &&
      mouseY >= height * 0.75 && mouseY <= height / 4 * 3 + height / 6 && loadCount === files) {
      image(images.startgameborder2, width * 0.235, height * 0.705, width * 0.53, height * 0.235);
    }
    else {
      image(images.startgameborder, width * 0.235, height * 0.705, width * 0.53, height * 0.235);
    }
    

    fill(0);
    textSize(32);
    if (loadCount < files) {
      text("Loading...(" + floor(loadCount / files * 100) + "%)", width / 2, height * (27/32));
    }
    if (loadCount === files) {
      
      openShopButton.run();
      textSize(55);
      text("Start", width / 2, height * (27/32));

    }
  }

}

//shop menu
function showShop() {
  if (state === "shop") {

    shopToMenuButton.run();

    summoners.ignite.run();
    summoners.heal.run();
    summoners.clarity.run();
    summoners.barrier.run();
    summoners.flash.run();

    if (currentSummoner !== 0) {


      texts.effect1 = "";
      texts.effect2 = "";
      texts.effect3 = "";
      texts.effect4 = "";
      texts.effect5 = "";
      texts.effect6 = "";

    
      summonerInfo();

      fill(232, 199, 227);
      strokeWeight(5);
      stroke(86, 5, 74);
      rect(width * 0.6, height * 0.02, width * 0.3, height * 0.8);
  
      textSize(width / 30);
      fill(209, 20, 180);
      text("Summoner Spell", width * 0.75, height * 0.08);

      noStroke();
      fill(0);
      textSize(width / 40);
      textStyle(BOLD);
      stroke(86, 5, 74);
      if (currentSummoner === 1) {
        fill(226, 20, 20);
      }
      else if (currentSummoner === 2) {
        fill(32, 76, 252);
      }
      else if (currentSummoner === 3) {
        fill(39, 181, 3);
      }
      else if (currentSummoner === 4) {
        fill(255, 258, 53);
      }
      else if (currentSummoner === 5) {
        fill(223, 252, 5);
      }
      text(texts.effect1, width * 0.749, height * 0.17);
      textSize(width / 65);
      textStyle(NORMAL);
      noStroke();
      fill(0);
      text(texts.effect2, width * 0.749, height * 0.25);
      text(texts.effect3, width * 0.749, height * 0.3);
      text(texts.effect4, width * 0.749, height * 0.35);
      text(texts.effect5, width * 0.749, height * 0.4);
      text(texts.effect6, width * 0.749, height * 0.45);

      if (summonerD !== currentSummoner) {
        selectSummoner.run();
      }
      if (summonerF !== currentSummoner) {
        selectSummoner2.run();
      }

      image(summonerDicon, width * 0.625, height * 0.5, width * 0.1, height * 0.18);
      image(summonerFicon, width * 0.775, height * 0.5, width * 0.1, height * 0.18);
      
    }
     
  }

  strokeWeight(1);
}

//txt info contained with each summoner ability to display
function summonerInfo() {
  if (currentSummoner === 1) {
    texts.effect1 = "Ignite";
    texts.effect2 = "Strike with a fierce fiery energy,";
    texts.effect3 = "dealing 10% additional damage with";
    texts.effect4 = "all abilities";
    texts.effect5 = "(Increase Critical Strike Damage by 25%)";
    texts.effect6 = "Cooldown: 30 seconds";
  }
  if (currentSummoner === 2) {
    texts.effect1 = "Clarity";
    texts.effect2 = "Have peace with the soul and the mind,";
    texts.effect3 = "restoring 20% of your maximum mana";
    texts.effect6 = "Cooldown: 10 seconds";
  }
  if (currentSummoner === 3) {
    texts.effect1 = "Heal";
    texts.effect2 = "Call upon the energy of life, restoring";
    texts.effect3 = "10% of your maximum health or 25%";
    texts.effect4 = "missing health (whichever is greater)";
    texts.effect6 = "Cooldown: 25 seconds";
  }
  if (currentSummoner === 4) {
    texts.effect1 = "Barrier";
    texts.effect2 = "Gain strength, take 15% reduced damage";
    texts.effect3 = "from ALL sources for 7 seconds";
    texts.effect6 = "Cooldown: 30 seconds";
  }
  if (currentSummoner === 5) {
    texts.effect1 = "Flash";
    texts.effect2 = "Warp time and space, teleporting your";
    texts.effect3 = "character a distance towards your cursor";
    texts.effect6 = "Cooldown: 30 seconds"; 
  }
}

//images responsible for displaying the control of sound
function showSound() {
  if (state !== "game") {
    if (volumeControl) {
      image(soundOn, width * 0.95, height * 0.9, height / 15, height / 15);
    }
    else {
      image(soundOff, width * 0.95, height * 0.9, height / 15, height / 15);
    }
  }
}

//plays the approperiate music for the gamestate
function gameMusic() {

  if (state !== "game" && ! menumusic.isPlaying() && volumeControl) { 
    menumusic.setVolume(1.0);
    menumusic.play();
  }

  if (state === "game" && ! sound.bg.isPlaying() && volumeControl) {
    sound.bg.setVolume(0.2);
    sound.bg.play();  
  }

}

//function used in classes to prevent bugging out or multiclicking buttons
function globalMouseControl() {
  if(globalMouseToggle > 0) {
    globalMouse = globalMouseToggle;
  }
  else if(!mouseIsPressed) {
    globalMouse = 0;
  }
  globalMouseToggle = 0;
}

//diable right clicks in game
function gameMode() {

  document.addEventListener("contextmenu", event => event.preventDefault());

}

//responsible for tracking and displaying the position of the character
function characterPosition() {

  if (state === "game") {

    if (destinationpos.x > charpos.x) {
      direction = "forward";
    }
    else if (destinationpos.x < charpos.x) {
      direction = "backward";
    }

    //these statements determine the correct "animation", or stance of the character
    if (direction === "forward") {

      if (stats.lvl < 6) {
        if (castability.q) {
          playerdisplay = player.charaa1b;
        }
        else if (castability.w) {
          playerdisplay = player.charcast1b;
        }
        else if (castability.e) {
          playerdisplay = player.chardash1b;
        }
        else {
          playerdisplay = player.character1b;
        }
      }
      
      else if (stats.lvl < 12) {
        if (castability.q && ! rmode) {
          playerdisplay = player.charaa2b;
        }
        else if (castability.q && rmode) {
          playerdisplay = player.charq2b;
        }
        else if (castability.w && ! rmode) {
          playerdisplay = player.charcast2b;
        }
        else if (castability.w && rmode) {
          playerdisplay = player.charaltform2b;
        }
        else if (castability.e && ! rmode) {
          playerdisplay = player.chardash1b;
        }
        else if (castability.e && rmode) {
          playerdisplay = player.chardash2b;
        }
        else if (rmode) {
          playerdisplay = player.charaltform2b;
        }
        else {
          playerdisplay = player.character2b;
        }
      }

      else if (stats.lvl >= 12) {
        if (castability.q && ! rmode) {
          playerdisplay = player.charaa2b;
        }
        else if (castability.q && rmode) {
          playerdisplay = player.charq2b;
        }
        else if (castability.w && ! rmode) {
          playerdisplay = player.charcast3b;
        }
        else if (castability.w && rmode) {
          playerdisplay = player.charaltform3b;
        }
        else if (castability.e && ! rmode) {
          playerdisplay = player.chardash1b;
        }
        else if (castability.e && rmode) {
          playerdisplay = player.chardash2b;
        }
        else if (rmode) {
          playerdisplay = player.charaltform3b;
        }
        else {
          playerdisplay = player.character3b;
        }
      }

    }

    else if (direction === "backward") {

      if (stats.lvl < 6) {
        if (castability.q && ! rmode) {
          playerdisplay = player.charaa1;
        }
        else if (castability.w) {
          playerdisplay = player.charcast1;
        }
        else if (castability.e) {
          playerdisplay = player.chardash1;
        }
        else {
          playerdisplay = player.character1;
        }
      }

      else if (stats.lvl < 12) {
        if (castability.q && ! rmode) {
          playerdisplay = player.charaa2;
        }
        else if (castability.q && rmode) {
          playerdisplay = player.charq2;
        }
        else if (castability.w && ! rmode) {
          playerdisplay = player.charcast2;
        }
        else if (castability.w && rmode) {
          playerdisplay = player.charaltform2;
        }
        else if (castability.e && ! rmode) {
          playerdisplay = player.chardash1;
        }
        else if (castability.e && rmode) {
          playerdisplay = player.chardash2;
        }
        else if (rmode) {
          playerdisplay = player.charaltform2;
        }
        else {
          playerdisplay = player.character2;
        }
      }

      else if (stats.lvl >= 12) {
        if (castability.q && ! rmode) {
          playerdisplay = player.charaa2;
        }
        else if (castability.q && rmode) {
          playerdisplay = player.charq2;
        }
        else if (castability.w && ! rmode) {
          playerdisplay = player.charcast3;
        }
        else if (castability.w && rmode) {
          playerdisplay = player.charaltform3;
        }
        else if (castability.e && ! rmode) {
          playerdisplay = player.chardash1;
        }
        else if (castability.e && rmode) {
          playerdisplay = player.chardash2;
        }
        else if (rmode) {
          playerdisplay = player.charaltform3;
        }
        else {
          playerdisplay = player.character3;
        }
      }

    }

    charpos.width = width * 0.065;
    charpos.height = height * 0.11;
    //display
    image(playerdisplay, charpos.x, charpos.y, charpos.width, charpos.height);

    //hitboxes
    playerhitboxes();

  }

}

//hitbox and qe damage
function playerhitboxes() {

  playerhitbox[0] = createVector(charpos.x, charpos.y);
  playerhitbox[1] = createVector(charpos.x + charpos.width, charpos.y);    
  playerhitbox[2] = createVector(charpos.x + charpos.width, charpos.y + charpos.height);    
  playerhitbox[3] = createVector(charpos.x, charpos.y + charpos.height);

  //temporary hitboxes of q and e abilities
  if (! castability.q || ! qup) {
    qup = false;
    qhitbox[0] = createVector(-1000, -1000);
    qhitbox[1] = createVector(-999, -999);
    qhitbox[2] = createVector(-998, -998);
    qhitbox[3] = createVector(-997, -997);
  }

  if (! castability.e || ! eup) {
    eup = false;
    ehitbox[0] = createVector(-1000, -1000);
    ehitbox[1] = createVector(-999, -999);
    ehitbox[2] = createVector(-998, -998);
    ehitbox[3] = createVector(-997, -997);
  }

  if (qup) {
    if (direction === "forward") {
      qhitbox[0] = createVector(charpos.x + charpos.width / 2, charpos.y);
      qhitbox[1] = createVector(charpos.x + charpos.width * 1.15, charpos.y);
      qhitbox[2] = createVector(charpos.x + charpos.width * 1.15, charpos.y + charpos.height);
      qhitbox[3] = createVector(charpos.x + charpos.width / 2, charpos.y + charpos.height);
    }

    if (direction === "backward") {
      qhitbox[0] = createVector(charpos.x + charpos.width / 2, charpos.y);
      qhitbox[1] = createVector(charpos.x - charpos.width * 0.15, charpos.y);
      qhitbox[2] = createVector(charpos.x - charpos.width * 0.15, charpos.y + charpos.height);
      qhitbox[3] = createVector(charpos.x + charpos.width / 2, charpos.y + charpos.height);
    }

    for(let k = enemyminionhitbox.length - 1; k >= 0; k--) {
      hit = collidePolyPoly(qhitbox, enemyminionhitbox[k], true);
      if (hit) {
        qup = false;
        //q damage
        let damage = stats.ad;
        let temp = random(0, 100);
        let crit = false;
        if (rmode) {
          damage = stats.ad * 1.2;
        }
        if (itemabilities.maxhpdmg) {
          damage = damage + enemyMinions[k].health * 0.1;
        }
        if (buffs.holyfire) {
          damage = damage * 1.1;
        }
        if (buffs.ignite) {
          damage = damage * 1.1;
        }
        if (stats.crit >= temp) {
          crit = true;
          if (buffs.ignite) {
            damage = damage * 2.25;
          }
          else {
            damage = damage * 2;
          }
          if (itemabilities.infedge) {
            damage = damage * 1.2;
          }
          if (enemyMinions[k].health - damage <= 0) {
            stats.ad += 1;
          }
        }
        else {
          let temp2 = random(0, 100);
          if (enemyMinions[k].health - damage <= 0 && temp2 <= 15) {
            stats.ad += 1;
          }
        }

        if (itemabilities.culling) {
          let dmgmultiplier1 = (enemyMinions[k].maxhp - enemyMinions[k].health) / enemyMinions[k].maxhp;
          damage = damage + damage * (0.2 * (dmgmultiplier1 / 70));
        }
        
        damage = damage * ((100 - enemyMinions[k].armor) / 100);

        enemyMinions[k].health -= damage;

        let healamount = damage * (stats.lifesteal / 100);
        stats.health += healamount;

        enemyMinions[k].damagetaken = damage;
        enemyMinions[k].critdmg = crit;
        enemyMinions[k].showdamage = true;

      }
    }


  }

  if (eup) {
    ehitbox[0] = createVector(charpos.x, charpos.y);
    ehitbox[1] = createVector(charpos.x + charpos.width, charpos.y);
    ehitbox[2] = createVector(charpos.x + charpos.width, charpos.y + charpos.height); 
    ehitbox[3] = createVector(charpos.x, charpos.y + charpos.height);

    for(let k = enemyminionhitbox.length - 1; k >= 0; k--) {
      hit = collidePolyPoly(ehitbox, enemyminionhitbox[k], true);
      if (hit) {
        eup = false;
        //e damage
        let damage;
        if (rmode) {
          if (stats.ap * 0.5 > stats.ad * 0.3) {
            damage = 15 + stats.ap * 0.5;
          }
          else {
            damage = 15 + stats.ad * 0.3;
          }
        }
        else {
          damage = 10 + stats.ap * 0.25;
        }
        if (buffs.holyfire) {
          damage = damage * 1.1;
        }
        if (buffs.ignite) {
          damage = damage * 1.1;
        }
        if (itemabilities.quickdash) {
          damage = damage * 0.2;
        }
        if (itemabilities.maxhpmagicdmg) {
          damage = damage + enemyMinions[k].maxhp * 0.1;
        }
        if (itemabilities.culling) {
          let dmgmultiplier1 = (enemyMinions[k].maxhp - enemyMinions[k].health) / enemyMinions[k].maxhp;
          damage = damage + damage * (0.2 * (dmgmultiplier1 / 70));
        }

        if (itemabilities.tripleedmg) {
          damage = damage * 3;
        }

        damage = damage * ((100 - enemyMinions[k].magicresist) / 100);
        
        enemyMinions[k].health -= damage;

        let healamount = damage * (stats.lifesteal / 100);
        stats.health += healamount;

        enemyMinions[k].damagetaken = damage;
        enemyMinions[k].critdmg = false;
        enemyMinions[k].showdamage = true;
      }
    }
  }




}

//responsible for determining the relative velocity of the character's movement relative to its destination
function determineVelocity() {

  let x;
  let y;
  let theta;
  // negative x means backward movement
  x = destinationpos.x - charpos.x;
  // negative y means upward movement
  y = destinationpos.y - charpos.y;
  theta = atan(x / y);
  velocity = {
    x : abs(width * 0.002 * sin(theta)) * (1 + stats.speed / 100),
    y : abs(width * 0.002 * cos(theta)) * (1 + stats.speed / 100),
  };
  if (itemabilities.movespeed) {
    let ratio1 = (stats.maxhp - stats.health) / stats.maxhp;
    velocity.x = velocity.x + velocity.x * ratio1;
    velocity.y = velocity.y + velocity.y * ratio1;
  }
  if (x < 0) {
    velocity.x = velocity.x * -1;
  }
  if (y < 0) {
    velocity.y = velocity.y * -1;
  }

}

//responsible for moving the characters according to set restrictions (due to in game graphics) and velocities
function characterMovement() {

  if (!shopSubstate && charpos.x + charpos.width + velocity.x <= width && state === "game" && ! castability.q && ! castability.w && ! castability.e && ! castability.r) {
    if (velocity.x < 0 && charpos.x + velocity.x > destinationpos.x) {
      charpos.x += velocity.x;
    }
    if (velocity.x > 0 && charpos.x + velocity.x < destinationpos.x) {
      charpos.x += velocity.x;
    }
  }

  if (!shopSubstate && charpos.y + velocity.y <= height - charpos.height && state === "game" && ! castability.q && ! castability.w && ! castability.e && ! castability.r) {
    if (velocity.y < 0 && charpos.y + velocity.y > destinationpos.y) {
      charpos.y += velocity.y;
    }
    if (velocity.y > 0 && charpos.y + velocity.y < destinationpos.y) {
      charpos.y += velocity.y;
    }
  }

}

//responsible for keeping a timer which act as a guideline for game difficulty as well as player score and spawn minions
function updateTimer() {

  if (state === "game") {

    textStyle(ITALIC);
    textSize(24); 
    stroke(255, 255, 255);
    fill(0, 255, 180);
    if (!shopSubstate && frameCount % 60 === 0) {
      timer++;
      minionsSpawn();
    }
  }
}

//spawn minions according to restrictions above in the timing function
function minionsSpawn() {

  let temp = random(0, 100);
  if (enemyMinions.length !== 0) {
    if (temp <= 5 + stats.lvl * 0.5 + sq(inventory.length) * 0.5) {
      spawnCannon();
    }
  }
  else {
    spawnCannon();
  }

}

//creates a cannon minion
function spawnCannon() {
  
  enemyminionhitbox.push([]);
  let temp = random(0.1, 0.7);
  enemyMinions.push(new Cannons(width * 0.95, height * temp, width * 0.06, height * 0.1, 0, 10 + stats.lvl * 2 + sq(inventory.length) * 1.5, enemyminionhitbox.length-1));

}

//responsible for the major functionalities of minions including attacking, damage calculation, and hitboxes
function minionFunctions() {

  if (state === "game") {

    for(let i = cannonbolts.length - 1; i >= 0; i--) {

      cannonbolts[i].display();
      cannonbolts[i].hitbox();

      if (! shopSubstate) {

        cannonbolts[i].run();
        
      }

      //delete if out of screen
      if (cannonbolthitbox[cannonbolts[i].id][0].x > width * 1.2 ||
        cannonbolthitbox[cannonbolts[i].id][0].x < width * - 0.2 ||
        cannonbolthitbox[cannonbolts[i].id][0].y > height * 1.2 ||
        cannonbolthitbox[cannonbolts[i].id][0].y < height * - 0.2) {

        cannonbolts.splice(i, 1);
        cannonbolthitbox.splice(i, 1);
        for (let p = i; p <= cannonbolts.length - 1; p++) {
          if (cannonbolts[p].id !== 0) {
            cannonbolts[p].id -= 1;
          }
        }


      }

      //deleted and do damage if hit
      for(let m = cannonbolthitbox.length - 1; m >= 0; m--) {
        hit = collidePolyPoly(cannonbolthitbox[m], playerhitbox, true);
        if (hit && ! castability.e) {
          cannonbolthitbox.splice(m, 1);

          let temp = cannonbolts[m].damage;
          if (buffs.barrier) {
            temp = temp * 0.85;
          }
          if (buffs.angelicshield) {
            temp = temp * 0.9;
          }

          temp = temp * ((100 - stats.mr) / 100);

          stats.health -= temp;
          cannonbolts.splice(m, 1);

          if (volumeControl) {
            sound.cannonhit.setVolume(0.1);
            sound.cannonhit.play();
          }

          for (let p = m; p <= cannonbolts.length - 1; p++) {
            if (cannonbolts[p].id !== 0) {
              cannonbolts[p].id -= 1;
            }
          }
        }
      }

    }

    //delete if out of screen
    for (let l = enemyMinions.length - 1; l >= 0; l--) {
      if (enemyMinions[l].x > width || enemyMinions[l].x + enemyMinions[l].width < 0) {
        enemyMinions.splice(l, 1);
        enemyminionhitbox.splice(l, 1);
        for (let b = l; b <= enemyMinions.length - 1; b++) {
          if (enemyMinions[b].id !== 0) {
            enemyMinions[b].id -= 1;
          }
        }
        stats.health -= 50;
      }
      //or if dead
      else if (enemyMinions[l].health <= 0) {
        enemyMinions.splice(l, 1);
        enemyminionhitbox.splice(l, 1);
        for (let b = l; b <= enemyMinions.length - 1; b++) {
          if (enemyMinions[b].id !== 0) {
            enemyMinions[b].id -= 1;
          }
        }
        if (stats.lvl !== 18) {
          stats.xp += 25;
        }
        stats.gold += 100;
        if (itemabilities.manaharvest) {
          stats.mana += 0.02 * stats.maxmana;
        }
      }
    }

    //minions motion and attack
    for (let k = enemyMinions.length - 1; k >= 0; k--) {

      enemyMinions[k].display();
      enemyMinions[k].hitbox();
      enemyMinions[k].showdmg(enemyMinions[k].critdmg, enemyMinions[k].damagetaken);
      if (! shopSubstate) {
        enemyMinions[k].move();
        if ((timer - enemyMinions[k].spawntime) % 2 === 0 && frameCount % 60 === 0) {
          enemyMinions[k].attack();
          if (volumeControl) {
            sound.cannonfire.setVolume(0.1);
            sound.cannonfire.play();
          }
        }
      }

    }

  }

}

//responsible for the individual movement of all projecties in game
function moveProjectiles() {

  if (state === "game") {
    stroke(0, 0, 255);
    moveBolts();
  }

}

//function to track bolt movement, hitbox, and damage calculation
function moveBolts() {

  for (let k = bolts.length - 1; k >= 0; k--) {

    bolts[k].display();
    bolts[k].hitbox();

    if (! shopSubstate) {
      bolts[k].move();
    }

    //delete if out of screen
    if (bolts[k].x < bolts[k].width * -1 || bolts[k].x > width) {
      bolts.splice(k, 1);
      bolthitbox.splice(k, 1);
      for (let z = k; z <= bolts.length - 1; z++) {
        if (bolts[z].id !== 0) {
          bolts[z].id -= 1;
        }
      }
    }

  }

  //damage if hit
  for (let m = enemyminionhitbox.length - 1; m >= 0; m--) {
    for (let a = bolthitbox.length - 1; a >= 0; a--) {

      hit = collidePolyPoly(bolthitbox[a], enemyminionhitbox[m], true);

      if (hit) {
      
        let temp = random(0, 100);
        let damage = bolts[a].damage;
        let crit = false;
  
        if (stats.crit >= temp) {
          crit = true;
          if (! buffs.ignite) {
            damage = damage * 2;
          }
          else {
            damage = damage * 2.25;
          }
          if (itemabilities.infedge) {
            damage = damage * 1.2;
          }
        }

        if (itemabilities.culling) {
          let dmgmultiplier1 = (enemyMinions[m].maxhp - enemyMinions[m].health) / enemyMinions[m].maxhp;
          damage = damage + damage * (0.2 * (dmgmultiplier1 / 70));
        }

        if (itemabilities.hurricane) {
          damage = damage * 0.65;
        }

        if (itemabilities.maxhpmagicdmg) {
          damage = damage + enemyMinions[k].maxhp * 0.1;
        }

        damage = damage * ((100 - enemyMinions[m].magicresist) / 100);
  
        enemyMinions[m].health -= damage;

        let healamount = damage * (stats.lifesteal / 100);
        stats.health += healamount;

        enemyMinions[m].damagetaken = damage;
        enemyMinions[m].critdmg = crit;
        enemyMinions[m].showdamage = true;

        bolts.splice(a, 1);
        bolthitbox.splice(a, 1);

        if (volumeControl) {
          player.whit.setVolume(0.3);
          player.whit.play();
        }


        for (let n = a; n <= bolts.length - 1; n++) {
          if (bolts[n].id !== 0) {
            bolts[n].id -= 1;
          }
        }
      }
    }

  }

}

//responsible for casting time of abilities and certain functions
function castingAbilities() {

  if (state === "game") {

    //q animation
    if (castability.q) {
      if (millis() - currentTime > castTime.q) {
        castability.q = false;
        destinationpos.x = charpos.x;
        destinationpos.y = charpos.y;
      }
    }

    //casting w animation
    if (castability.w) {
      if (millis() - currentTime > castTime.w) {
        castability.w = false;
        destinationpos.x = charpos.x;
        destinationpos.y = charpos.y;
      }
    }

    //dashing with e
    if (castability.e) {
      if (millis() - currentTime <= castTime.e) {
        charpos.x += dashvelocity.x;
        charpos.y += dashvelocity.y;
      }
      if (millis() - currentTime > castTime.e) {
        castability.e = false;
        destinationpos.x = charpos.x;
        destinationpos.y = charpos.y;
      }
    }

    //casting r ability
    if (castability.r) {
      if (millis() - currentTime > castTime.r) {
        castability.r = false;
        rmode = true;
        destinationpos.x = charpos.x;
        destinationpos.y = charpos.y;
      }
    }

    //times ultimate
    let temp1 = 20000;
    if (itemabilities.morertimer) {
      temp1 = 30000;
    }

    if (millis() - abilitytiming.r >= temp1 && abilitytiming.r !== -500) {
      rmode = false;
      stats.crit -= 10;
      abilitytiming.r = -500;
      cdcharge.q = cds.q;
      cdcharge.w = cds.w;
      cdcharge.e = cds.e;
    }

    //times ignite buff
    if (millis() - abilitytiming.ignite >= 10000 && abilitytiming.ignite !== -500) {
      buffs.ignite = false;
      abilitytiming.ignite = -500;
    }

    //times barrier buff
    if (millis() - abilitytiming.barrier >= 7000 && abilitytiming.barrier !== -500) {
      buffs.barrier = false;
      abilitytiming.barrier = -500;
    }

  }

}

//one the major functions that tracks the stats and status of the character in game and manages how they interact during gameplay
function characterStatus() {

  if (state === "game") { 

    //natural regeneration of stats
    if (!shopSubstate && frameCount % 60 === 0) {
      stats.mana += stats.manaregen;
      stats.health += stats.hpregen;
    }

    levelUp();

    //failsafe of stats
    if (stats.mana <= 0) {
      stats.mana = 0;
    }
    else if (stats.mana >= stats.maxmana) {
      stats.mana = stats.maxmana;
    }

    if (stats.health >= stats.maxhp) {
      stats.health = stats.maxhp;
    }

    if (stats.armor >= 50) {
      stats.armor = 50;
    }
    if (stats.cdr >= 50) {
      stats.cdr = 50;
    }
    if (stats.mr >= 50) {
      stats.mr = 50;
    }
    if (stats.magicpen >= 80) {
      stats.magicpen = 80;
    }
    if (stats.armorpen >= 80) {
      stats.armorpen = 80;
    }
    if (stats.speed >= 100) {
      stats.speed = 60;
    }
    if (! itemabilities.lichbane) {
      if (stats.lifesteal >= 30) {
        excessls += stats.lifesteal - 30;
        stats.lifesteal = 30;
      }
    }
    else {
      stats.hpregen = 0;
    }
    if (itemabilities.nocrit) {
      stats.crit = 0;
    }

    //components of the UI
    blankbars();

    healthbar();

    manabar();

    expbar();

    charpic();

    gold();

    itemDisplay();

    statsMenu();

    abilityicons();
    
    summonericons();

    cooldowns();

    displaybuffs();

    image(player.overlay, width * 0.2, height * 0.8, width * 0.6, height * 0.2);
    
    levelDisplay();

    iteminfodisplay();

    abilityInfoDisplay();

  }

}

//function repsonsible for adding stats when leveling up
function levelUp() {
  
  if (stats.xp >= stats.lvlupxp && stats.lvl <= 17) {
    stats.xp -= stats.lvlupxp;
    stats.lvlupxp += 50;
    stats.lvl += 1;
    if (stats.lvl === 6) {
      stats.speed += 20;
      buffs.haste = true;
    }
    else if (stats.lvl === 12) {
      buffs.angelicshield = true;
    }
    else if (stats.lvl === 16) {
      buffs.holyfire = true;
    }    
    if (stats.lvl === 18) {
      stats.xp = 0;
    }
    stats.maxhp += 50;
    stats.health += 50;
    stats.mana += 20;
    stats.maxmana += 20;
    stats.ad += 5;
    stats.ap += 10;
    stats.hpregen += 0.5;
    stats.manaregen += 0.5;
    if (volumeControl){
      sound.levelUp.setVolume(0.3);
      sound.levelUp.play();
    }
  }

}

//background graphics
function blankbars() {

  stroke(0, 97, 255);
  strokeWeight(3);
  fill(51, 61, 79);

  rect(width * 0.6019, height * 0.88, width * 0.024, height * 0.038);
  rect(width * 0.62855, height * 0.88, width * 0.024, height * 0.038);
  rect(width * 0.65475, height * 0.88, width * 0.024, height * 0.038);
  rect(width * 0.60185, height * 0.92175, width * 0.024, height * 0.038);
  rect(width * 0.62811, height * 0.92175, width * 0.024, height * 0.038);
  rect(width * 0.65495, height * 0.92175, width * 0.024, height * 0.038);
  

  noStroke();
  rect(width * 0.315, height * 0.875, width * 0.03, height * 0.1);

}

//hp bar
function healthbar(){

  stroke(0);
  strokeWeight(2.5);
  
  if (stats.health / stats.maxhp >= 0.6) {
    fill(13, 91, 2);
  }
  else if (stats.health / stats.maxhp >= 0.3) {
    fill(73, 63, 2);
  }
  else {
    fill(112, 16, 16);
  }
  rect(width * 0.349, height * 0.96, width * 0.236, height * 0.015);

  if (stats.health / stats.maxhp >= 0.6) {
    fill(3, 186, 28);
  }
  else if (stats.health / stats.maxhp >= 0.3) {
    fill(219, 186, 2);
  }
  else {
    fill(219, 49, 2);
  }
  noStroke();
  rect(width * 0.349, height * 0.96, width * 0.236 * (stats.health / stats.maxhp), height * 0.015);
  strokeWeight(1);
  stroke(255);
  fill(0);
  textSize(width / 120);
  text(floor(stats.health) + " / " + stats.maxhp, width * 0.465, height * 0.969);

}

//mana bar
function manabar() {

  stroke(0);
  strokeWeight(2.5);
  fill(5, 26, 104);
  rect(width * 0.349, height * 0.975, width * 0.236, height * 0.015);

  fill(2, 36, 209);
  noStroke();
  rect(width * 0.349, height * 0.975, width * 0.236 * (stats.mana / stats.maxmana), height * 0.015);

  strokeWeight(1);
  stroke(255);
  fill(0);
  textSize(width / 120);
  text(floor(stats.mana) + " / " + stats.maxmana, width * 0.465, height * 0.989);

}

//experience bar
function expbar() {

  fill(153, 15, 221);
  noStroke();
  rectMode(CORNERS);
  rect(width * 0.315, height * 0.975, width * 0.345, height * 0.975 - height * 0.1 * (stats.xp / stats.lvlupxp));
  rectMode(CORNER);

}

//player image in UI
function charpic() {
  

  if (stats.lvl < 6) {
    image(player.avatar1, width * 0.27, height * 0.88, width * 0.065, height * 0.1);
  }
  else {
    image(player.avatar2, width * 0.27, height * 0.88, width * 0.065, height * 0.1);
  }

}

//level and gold indicators and level up growth stats
function gold() {

  //gold
  fill(36, 78, 145);
  openInGameShop.run();
  image(images.gold, width * 0.625, height * 0.97, width * 0.016, height * 0.02);
  textSize(width / 120);
  stroke(206, 2552, 0);
  fill(0);
  text(stats.gold, width * 0.66, height * 0.98);
  if (!shopSubstate && frameCount % 60 === 0) {
    stats.gold += 5;
  }

}

//shades ability icons depending on cooldown and mana (and the lack thereof)
function cooldowns() {

  stroke(0, 97, 255);
  fill(51, 61, 79);
  rect(width * 0.38275, height * 0.9383, width * 0.02385, height * 0.008);
  rect(width * 0.420185, height * 0.9383, width * 0.02385, height * 0.008);
  rect(width * 0.4582, height * 0.9383, width * 0.02385, height * 0.008);
  rect(width * 0.495775, height * 0.9383, width * 0.02385, height * 0.008);

  fill(40, 222, 255);
  rect(width * 0.38275, height * 0.9383, width * 0.02385 * (cdcharge.q / cds.q), height * 0.008);
  rect(width * 0.420185, height * 0.9383, width * 0.02385 * (cdcharge.w / cds.w), height * 0.008);
  rect(width * 0.4582, height * 0.9383, width * 0.02385 * (cdcharge.e / cds.e), height * 0.008);
  if (stats.lvl >= 6) {
    rect(width * 0.495775, height * 0.9383, width * 0.02385 * (cdcharge.r / cds.r), height * 0.008);
  }

  //recharging abilities
  rechargeAbilities();

  cooldownBars();

}

function displaybuffs() {

  if (buffs.ignite) {
    stroke(0, 97, 255);
    strokeWeight(3);
    noFill();
    rect(width * 0.34, height * 0.8, width * 0.0145, width * 0.0145);
    image(images.ignite, width * 0.34, height * 0.8, width * 0.015, width * 0.015);
    if (mouseX >= width * 0.34 && mouseX <= width * 0.355 && mouseY >= height * 0.8 && mouseY <= height * 0.83) {
      fill(0, 0, 0, 75);
      rect(mouseX - width * 0.075, mouseY - height * 0.2, width * 0.15, height * 0.15, 25);
      noStroke();
      fill(226, 20, 20);
      textSize(width / 75);
      text("Ignite", mouseX, mouseY - height * 0.165);
      fill(255);
      textSize(width / 120);
      text("This unit is dealing 10%", mouseX, mouseY - height * 0.125);
      text("increased damage, this unit's", mouseX, mouseY - height * 0.105);
      text("critical strikes deal 125% damage", mouseX, mouseY - height * 0.085);
    } 
  } 

  if (buffs.barrier) {
    stroke(0, 97, 255);
    strokeWeight(3);
    noFill();
    rect(width * 0.36, height * 0.8, width * 0.0145, width * 0.0145);
    image(images.barrier, width * 0.36, height * 0.8, width * 0.015, width * 0.015);
    if (mouseX >= width * 0.36 && mouseX <= width * 0.375 && mouseY >= height * 0.8 && mouseY <= height * 0.83) {
      fill(0, 0, 0, 75);
      rect(mouseX - width * 0.075, mouseY - height * 0.2, width * 0.15, height * 0.15, 25);
      noStroke();
      fill(225, 258, 53);
      textSize(width / 75);
      text("Barrier", mouseX, mouseY - height * 0.165);
      fill(255);
      textSize(width / 120);
      text("This unit is taking 15%", mouseX, mouseY - height * 0.125);
      text("reduced damage", mouseX, mouseY - height * 0.105);
    } 
  }

  if (buffs.haste) {
    stroke(0, 97, 255);
    strokeWeight(3);
    noFill();
    rect(width * 0.61, height * 0.8, width * 0.0145, width * 0.0145);
    image(player.haste, width * 0.61, height * 0.8, width * 0.015, width * 0.015);    
    if (mouseX >= width * 0.61 && mouseX <= width * 0.625 && mouseY >= height * 0.8 && mouseY <= height * 0.83) {
      fill(0, 0, 0, 75);
      rect(mouseX - width * 0.075, mouseY - height * 0.2, width * 0.15, height * 0.15, 25);
      noStroke();
      fill(0, 97, 255);
      textSize(width / 75);
      text("Haste", mouseX, mouseY - height * 0.165);
      fill(255);
      textSize(width / 120);
      text("This unit has + 20", mouseX, mouseY - height * 0.125);
      text("movement speed", mouseX, mouseY - height * 0.105);
    } 
  }

  if (buffs.angelicshield) {
    stroke(0, 97, 255);
    strokeWeight(3);
    noFill();
    rect(width * 0.63, height * 0.8, width * 0.0145, width * 0.0145);
    image(player.angelicshield, width * 0.63, height * 0.8, width * 0.015, width * 0.015);
    if (mouseX >= width * 0.63 && mouseX <= width * 0.645 && mouseY >= height * 0.8 && mouseY <= height * 0.83) {
      fill(0, 0, 0, 75);
      rect(mouseX - width * 0.075, mouseY - height * 0.2, width * 0.15, height * 0.15, 25);
      noStroke();
      fill(0, 97, 255);
      textSize(width / 75);
      text("Angelic Shield", mouseX, mouseY - height * 0.165);
      fill(255);
      textSize(width / 120);
      text("This unit is taking 10%", mouseX, mouseY - height * 0.125);
      text("reduced damage", mouseX, mouseY - height * 0.105);
    } 
  }

  if (buffs.holyfire) {
    stroke(0, 97, 255);
    strokeWeight(3);
    noFill();
    rect(width * 0.65, height * 0.8, width * 0.0145, width * 0.0145);
    image(player.holyfire, width * 0.65, height * 0.8, width * 0.015, width * 0.015);    
    if (mouseX >= width * 0.65 && mouseX <= width * 0.665 && mouseY >= height * 0.8 && mouseY <= height * 0.83) {
      fill(0, 0, 0, 75);
      rect(mouseX - width * 0.075, mouseY - height * 0.2, width * 0.15, height * 0.15, 25);
      noStroke();
      fill(0, 97, 255);
      textSize(width / 75);
      text("Holy Fire", mouseX, mouseY - height * 0.165);
      fill(255);
      textSize(width / 120);
      text("This unit is dealing 10%", mouseX, mouseY - height * 0.125);
      text("increased damage", mouseX, mouseY - height * 0.105);
    } 
  }

}

//recharging abilities
function rechargeAbilities() {

  if (! shopSubstate) {
    if (cdcharge.q > cds.q) {
      cdcharge.q === cds.q;
    }
    else {
      cdcharge.q += 1 / 60;
    }

    if (cdcharge.w > cds.w) {
      cdcharge.w === cds.w;
    }
    else {
      cdcharge.w += 1 / 60;
    }

    if (cdcharge.e > cds.e) {
      cdcharge.e === cds.e;
    }
    else {
      cdcharge.e += 1 / 60;
    }

    if (cdcharge.r > cds.r) {
      cdcharge.r === cds.r;
    }
    else {
      cdcharge.r += 1 / 60;
    }

    if (cdcharge.d > cds.d) {
      cdcharge.d === cds.d;
    }
    else {
      cdcharge.d += 1 / 60;
    }

    if (cdcharge.f > cds.f) {
      cdcharge.f === cds.f;
    }
    else {
      cdcharge.f += 1 / 60;
    }
  }

}

//bars as an extension to main cooldown effects
function cooldownBars() {

  noStroke();

  if (stats.mana < abilitycosts.q && !rmode) {
    fill(80, 220, 220, 128);
    rect(width * 0.3785, height * 0.8825, width * 0.0325, height * 0.0525);
  }
  else if (cdcharge.q < cds.q) {
    fill(0, 0, 0, 165);
    rect(width * 0.3785, height * 0.8825, width * 0.0325, height * 0.0525);
  }

  if (stats.mana < abilitycosts.w && !rmode) {
    fill(80, 220, 220, 128);
    rect(width * 0.417, height * 0.8825, width * 0.0325, height * 0.0525);
  }

  else if (cdcharge.w < cds.w) {
    fill(0, 0, 0, 165);
    rect(width * 0.417, height * 0.8825, width * 0.0325, height * 0.0525);
  }

  if (stats.mana < abilitycosts.e && !rmode) {
    fill(80, 220, 220, 128);
    rect(width * 0.4545, height * 0.8825, width * 0.0325, height * 0.0525);
  }
  else if (cdcharge.e < cds.e) {
    fill(0, 0, 0, 165);
    rect(width * 0.4545, height * 0.8825, width * 0.0325, height * 0.0525);
  }

  if (stats.lvl < 6) {
    fill(0, 0, 0, 165);
    rect(width * 0.492, height * 0.8825, width * 0.0325, height * 0.0525);
  }
  else if (stats.mana < abilitycosts.r && !rmode) {
    fill(80, 220, 220, 128);
    rect(width * 0.492, height * 0.8825, width * 0.0325, height * 0.0525);
  }
  else if (cdcharge.r < cds.r) {
    fill(0, 0, 0, 165);
    rect(width * 0.492, height * 0.8825, width * 0.0325, height * 0.0525);
  }

  if (cdcharge.d < cds.d) {
    fill(0, 0, 0, 165);
    rect(width * 0.532, height * 0.8825, width * 0.024, height * 0.0393);
  }

  if (cdcharge.f < cds.f) {
    fill(0, 0, 0, 165);
    rect(width * 0.5605, height * 0.8825, width * 0.024, height * 0.0393);
  }

}

//display the level in the UI
function levelDisplay() {

  noStroke();
  fill(0);
  ellipse(width * 0.3215, height * 0.975, width * 0.0165, height * 0.0275);
  stroke(255);
  fill(50, 231, 255);
  text(stats.lvl, width * 0.32125, height * 0.975);
  image(player.statsicon, width * 0.275, height * 0.96, width * 0.0168, height * 0.028);

}

//display of items after purchase
function itemDisplay() {

  for (let itemcount = 0; itemcount < inventory.length && itemcount < 3; itemcount++) {
    image(inventory[itemcount].icon, width * 0.60248 + itemcount * width * 0.026, height * 0.88, width * 0.025, height * 0.04145);
  }

  for (let itemcount = 3; itemcount < inventory.length && itemcount < 6; itemcount++) {
    image(inventory[itemcount].icon, width * 0.60248 + (itemcount - 3) * width * 0.026, height * 0.922, width * 0.025, height * 0.04145);
  }

}

//display the information of items when propmted in the inventory
function iteminfodisplay() {

  //first row
  for (let itemcount = 0; itemcount < inventory.length && itemcount < 3; itemcount++) {
    if (mouseX >= width * 0.60248 + itemcount * width * 0.026 && mouseX <= width * 0.60248 + itemcount * width * 0.026 + height * 0.0415 && mouseY >= height * 0.88 && mouseY <= height * 0.92145) {
      fill(0, 0, 0, 75);
      stroke(0, 97, 255);
      rect(mouseX - width * 0.09, mouseY - height * 0.22, width * 0.18, height * 0.22, 25);
      fill(255);
      noStroke();
      textStyle(NORMAL);
      textSize(width / 100);
      currentItem = inventory[itemcount].itemID;
      text(inventory[itemcount].name, mouseX, mouseY - height * 0.2);
      textSize(width / 120);
      text(texts.effect1, mouseX, mouseY - height * 0.175);
      text(texts.effect2, mouseX, mouseY - height * 0.15);
      text(texts.effect3, mouseX, mouseY - height * 0.125);
      text(texts.effect4, mouseX, mouseY - height * 0.1);
      text(texts.effect5, mouseX, mouseY - height * 0.075);
      text(texts.effect6, mouseX, mouseY - height * 0.05);
      text(texts.effect7, mouseX, mouseY - height * 0.025);
    }
  }

  //second row
  for (let itemcount = 3; itemcount < inventory.length && itemcount < 6; itemcount++) {
    if (mouseX >= width * 0.60248 + (itemcount - 3) * width * 0.026 && mouseX <= width * 0.60228 + (itemcount - 3) * width * 0.026 + height * 0.0415 && mouseY >= height * 0.922 && mouseY <= height * 0.96345) {
      fill(0, 0, 0, 75);
      stroke(0, 97, 255);
      rect(mouseX - width * 0.09, mouseY - height * 0.22, width * 0.18, height * 0.18, 25);
      fill(255);
      noStroke();
      textStyle(NORMAL);
      textSize(width / 100);
      currentItem = inventory[itemcount].itemID;
      text(inventory[itemcount].name, mouseX, mouseY - height * 0.2);
      textSize(width / 120);
      text(texts.effect1, mouseX, mouseY - height * 0.175);
      text(texts.effect2, mouseX, mouseY - height * 0.15);
      text(texts.effect3, mouseX, mouseY - height * 0.125);
      text(texts.effect4, mouseX, mouseY - height * 0.1);
      text(texts.effect5, mouseX, mouseY - height * 0.075);
      text(texts.effect6, mouseX, mouseY - height * 0.05);
      text(texts.effect7, mouseX, mouseY - height * 0.025);
    }
  }

}

//display ability information when prompted in ui
function abilityInfoDisplay() {

  fill(0, 0, 0, 64);
  stroke(0, 97, 255);

  texts.effect1 = "";
  texts.effect2 = "";
  texts.effect3 = "";
  texts.effect4 = "";
  texts.effect5 = "";
  texts.effect6 = "";
  texts.additionaltexts = "";
  texts.additionaltexts2 = "";

  abilityDesc();

  fill(255);
  strokeWeight(2);
  textSize(width / 50);
  textAlign(LEFT);
  textStyle(NORMAL);
  text(texts.effect1, width * 0.31, height * 0.575);
  textSize(width / 110);
  stroke(0);
  strokeWeight(1);
  text(texts.effect2, width * 0.31, height * 0.64);
  text(texts.effect3, width * 0.31, height * 0.67);
  text(texts.effect4, width * 0.31, height * 0.7);
  text(texts.effect5, width * 0.31, height * 0.73);
  textStyle(ITALIC);
  text(texts.effect6, width * 0.6, height * 0.58);
  text(texts.additionaltexts, width * 0.5775, height * 0.77);
  text(texts.additionaltexts2, width * 0.31, height * 0.77);
  textAlign(CENTER);
    

}

//txt information to be displayed with abilities
function abilityDesc() {

  if(mouseX >= width * 0.35 && mouseX <= width * 0.3745 && mouseY >= height * 0.8825 && mouseY <= height * 0.9225) {

    rect(width * 0.3, height * 0.52, width * 0.375, height * 0.27, 8);
    texts.effect1 = "Path of the Exiled";
    texts.effect2 = "As you level up, gain additional effects:";
    texts.effect3 = "Level 6: Increase your speed by 20 and Mystic Shot fires an additional projectile";
    texts.effect4 = "Level 12: Reduce all damage taken by 10% and Mystic Shot fires an additional projectile";
    texts.effect5 = "Level 16: Increase all damage dealt by 10%";
    texts.effect6 = "Passive Ability";  
    texts.additionaltexts2 = "Where does the path leads to? Frankly, I don't care";

  }

  if(mouseX >= width * 0.3785 && mouseX <= width * 0.4110 && mouseY >= height * 0.8825 && mouseY <= height * 0.935) {

    rect(width * 0.3, height * 0.52, width * 0.375, height * 0.27, 8);
    if (!rmode) {
      texts.effect1 = "Redemption (" + abilitycosts.q + ")";
      texts.effect2 = "Strikes in front of your character, dealing damage equal to your Damage";
      texts.effect3 = "Slaying an enemy has a 15% chance to absorb their soul, increasing your Damage by 1";
      texts.effect4 = "(Can Critical Strike)";
      texts.effect6 = "Active Ability";  
      texts.additionaltexts = "Cooldown: " + str(cds.q) + " seconds";
      texts.additionaltexts2 = "Redemption is earned through culling, not prayers";
    }
    else {
      texts.effect1 = "Judgment";
      texts.effect2 = "Strikes in front of your character, dealing TRUE damage equal to your Damage * 1.2";
      texts.effect3 = "Slaying an enemy absorbs their soul, increasing your Damage by 1";
      texts.effect4 = "(Can Critical Strike)";
      texts.effect6 = "Active Ability";  
      texts.additionaltexts = "Cooldown: " + str(cds.q) + " seconds";
      texts.additionaltexts2 = "When judgment arrives, it is too late";
    }

  }

  if(mouseX >= width * 0.417 && mouseX <= width * 0.4495 && mouseY >= height * 0.8825 && mouseY <= height * 0.935) {

    rect(width * 0.3, height * 0.52, width * 0.375, height * 0.27, 8);
    if (!rmode) {
      texts.effect1 = "Mystic Shot (" + abilitycosts.w + ")";
      let temp;
      if (stats.lvl <= 5) {
        temp = "an projectile of pure energy,";
      }
      else if (stats.lvl >= 12) {
        temp = "three projectiles of pure energy,";
      }
      else {
        temp = "two projectiles of pure energy,";
      }
      texts.effect2 = "Fires " + temp + " enemies hit takes damage equal to";
      texts.effect3 = "15 + your ability power. If a third projectile is fired,";
      texts.effect4 = "it deals 125% damage (Can Critically Strike)";
      texts.effect6 = "Active Ability";
      texts.additionaltexts = "Cooldown: " + str(cds.w) + " seconds";
      texts.additionaltexts2 = "Purer than the holy fire and stronger than the sacred blade";
    }
    else {
      texts.effect1 = "Whirling Death";
      texts.effect2 = "Fires three protectiles from your character, enemies hit takes damage equal to";
      texts.effect3 = "30 + 1.25 * Ability Power, the third one deals 125% damage";
      texts.effect4 = "(Can Critically Strike)";
      texts.effect5 = "Passive: Gain + 10% Critical Strike Chance";
      texts.effect6 = "Active Ability";
      texts.additionaltexts = "Cooldown: " + str(cds.w) + " seconds";
      texts.additionaltexts2 = "Sometimes, it's better to suffer";
    }

  }

  if(mouseX >= width * 0.4545 && mouseX <= width * 0.487 && mouseY >= height * 0.8825 && mouseY <= height * 0.935) {

    rect(width * 0.3, height * 0.52, width * 0.375, height * 0.27, 8);
    if (!rmode) {
      texts.effect1 = "Angelic Shift (" + abilitycosts.e + ")";
      texts.effect2 = "Shift across space with immense speed, cutting through up to one enemy in your";
      texts.effect3 = "path, it takes damage equal to 10 + 25% of your Ability Power";
      texts.effect6 = "Active Ability";
      texts.additionaltexts = "Cooldown: " + str(cds.e) + " seconds";
      texts.additionaltexts2 = "You see nothing";
    }
    else {
      texts.effect1 = "Wanderer's Strike";
      texts.effect2 = "Shift across space with immense speed, cutting through up to one enemy in your";
      texts.effect3 = "path, it takes damage equal to 15 + 50% of your Ability Power or 30% of our Damage";
      texts.effect4 = "(whichever is greater)";
      texts.effect6 = "Active Ability";
      texts.additionaltexts = "Cooldown: " + str(cds.e) + " seconds";
      texts.additionaltexts2 = "Take it as I was never here, just be grateful for what is left";
    }

  }

  if(mouseX >= width * 0.492 && mouseX <= width * 0.5245 && mouseY >= height * 0.8825 && mouseY <= height * 0.935) {

    rect(width * 0.3, height * 0.52, width * 0.375, height * 0.27, 8);
    texts.effect1 = "Tempest (" + abilitycosts.r + ")";
    let anum = 20;
    if (itemabilities.morertimer) {
      anum = 30;
    }
    texts.effect2 = "For " + anum + " seconds, your abilities are empowered and costs no mana:";
    texts.effect3 = "Q - Judgment: Cooldown reduced, deals bonus damage as TRUE damage";
    texts.effect4 = "W - Orbs of Agony: Cooldown reduced, ememies hit takes increased damage";
    texts.effect5 = "E - Wanderer's Strike: Cooldown reduced, deals increased damage";
    texts.effect6 = "Ultimate Ability";
    texts.additionaltexts = "Cooldown: " + str(cds.r) + " seconds"; 
    texts.additionaltexts2 = "Do not fear me, fear the nothing after I am gone"; 

  }

  if(mouseX >= width * 0.532 && mouseX <= width * 0.556 && mouseY >= height * 0.8825 && mouseY <= height * 0.9218) {
    rect(width * 0.3, height * 0.52, width * 0.375, height * 0.27, 8);
    if (summonerD === 1) {
      texts.effect1 = "Ignite";
      texts.effect2 = "Strike with a fierce fiery energy, dealing 10% additional damage";
      texts.effect3 = "with all abilities";
      texts.effect4 = "(Critical strike damage while ignite is active is increased by 25%)";
      texts.effect6 = "Summoner Ability";
      texts.additionaltexts = "Cooldown: 30 seconds"; 
      texts.additionaltexts2 = "Why understand something when one can set fire to it?"; 
    }
    if (summonerD === 2) {
      texts.effect1 = "Clarity";
      texts.effect2 = "Have peace with the soul and the mind, restoring 20% of your maximum mana";
      texts.effect6 = "Summoner Ability";
      texts.additionaltexts = "Cooldown: 10 seconds"; 
      texts.additionaltexts2 = "The only true widsom is in knowing you know knothing"; 
    }
    if (summonerD === 3) {
      texts.effect1 = "Heal";
      texts.effect2 = "Call upon the energy of life, restoring 10% of your maximum health or";
      texts.effect3 = "25% missing health, whichever is greater";
      texts.effect6 = "Summoner Ability";
      texts.additionaltexts = "Cooldown: 25 seconds"; 
      texts.additionaltexts2 = "It has been said, time heals all wounds"; 
    }
    if (summonerD === 4) {
      texts.effect1 = "Barrier";
      texts.effect2 = "Gain strength, take 15% reduced damage from ALL sources for 7 seconds";
      texts.effect6 = "Summoner Ability";
      texts.additionaltexts = "Cooldown: 30 seconds"; 
      texts.additionaltexts2 = "Only those with strongs hearts can truely be indestructible"; 
    }
    if (summonerD === 5) {
      texts.effect1 = "Flash";
      texts.effect2 = "Warp time and space, teleporting your character a distance towards";
      texts.effect3 = "your cursor";
      texts.effect6 = "Summoner Ability";
      texts.additionaltexts = "Cooldown: 30 seconds"; 
      texts.additionaltexts2 = "To warp time and space is to traverse the infinity of the universe"; 
    }
  }


  if(mouseX >= width * 0.5605 && mouseX <= width * 0.5845 && mouseY >= height * 0.8825 && mouseY <= height * 0.9218) {
    rect(width * 0.3, height * 0.52, width * 0.375, height * 0.27, 8);
    if (summonerF === 1) {
      texts.effect1 = "Ignite";
      texts.effect2 = "Strike with a fierce fiery energy, dealing 10% additional damage";
      texts.effect3 = "with all abilities";
      texts.effect4 = "(Critical strike damage while ignite is active is increased by 25%)";
      texts.effect6 = "Summoner Ability";
      texts.additionaltexts = "Cooldown: 30 seconds"; 
      texts.additionaltexts2 = "Why understand something when one can set fire to it?"; 
    }
    if (summonerF === 2) {
      texts.effect1 = "Clarity";
      texts.effect2 = "Have peace with the soul and the mind, restoring 20% of your maximum mana";
      texts.effect6 = "Summoner Ability";
      texts.additionaltexts = "Cooldown: 10 seconds"; 
      texts.additionaltexts2 = "The only true widsom is in knowing you know knothing"; 
    }
    if (summonerF === 3) {
      texts.effect1 = "Heal";
      texts.effect2 = "Call upon the energy of life, restoring 10% of your maximum health or";
      texts.effect3 = "25% missing health, whichever is greater";
      texts.effect6 = "Summoner Ability";
      texts.additionaltexts = "Cooldown: 25 seconds"; 
      texts.additionaltexts2 = "It has been said, time heals all wounds"; 
    }
    if (summonerF === 4) {
      texts.effect1 = "Barrier";
      texts.effect2 = "Gain strength, take 15% reduced damage from ALL sources for 7 seconds";
      texts.effect6 = "Summoner Ability";
      texts.additionaltexts = "Cooldown: 30 seconds"; 
      texts.additionaltexts2 = "Only those with strongs hearts can truely be indestructible"; 
    }
    if (summonerF === 5) {
      texts.effect1 = "Flash";
      texts.effect2 = "Warp time and space, teleporting your character a distance towards";
      texts.effect3 = "your cursor";
      texts.effect6 = "Summoner Ability";
      texts.additionaltexts = "Cooldown: 30 seconds"; 
      texts.additionaltexts2 = "To warp time and space is to traverse the infinity of the universe"; 
    }
  }

}

//stats menu display (AD, AP, SPEED, MR, ARMOR, ARMORPEN, MAGICPEN, HPREGEN, MANAREGEN, CRIT, CDR)
function statsMenu() {

  push();

  if (! statsToggle) {
  //sliding animation when stat menu is requested
    translate(0 + translatecount, 0);
    if (mouseX >= 0 && mouseX <= 15 && mouseY >= height * 0.15 && mouseY <= height * 0.6) {
      tstatus = true;
    }
    if (mouseX >= width * 0.4) {
      tstatus = false;
    }
    if (tstatus && translatecount < width * 0.1) {
      translatecount += 20;
    }
    else if (! tstatus && translatecount > 0) {
      translatecount -= 20;
    }
  }

  else if (statsToggle) {
    translate(width * 0.1, 0);
  }
  
  //stat menu with the values and icons
  fill(0, 0, 0, 150);
  stroke(0, 97, 255);
  rect(width * - 0.1, height* 0.15, width * 0.1, height * 0.45, 20);
  fill(255);
  textSize(width / 60);
  image(images.ad, width * -0.085, height * 0.16, height * 0.03, height * 0.03);
  text(stats.ad, width * -0.04, height * 0.175);
  image(images.ap, width * -0.085, height * 0.20, height * 0.03, height * 0.03);
  text(stats.ap, width * -0.04, height * 0.215);
  image(images.speed, width * -0.085, height * 0.24, height * 0.03, height * 0.03);
  text(stats.speed, width * -0.04, height * 0.255);
  image(images.armor, width * -0.085, height * 0.28, height * 0.03, height * 0.03);
  text(stats.armor, width * -0.04, height * 0.295);
  image(images.mr, width * -0.085, height * 0.32, height * 0.03, height * 0.03);
  text(stats.mr, width * -0.04, height * 0.335);
  image(images.magicpen, width * -0.085, height * 0.36, height * 0.03, height * 0.03);
  text(stats.magicpen, width * -0.04, height * 0.375);
  image(images.armorpen, width * -0.085, height * 0.4, height * 0.03, height * 0.03);
  text(stats.armorpen, width * -0.04, height * 0.415);
  image(images.hpregen, width * -0.085, height * 0.44, height * 0.03, height * 0.03);
  text(stats.hpregen, width * -0.04, height * 0.455);
  image(images.manaregen, width * -0.085, height * 0.48, height * 0.03, height * 0.03);
  text(stats.manaregen, width * -0.04, height * 0.495);
  image(images.crit, width * -0.085, height * 0.52, height * 0.03, height * 0.03);
  text(stats.crit, width * -0.04, height * 0.535);
  image(images.cdr, width * -0.085, height * 0.56, height * 0.03, height * 0.03);
  text(stats.cdr, width * -0.04, height * 0.575);
  
  pop();
}

//display ability icons in UI
function abilityicons() {

  let passiveability;
  let qability;
  let wability;
  let eability;
  let rability;

  if (stats.lvl < 6) {
    passiveability = player.passiveicon;
  }
  else if (stats.lvl < 12) { 
    passiveability = player.passive1icon;
  }
  else {
    passiveability = player.passive2icon;
  }

  if (!rmode) {
    qability = player.qicon;
    wability = player.wicon;
    eability = player.eicon;
  }

  else if (rmode) {
    qability = player.rqicon;
    wability = player.rwicon;
    eability = player.reicon;
  }

  rability= player.ricon;

  image(passiveability, width * 0.35, height * 0.8825, width * 0.0245, height * 0.04);
  image(qability, width * 0.3785, height * 0.8825, width * 0.0325, height * 0.0525);
  image(wability, width * 0.417, height * 0.8825, width * 0.0325, height * 0.0525);
  image(eability, width * 0.4545, height * 0.8825, width * 0.0325, height * 0.0525);
  image(rability, width * 0.492, height * 0.8825, width * 0.0325, height * 0.0525);

  textSize(width/120);
  stroke(18, 18, 181);
  fill(204, 0, 255);  
  if (! rmode) {
    text(abilitycosts.q, width * 0.405, height * 0.895);
    text(abilitycosts.w, width * 0.443, height * 0.895);
    text(abilitycosts.e, width * 0.4805, height * 0.895);
    text(abilitycosts.r, width * 0.5165, height * 0.895);
  }

}

function summonericons() {

  image(summonerDicon, width * 0.532, height * 0.8825, width * 0.024, height * 0.0393);
  image(summonerFicon, width * 0.5605, height * 0.8825, width * 0.024, height * 0.0393);

}

//function that runs the items previously loaded
function inGameShopDisplay() {
  if (shopSubstate && state === "game") {

    fill(198, 211, 255, 165);
    rect(width * 0.13, height * 0.02, width * 0.7, height * 0.8);

    for (let y = 0; y < 6; y++) {
      for (let x = 0; x < 5; x++) {
        inGameShop[x][y].run();
      }
    }

    textSize(width / 30);
    fill(111, 242, 24);
    stroke(15, 66, 32);
    text("Shop", width * 0.7, height * 0.08);
    
    //freeze buff timing
    if (abilitytiming.r !== -500) {
      abilitytiming.r = abilitytiming.r + 16 + 2/3;
    }
    if (abilitytiming.ignite !== -500) {
      abilitytiming.ignite = abilitytiming.ignite + 16 + 2/3;
    }
    if (abilitytiming.barrier !== -500) {
      abilitytiming.barrier = abilitytiming.barrier + 16 + 2/3;
    }

  } 
}

//Containts the information of all the items and displays it in shop
function itemDetails() {

  if (state === "game") {

    texts.effect1 = "";
    texts.effect2 = "";
    texts.effect3 = "";
    texts.effect4 = "";
    texts.effect5 = "";
    texts.effect6 = "";
    texts.effect7 = "";
    texts.additionaltexts = "";
    texts.additionaltexts2 = "";

    itemInfo();

    //Display the item information when selected
    if (currentItem !== 0 && shopSubstate) {
      purchaseButton = new Button(width * 0.6, height * 0.7, width * 0.2, height * 0.05, "Purchase (" + price + ")", 28, 0, purchaseItem, "assets/cursors/shop.cur");
      image(inGameShop[ceil(currentItem / 6) - 1][(currentItem - 1) % 6].icon, width * 0.67, height * 0.21, width * 0.06, width * 0.06);
      image(images.buttonborder, width * 0.668, height * 0.1875, width * 0.063, width * 0.086);
      purchaseButton.run();
      noStroke();
      fill(0);
      textSize(width / 40);
      textStyle(BOLD);
      text(inGameShop[ceil(currentItem / 6) - 1][(currentItem - 1) % 6].name, width * 0.7, height * 0.18);
    }

    if (shopSubstate) {
      textSize(width / 85);
      textStyle(NORMAL);
      text(texts.effect1, width * 0.7, height * 0.4);
      text(texts.effect2, width * 0.7, height * 0.43);
      text(texts.effect3, width * 0.7, height * 0.46);
      text(texts.effect4, width * 0.7, height * 0.49);
      text(texts.effect5, width * 0.7, height * 0.52);
      text(texts.effect6, width * 0.7, height * 0.55);
      text(texts.effect7, width * 0.7, height * 0.58);
      textStyle(ITALIC);
      text(texts.additionaltexts, width * 0.7, height * 0.64);
      text(texts.additionaltexts2, width * 0.7, height * 0.67);
    }
  }


}

//info of every item (name is already added during creation of items)
function itemInfo() {

  //infinity edge
  if (currentItem === 1) {
    texts.effect1 = "Damage + 150";
    texts.effect2 = "Critical Strike Chance + 30% (Max 100%)";
    texts.effect3 = "King's Bane (Legendary Passive): Critical"; 
    texts.effect4 = "Strike Damage + 20%";
    texts.additionaltexts = "You are full of weaknesses";
    price = 3000;
  }
  //essence reaver
  if (currentItem === 2) {
    texts.effect1 = "Damage + 80   Mana + 200";
    texts.effect2 = "Mana Regeneration + 5 / Second";
    texts.effect3 = "Abilitie Cooldown - 10% (Max 50%)";
    texts.effect4 = "Soul Harvest (Legendary Passive):";
    texts.effect5 = "Killing an enemy restores 2% of";
    texts.effect6 = "your maximum mana";
    texts.additionaltexts = "The reaper of souls and";
    texts.additionaltexts2 = "harvestor essence";
    price = 3500;
  }
  //Stormrazor
  if (currentItem === 3) {
    texts.effect1 = "Damage + 40   Ability Power + 40";
    texts.effect2 = "Critical Strike Chance + 20% (Max 100%)";
    texts.effect3 = "Speed + 10 (Max 60)";
    texts.effect4 = "Windrunner's Bless (Legendary Passive):";
    texts.effect5 = "Angelic Shift / Wanderer's Strike deal 20%";
    texts.effect6 = "damage but has a 1 second cooldown. You";
    texts.effect7 = "are immune while casting the ability";
    texts.additionaltexts = "The blessed blade of the";
    texts.additionaltexts2 = "Windrunners";
    price = 3500;
  }
  //starfire spellblade
  if (currentItem === 4) {
    texts.effect1 = "Damage + 50   Ability Power + 80";
    texts.effect2 = "Mana + 200   Health + 200";
    texts.effect3 = "Armor / Magic Penetration + 25% (Max 80%)";
    texts.effect4 = "You heal for 15% of all damage dealt";
    texts.effect5 = "(Max 30%)";
    texts.additionaltexts = "The lost blade of the Archangel";
    price = 3600;
  }
  //last whisper
  if (currentItem === 5) {
    texts.effect1 = "Damage + 70";
    texts.effect2 = "Armor Penetration + 40%";
    texts.effect3 = "Culling (Legendary Passive): Deals up";
    texts.effect4 = "to 20% increased damage to damaged";
    texts.effect5 = "enemies. (deals maximum damage when";
    texts.effect6 = "the enemy are at 30% or less health)";
    texts.additionaltexts = "Lethality, at any cost";
    price = 2800;
  }
  //Frost Mourne
  if (currentItem === 6) {
    texts.effect1 = "Damage + 30";
    texts.effect2 = "Heals for 15% of all damage dealt ?(Max 30%)";
    texts.effect3 = "Haste (Passive): The casting time for";
    texts.effect4 = "Redemption / Judgment is halved";
    texts.effect5 = "Giantslayer (Legendary Passive): They";
    texts.effect6 = "deal 10% of the targets' maxiumum";
    texts.effect7 = "health as bonus damage";
    texts.additionaltexts = "A mythical blade that drain souls";
    price = 3600;
  }
  //rapid firecannon
  if (currentItem === 7) {
    texts.effect1 = "Ability Cooldown - 20% (Max 50%)";
    texts.effect2 = "Critical Strike Chance + 20% (Max 100%)";
    texts.effect3 = "Speed + 10 (Max 60)";
    texts.effect4 = "Spray and Pray (Legendary Passive):";
    texts.effect5 = "Each projectile fired with Mystic Shot /";
    texts.effect6 = "Whirling Death has a 15% to fire an";
    texts.effect7 = "additional time, dealing 25% damage";
    texts.additionaltexts = "Loaded and ready";
    price = 2500;
  }
  //Thori'dal
  if (currentItem === 8) {
    texts.effect1 = "Ability Cooldowns - 20% (Max 50%)";
    texts.effect2 = "Mana + 200   Mana Regen + 2 / Sec";
    texts.effect3 = "Critical Strike Chance + 10% (Max 100%)";
    texts.effect4 = "Supernova (Legendary Active): Deals 1000";
    texts.effect5 = "TRUE damage to ALL enemies (Cast with B,";
    texts.effect6 = "60 seconds cooldown, no casting cost)";
    texts.additionaltexts = "The wrath of gods can be beared";
    texts.additionaltexts2 = "by no mortal";
    price = 2750;
  }
  //Satikk Shiv
  if (currentItem === 9) {
    texts.effect1 = "Ability Cooldown - 20% (Max 50%)";
    texts.effect2 = "Critical Strike Chance + 20% (Max 100%)";
    texts.effect3 = "Mana + 200   Mana Regen +2";
    texts.effect4 = "Supersonic (Legendary Passive):";
    texts.effect5 = "Mystic Shot / Whirling Death's projectile";
    texts.effect6 = "speed is increased";
    texts.additionaltexts = "Forged with lightning and thunder";
    price = 2500;
  }
  //Runnan's Hurricane
  if (currentItem === 10) {
    texts.effect1 = "Speed + 20";
    texts.effect2 = "Ability Cooldowns - 20% (Max 50%)";
    texts.effect3 = "Critical Strike Chance + 30% (Max 100%)";
    texts.effect4 = "Perpetual Storm (Passive):";
    texts.effect5 = "Each shot of Mystic Shot / Whirling Death";
    texts.effect6 = "fires three projectiles that fan out, each";
    texts.effect7 = "dealing 65% damage";
    texts.additionaltexts = "Embrace yourselves, for the the";
    texts.additionaltexts2 = "hour of devastation";
    price = 2800;
  }
  //phantom dancer
  if (currentItem === 11) {
    texts.effect1 = "Speed + 30 (Max 60)";
    texts.effect2 = "Ability Cooldowns - 20% (Max 50%)";
    texts.effect3 = "Critical Strike Chance + 30% (Max 100%)";
    texts.effect4 = "Spectral Waltz (Passive): The casting time";
    texts.effect5 = "for Angelic Shift / Wanderer's Strike is halved";
    texts.effect6 = "Sweeping Agony (Legendary Passive): Their damage";
    texts.effect7 = "is tripled (before defensive stats are applied)";
    texts.additionaltexts = "The unseen blade is the deadliest";
    price = 2800;
  }
  //Nashor's Tooth
  if (currentItem === 12) {
    texts.effect1 = "Ability Power + 80";
    texts.effect2 = "Ability Cooldowns - 20% (Max 50%)";
    texts.effect3 = "Critical Strike Chance + 20%";
    texts.effect4 = "Sparkling Tempest (Legendary Passive):";
    texts.effect5 = "The duration of Temptest is extended to";
    texts.effect6 = "30 seconds.";
    texts.additionaltexts = "The tooth of an ancient beast,";
    texts.additionaltexts2 = "mystical powers glow from within";
    price = 3000;
  }
  //Luden's Echo
  if (currentItem === 13) {
    texts.effect1 = "Ability Power + 120";
    texts.effect2 = "Mana + 400   Mana Regen + 5";
    texts.effect3 = "Ability Cooldowns - 10% (Max 50%)";
    texts.effect4 = "Heals for 15% of all damage dealt";
    texts.effect5 = "(Max 30%)";
    texts.additionaltexts = "The staff of an ancient archmage";
    price = 3200;
  }
  //Rabadon's Deathcap
  if (currentItem === 14) {
    texts.effect1 = "Ability Power + 150";
    texts.effect2 = "Descend Into Madness (Legendary Passive):";
    texts.effect3 = "When you purchase this item, increase your";
    texts.effect4 = "ability power by 30%, you CANNOT critical";
    texts.effect5 = "strike this game";
    texts.additionaltexts = "Descend into madness...";
    price = 4000;
  }
  //Void Staff
  if (currentItem === 15) {
    texts.effect1 = "Ability Power + 80";
    texts.effect2 = "Magic Penetration + 40%";
    texts.additionaltexts = "Counterspell is the extraction of";
    texts.additionaltexts2 = "essence from magic";
    price = 3000;
  }
  //Lich Bane
  if (currentItem === 16) {
    texts.effect1 = "Mana + 300   Mana Regen + 5";
    texts.effect2 = "Ability Power + 100";
    texts.effect3 = "Speed + 10";
    texts.effect4 = "You heal for 20% of all damage dealt";
    texts.effect5 = "Curse's Blessings (Legendary Passive):";
    texts.effect6 = "The healing limit from damage of 50% is";
    texts.effect7 = "removed, but you don't regenerate health";
    texts.additionaltexts = "The curse was never lifted...";
    price = 3800;
  }
  //Liandry's Torment
  if (currentItem === 17) {
    texts.effect1 = "Ability Power + 70";
    texts.effect2 = "Magic Penetration + 15%";
    texts.effect3 = "Health + 300";
    texts.effect4 = "Cry of the Carnarium (Legendary Passive):";
    texts.effect5 = "Mystic Shot / Whirling Death and Angelic Dash";
    texts.effect6 = "/ Wanderer's Strike deals bonus damage";
    texts.effect7 = "equal to 10% of the target's maximum health";
    texts.additionaltexts = "It's truely an honor, isn't it?";
    texts.additionaltexts2 = "to be remembered? Pity you";
    price = 2800;
  }
  //Hextect Gunblade
  if (currentItem === 18) {
    texts.effect1 = "Damage + 70";
    texts.effect2 = "Ability Power + 70";
    texts.effect3 = "Heals for 5% of all damage dealt";
    texts.effect4 = "Mana + 150   Health + 250";
    texts.additionaltexts = "The only way to stop war is war";
    price = 3600;
  }
  //Dead Man's Plate
  if (currentItem === 19) {
    texts.effect1 = "Armor + 20   Health Regen + 5";
    texts.effect2 = "Health + 400";
    texts.effect3 = "Tramaple Over Dead (Legendary Passive):";
    texts.effect4 = "Gain extra movement speed based on missing";
    texts.effect5 = "health (Up to a Maximum of 30%, works";
    texts.effect6 = "separately with the movement speed stat)";
    texts.additionaltexts = "There is one way you are";
    texts.additionaltexts2 = "getting this armor from me...";
    price = 3500;
  }
  if (currentItem === 20) {
    texts.effect1 = "Armor + 30";
    texts.effect2 = "Health + 450";
    texts.effect3 = "-30% From Critical Strikes";
    texts.additionaltexts = "I have no weaknesses";
    price = 3500;
  }
  if (currentItem === 21) {
    texts.effect1 = "Health + 250";
    texts.effect2 = "Armor + 80";
    texts.effect3 = "Reflect 5% of Physical Damage Taken";
    texts.additionaltexts = "How did he even put it on in the first place?";
    price = 3500;
  }
  if (currentItem === 22) {
    texts.effect1 = "Health + 500";
    texts.effect2 = "Health Renegeration + 8 / Second";
    texts.additionaltexts = "It embodies all possible meanings of";
    texts.additionaltexts2 = "the word 'indestructible'";
    price = 4000;
  }
  if (currentItem === 23) {
    texts.effect1 = "Ability Power + 50";
    texts.effect2 = "Armor + 40";
    texts.effect3 = "Upon Taking Lethal Damage, Prevent Death";
    texts.effect4 = "and Return to 500 or 20% Maximum Health";
    texts.effect5 = "(Whichever is Greater, Works Once)";
    texts.additionaltexts = "Even time bends to my will";
    price = 3500;
  }
  if (currentItem === 24) {
    texts.effect1 = "Damage + 60";
    texts.effect2 = "Armor + 30";
    texts.effect3 = "Magic Peneration + 20%";
    texts.additionaltexts = "Sharp and energetic";
    price = 3300;
  }
  if (currentItem === 25) {
    texts.effect1 = "Health + 350";
    texts.effect2 = "Magic Resist + 45";
    texts.effect3 = "Mana + 250";
    texts.effect4 = "Mana Regeneration + 4 / Second";
    texts.additionaltexts = "Who am I? None of your business";
    price = 4000;
  }
  if (currentItem === 26) {
    texts.effect1 = "Health + 450";
    texts.effect2 = "Mana + 250";
    texts.effect3 = "Mana Regeneration + 2 / Second";
    texts.effect4 = "Health Regeneration + 4 / Second";
    texts.effect5 = "Magic Resist + 55";
    texts.effect6 = "Improve Healing of all Sources by 20";
    texts.additionaltexts = "Blessed by the kings of the court";
    texts.additionaltexts2 = "and maintained by the purest magic";
    price = 3800;
  }
  if (currentItem === 27) {
    texts.effect1 = "Health + 250";
    texts.effect2 = "Mana + 200";
    texts.effect3 = "Mana Regeneration + 5 / Second";
    texts.effect4 = "Gain Armor and Magic Resist Over Time,";
    texts.effect5 = "up to a Maximum of 30 for Each";
    texts.additionaltexts = "Flexible yet strong";
    price = 3500;
  }
  if (currentItem === 28) {
    texts.effect1 = "Magic Penetration + 10%";
    texts.effect2 = "Ability Power + 65";
    texts.effect3 = "Magic Resist + 35";
    texts.effect4 = "10% Chance to Prevent Spells";
    texts.additionaltexts = "It was destined to doom once the";
    texts.additionaltexts2 = "secret was unveiled...";
    price = 3600;
  }
  if (currentItem === 29) {
    texts.effect1 = "Damage + 60";
    texts.effect2 = "Magic Resist + 40";
    texts.effect3 = "Prevent 15% of Magic Damage Taken";
    texts.additionaltexts = "It feasts upon magic";
    price = 3300;
  }

  if (currentItem === 30) {
    texts.effect1 = "Health + 300   Mana + 200";
    texts.effect2 = "Speed + 20   Magic Resist + 30";
    texts.effect3 = "Armor + 30   Armor Peneration + 20%";
    texts.effect4 = "Magic Penetration + 20%";
    texts.effect5 = "Ability Cooldowns - 20%";
    texts.effect6 = "Critical Strike Chance + 20%";
    texts.additionaltexts = "A true display of skill";
    price = 5000;
  }

}

//Function of the Purchase button, adds stats to the character and the item to the inventory
function purchaseItem() {

  if (stats.gold >= price && inventory.length < 6) {

    //deducts gold and adds the item to inventory
    stats.gold -= price;
    inventory.push(inGameShop[ceil(currentItem / 6) - 1][(currentItem - 1) % 6]);

    //purchase sound
    if (volumeControl) {
      sound.buyItem.setVolume(0.1);
      sound.buyItem.play();
    }

    addStats();

  }

  //insufficient gold sound
  else if (volumeControl) {
    sound.gameover.setVolume(0.1);
    sound.gameover.play();
  }

}

//stats added for each item
function addStats() {

  //infinity edge
  if (currentItem === 1) {
    stats.ad += 150;
    stats.crit += 30;
    itemabilities.infedge = true;
  }
  //essence reaver
  if (currentItem === 2) {
    stats.ad += 80;
    stats.manaregen += 5;
    stats.maxmana += 200;
    stats.mana += 200;
    stats.cdr += 10;
  }
  //Stormrazor
  if (currentItem === 3) {
    stats.ad += 40;
    stats.ap += 40;
    stats.speed += 10;
    itemabilities.quickdash = true;
  }
  //starfire spellblade
  if (currentItem === 4) {
    stats.ad += 50;
    stats.ap += 80;
    stats.maxmana += 400;
    stats.mana += 400;
    stats.maxhp += 200;
    stats.health += 200;
    stats.lifesteal += 15;
  }
  //last whisper
  if (currentItem === 5) {
    stats.armorpen += 40;
    stats.ad += 70;
    itemabilities.culling = true;
  }
  //Frost Mourne
  if (currentItem === 6){
    stats.ad += 30;
    stats.lifesteal += 15;
    castTime.q = castTime.q / 2;
    itemabilities.maxhpdmg = true;
  }
  //rapid firecannon
  if (currentItem === 7) {
    stats.cdr += 20;
    stats.speed += 25;
    stats.crit += 30;
    itemabilities.multishot = true;
  }
  //Thori'dal
  if (currentItem === 8) {
    stats.maxmana += 200;
    stats.mana += 200;
    stats.manaregen += 2;
    stats.crit += 10;
    stats.cdr += 20;
    itemabilities.supernova = true;
  }
  //stattik shiv
  if (currentItem === 9) {
    stats.cdr += 20;
    stats.crit += 20;
    stats.maxmana += 200;
    stats.mana += 200;
    itemabilities.lightningbolt = true;
  }
  //Runnan's Hurricane
  if (currentItem === 10) {
    stats.speed += 20;
    stats.cdr += 20;
    stats.crit += 30;
    itemabilities.hurricane = true;
  }
  //Phantom Dancer
  if (currentItem === 11) {
    stats.speed += 30;
    stats.cdr += 20;
    stats.crit += 30;
    castTime.e = castTime.e / 2;
    itemabilities.tripleedmg = true;
  }
  //nashors tooth
  if (currentItem === 12) {
    stats.ap += 80;
    stats.cdr += 20;
    stats.crit += 20;
    itemabilities.morertimer = true;
  }
  //Luden's Echo
  if (currentItem === 13) {
    stats.ap += 120;
    stats.maxmana += 400;
    stats.mana += 400;
    stats.cdr += 10;
    stats.lifesteal += 15;
  }
  //rabadon's Deathcap
  if (currentItem === 14) {
    stats.ap += 150;
    stats.ap = stats.ap * 1.3;
    itemabilities.nocrit = true;
  }
  //void staff
  if (currentItem === 15){
    stats.ap += 80;
    stats.magicpen += 40;
  }
  //lich bane
  if (currentItem === 16) {
    stats.ap += 100;
    stats.speed += 10;
    stats.maxmana += 300;
    state.mana += 300;
    stats.manaregen += 5;
    stats.lifesteal += 20;
    stats.lifesteal += excessls;
    itemabilities.lichbane = true;
  }
  //Liandry's Torment
  if (currentItem === 17) {
    stats.ap += 60;
    stats.magicpen += 15;
    stats.maxhp += 250;
    stats.health += 250;
    itemabilities.maxhpmagicdmg = true;
  }
  //Hextech Gunblade
  if (currentItem === 18) {
    stats.ad += 70;
    stats.ap += 70;
    stats.maxmana += 150;
    stats.mana += 150;
    stats.maxhp += 250;
    stats.health += 250;
    stats.lifesteal += 5;
  }
  //Dead Man's Plate
  if (currentItem === 19) {
    stats.armor += 20;
    stats.maxhp += 400;
    stats.health += 400;
    stats.hpregen += 5;
    itemabilities.movespeed = true;
  }
  if (currentItem === 20) {
    stats.armor += 30;
    stats.maxhp += 450;
    stats.health += 450;
    //special ability -30% from crits
  }
  if (currentItem === 21) {
    stats.maxhp += 250;
    stats.health += 250;
    stats.armor += 80;
    //special ability reflect 5% Physical damage
  }
  if (currentItem === 22) {
    stats.maxhp += 500;
    stats.health += 500;
    stats.hpregen += 8;
  }
  if (currentItem === 23) {
    stats.ap += 50;
    stats.armor += 40;
    //GA effect
  }
  if (currentItem === 24) {
    stats.ad += 60;
    stats.armor += 30;
    stats.magicpen += 20;
  }
  if (currentItem === 25) {
    stats.maxhp += 350;
    stats.health += 350;
    stats.mr += 45;
    stats.maxmana += 250;
    stats.mana += 250;
    stats.manaregen += 4;
  }
  if (currentItem === 26) {
    stats.maxhp += 450;
    stats.health += 450;
    stats.maxmana += 250;
    stats.mana += 250;
    stats.manaregen += 2;
    stats.hpregen += 4;
    stats.mr += 55;
    //special ablity improve healing
  }
  if (currentItem === 27) {
    stats.maxhp += 250;
    stats.health += 250;
    stats.maxmana += 200;
    stats.mana += 200;
    stats.manaregen += 5;
    //gain armor and magic resist over time up to 30 of each
  }
  if (currentItem === 28) {
    stats.magicpen += 10;
    stats.ap += 65;
    stats.mr += 35;
    //10% to prevent spells
  }
  if (currentItem === 29) {
    stats.ad += 60;
    stats.mr += 40;
    //special ability prevent 15% all magic damage
  }
  if (currentItem === 30) {
    stats.maxhp += 300;
    stats.health += 300;
    stats.maxmana += 200;
    stats.mana += 200;
    stats.speed += 20;
    stats.mr += 30;
    stats.armor += 30;
    stats.armorpen += 20;
    stats.magicpen += 20;
    stats.cdr += 20;
    stats.crit += 20;
  }

}

//responsible for resetting and cleaning up the game after it is done
function gameOverYet() {

  //Dies if health falls below 0
  if (state === "game" && stats.health <= 0) {
    state = "gameover";
    if (volumeControl) {
      sound.gameover.setVolume(0.1);
      sound.gameover.play();
    }
  }
 
  //jumps to end screen thereafter
  if (state === "gameover") {
    sound.bg.stop();
    fill(0, 255, 255);
    text("GAME OVER! You survived " + timer + " seconds.", width / 2, height / 8);
    gameoverToMenuButton.run();
  }

}

//called everytime the game is reset, reset sounds, arrays, and assigns the default value to all relavent variables
function resetGame() {

  shopSubstate = false;
  translatecount = 0;
  tstatus = false;
  statsToggle = false;
  rmode = false;
  excessls = 0;
  cannonbolts = [];
  cannonbolthitbox = [];
  bolthitbox = [];
  playerhitbox = [];
  enemyminionhitbox = [];
  qhitbox = [];
  ehitbox = [];
  buffs = {
    barrier : false,
    ignite : false,
    angelicshield : false,
    holyfire : false,
    haste : false,   
  };
  abilitytiming = {
    r : -500,
    ignite : -500,
    barrier : -500,
    supernova : -500,
  };
  bolts = [];
  castTime = {
    q : 650,
    w : 200,
    e : 425,
    r : 50,
  };
  itemabilities = {
    infegde : false,
    manaharvest : false,
    quickdash : false,
    culling : false,
    maxhpdmg : false,
    multishot : false,
    supernova : false,
    lightningbolt : false,
    hurricane : false,
    tripleedmg : false,
    morertimer : false,
    nocrit : false,
    lichbane : false,
    maxhpmagicdmg : false,
    movespeed : false,
  };
  abilitycosts = {
    q : 15,
    w : 35,
    e : 10,
    r : 100,
    d : 0,
    f : 0,
  };
  cds = {
    q : 3,
    w : 8,
    e : 5,
    r : 80,
    d : 0,
    f : 0,
  };
  cdcharge = {
    q : cds.q,
    w : cds.w,
    e : cds.e,
    r : cds.r,
    d : 0,
    f : 0,
  };
  stats = {
    health : 500,
    maxhp : 500,
    mana : 200,
    maxmana : 200,
    ad : 20,
    ap : 0,
    crit : 0,
    cdr : 0,
    armor : 0,
    mr : 0,
    armorpen : 0,
    magicpen : 0,
    hpregen : 4,
    manaregen : 5,
    speed : 0,
    xp : 0,
    lvlupxp : 100,
    lvl : 1,
    gold : 100000,
    lifesteal : 0,
  };
  texts = {
    effect1 : "",
    effect2 : "",
    effect3 : "",
    effect4 : "",
    effect5 : "",
    effect6 : "",
    effect7 : "",
    additionaltexts : "",
    additionaltexts2 : "",
  };
  charpos = {
    x : width / 2,
    y : height / 2,
  };
  destinationpos = {
    x : charpos.x,
    y : charpos.y,
  };
  velocity = {
    x : 0,
    y : 0,
  };
  timer = 0;
  difficulty = 2500;
  bullets = [];
  minions = [];
  enemyMinions = [];
  inventory = [];

}

//mouseclicks determine the destination of the character movement and to navigate through the menus
function mousePressed() {

  //Start button and Loading bar
  if (state === "menu" && mouseX >= width / 10 && mouseX <= width * 0.9 &&
    mouseY >= height * 0.75 && mouseY <= height / 4 * 3 + height / 6 && loadCount === files) {
    state = "game";
    menumusic.stop();
    //set summoner cooldowns
    if (summonerD === 1) {
      cds.d = 30;
      cdcharge.d = 30;
    }
    else if (summonerD === 2){
      cds.d = 10;
      cdcharge.d = 10;
    }
    else if (summonerD === 3){
      cds.d = 25;
      cdcharge.d = 25;
    }
    else if (summonerD === 4){
      cds.d = 30;
      cdcharge.d = 30;
    }
    else if (summonerD === 5){
      cds.d = 30;
      cdcharge.d = 30;
    }
    if (summonerF === 1) {
      cds.f = 30;
      cdcharge.f = 30;
    }
    else if (summonerF === 2){
      cds.f = 10;
      cdcharge.f = 10;
    }
    else if (summonerF === 3){
      cds.f = 25;
      cdcharge.f = 25;
    }
    else if (summonerF === 4){
      cds.f = 30;
      cdcharge.f = 30;
    }
    else if (summonerF === 5){
      cds.f = 30;
      cdcharge.f = 30;
    }
    if (volumeControl) {
      sound.startgame.setVolume(0.1);
      sound.startgame.play();
    }
  }

  //Move Commands
  if (!shopSubstate && state === "game" && ! castability.q && ! castability.w && ! castability.e && ! castability.r) {
    destinationpos.x = mouseX;
    destinationpos.y = mouseY;
    if (volumeControl) {
      sound.click.setVolume(0.1);
      sound.click.play();
    }
  }

  if (state === "game") {

    if (mouseX >= width * 0.275 && mouseX <= width * 0.291 && mouseY >= height * 0.96 && mouseY <= height * 0.987) {
      statsToggle = ! statsToggle;
      destinationpos = {
        x : charpos.x,
        y : charpos.y,
      };
    }

  }

  //Sound Control
  if (mouseX >= width * 0.95 && mouseX <= width * 0.95 + height / 15 && mouseY >= height * 0.9 && mouseY <= height * (29/30) && state !== "game") {
    volumeControl = ! volumeControl;
    if (! volumeControl) {
      menumusic.stop();
    }
  }

}

//responsible for the use of abilities upon keytyped
function keyTyped() {

  if (state === "game") {

    //Opens and closes the in-game shop
    if ((key === "`" || key === "p" || key === "P") && state === "game") {
      shopSubstate = !shopSubstate;
      if (!shopSubstate) {
        currentItem = 0;
        if (volumeControl) {
          sound.closestore.setVolume(0.1);
          sound.closestore.play();
        }
      }
      else if (shopSubstate && volumeControl) {
        sound.openstore.setVolume(0.1);
        sound.openstore.play();
      }
    }

    if ((key === "c"  || key === "C") && state === "game") {
      statsToggle = ! statsToggle;
    }

    if ((key === "b"  || key === "B") && itemabilities.supernova && state === "game") {
      for (let enemy of enemyMinions) {
        enemy.health -= 1000;
      }
      abilitytiming.supernova = timer;
      itemabilities.supernova = false;
      if (volumeControl) {
        sound.supernova.setVolume(0.3);
        sound.supernova.play();
      }
    }

    //q ability
    if ((key === "q" || key === "Q") && ! shopSubstate) {
      if (cdcharge.q < cds.q || castability.w || castability.e || castability.r || stats.mana < abilitycosts.q && !rmode) {
        if (volumeControl) {
          sound.gameover.setVolume(0.1);
          sound.gameover.play();
        }
      }
      else {
        if (! rmode) {
          stats.mana -= abilitycosts.q;
        }
        destinationpos.x = mouseX;
        destinationpos.y = mouseY;
        castability.q = true;
        qup = true;
        cdcharge.q = 0;
        if (rmode && volumeControl) {
          player.rqsound.setVolume(0.5);
          player.rqsound.play();
        }
        else if (! rmode && volumeControl) {
          player.qsound.setVolume(0.5);
          player.qsound.play();
        }
        cast();
      }
    }

    //w ability
    if ((key === "w" || key === "W") && ! shopSubstate) {
      if (cdcharge.w < cds.w || castability.q || castability.e || castability.r || stats.mana < abilitycosts.w && !rmode) {
        if (volumeControl) {
          sound.gameover.setVolume(0.1);
          sound.gameover.play();
        }
      }
      else {
        if (! rmode) {
          stats.mana -= abilitycosts.w;
        }
        destinationpos.x = mouseX;
        destinationpos.y = mouseY;
        castability.w = true;
        cdcharge.w = 0;

        cast();
        bolt1();

        if (stats.lvl >= 6) {
          setTimeout(bolt1, 100);    
        }
        if (stats.lvl >= 12 || rmode) {
          setTimeout(bolt2, 200);       
        }

 
      }
    }

    //e ability
    if ((key === "e" || key === "E") && ! shopSubstate) {
      if (cdcharge.e < cds.e|| castability.q || castability.w || castability.r || stats.mana < abilitycosts.e && !rmode) {
        if (volumeControl) {
          sound.gameover.setVolume(0.1);
          sound.gameover.play();
        }
      }
      else {
        if (! rmode) {
          stats.mana -= abilitycosts.e;
        }
        destinationpos.x = mouseX;
        destinationpos.y = mouseY;

        castability.e = true;
        eup = true;
        cdcharge.e = 0;
        let x;
        let y;
        let theta;
        // negative x means backward dash
        x = destinationpos.x - charpos.x + charpos.width / 2;
        // negative y means upward dash
        y = destinationpos.y - charpos.y + charpos.height / 2;
        theta = atan(x / y);
        dashvelocity = {
          x : abs(width * 0.005 * sin(theta)),
          y : abs(width * 0.005 * cos(theta)),
        };
        if (x < 0) {
          dashvelocity.x = dashvelocity.x * -1;
        }
        if (y < 0) {
          dashvelocity.y = dashvelocity.y * -1;
        }

        if (volumeControl) {
          player.esound.setVolume(0.5);
          player.esound.play();
        }
        cast();
      }
    }

    //r ability
    if ((key === "r" || key === "R") && ! shopSubstate) {
      if (cdcharge.r < cds.r || castability.q || castability.w || castability.e || stats.mana < abilitycosts.r && !rmode || stats.lvl < 6) {
        if (volumeControl) {
          sound.gameover.setVolume(0.1);
          sound.gameover.play();
        }
      }
      else {
        stats.mana -= abilitycosts.r;
        destinationpos.x = mouseX;
        destinationpos.y = mouseY;
        cdcharge.q = cds.q;
        cdcharge.w = cds.w;
        cdcharge.e = cds.e;
        castability.r = true;
        //r mode w passive 10% crit
        stats.crit += 10;
        cdcharge.r = 0;
        if (volumeControl) {
          player.rsound.setVolume(0.6);
          player.rsound.play();
        }
        cast();
        abilitytiming.r = millis();
      }
    }

    //d summoner ability
    if ((key === "d" || key === "D") && ! shopSubstate) {
      if (cdcharge.d < cds.d) {
        if (volumeControl) {
          sound.gameover.setVolume(0.1);
          sound.gameover.play();
        }
      }
      else {
        cdcharge.d = 0;
        if (summonerD === 1) {
          castignite();
          abilitytiming.ignite = millis();
        }
        else if (summonerD === 2) {
          castclarity();
        }
        else if (summonerD === 3) {
          castheal();
        }
        else if (summonerD === 4) {
          castbarrier();
          abilitytiming.barrier = millis();
        }
        else if (summonerD === 5) {
          castflash();
        }
      }
    }

    //f summoner ability
    if ((key === "f" || key === "F") && ! shopSubstate) {
      if (cdcharge.f < cds.f) {
        if (volumeControl) {
          sound.gameover.setVolume(0.1);
          sound.gameover.play();
        }
      }
      else{
        cdcharge.f = 0;
        if (summonerF === 1) {
          castignite();
          abilitytiming.ignite = millis();
        }
        else if (summonerF === 2) {
          castclarity();
        }
        else if (summonerF === 3) {
          castheal();
        }
        else if (summonerF === 4) {
          castbarrier();
          abilitytiming.barrier = millis();
        }
        else if (summonerF === 5) {
          castflash();
        }
      }
    }

  }

}

//ignite buff
function castignite() {
  if (volumeControl) {
    sound.ignite.setVolume(0.3);
    sound.ignite.play();
  }
  buffs.ignite = true;
}

//clarity ability
function castclarity() {
  if (volumeControl) {
    sound.clarity.setVolume(0.3);
    sound.clarity.play();
  }
  stats.mana += stats.maxmana / 5;
  if (stats.mana > stats.manmana) {
    stats.mana = stats.maxmana;
  }
}

//heal ability
function castheal() {
  if (volumeControl) {
    sound.heal.setVolume(0.3);
    sound.heal.play();
  }
  if (stats.maxhp * 0.1 > (stats.maxhp - stats.health) * 0.25) {
    stats.health += stats.maxhp * 0.1;
  }
  else {
    stats.health += (stats.maxhp - stats.health) * 0.25;
  }
  if (stats.health > stats.maxhp) {
    stats.health = stats.maxhp;
  }
}

//carrier buff
function castbarrier() {
  if (volumeControl) {
    sound.barrier.setVolume(0.3);
    sound.barrier.play();
  }
  buffs.barrier = true;
}

//flash ability
function castflash() {


  let x;
  let y;
  let theta;
  let dashx;
  let dashy;
  destinationpos.x = mouseX;
  destinationpos.y = mouseY;
  // negative x means backward movement
  x = destinationpos.x - charpos.x;
  // negative y means upward movement
  y = destinationpos.y - charpos.y;
  theta = atan(abs(x) / abs(y));
  if (volumeControl) {
    sound.flash.setVolume(0.3);
    sound.flash.play();
  }
  if (sqrt(sq(x) + sq(y)) < width * 0.35) {
    
    if (destinationpos.x > width - charpos.width) {
      destinationpos.x = floor(width - charpos.width);
    }
    if (destinationpos.x < 0) {
      destinationpos.x = 0;
    }
    if (destinationpos.y > height - charpos.height) {
      destinationpos.y = floor(height - charpos.height);
    }
    if (destinationpos.y < 0) {
      destinationpos.y = 0;
    }

    charpos.x = destinationpos.x;
    charpos.y = destinationpos.y;
  }
  else {
    dashx = abs(sin(theta) * width * 0.2);
    dashy = abs(cos(theta) * width * 0.2);
    if (x < 0) {
      dashx = dashx * -1;
    }
    if (y < 0) {
      dashy = dashy * -1;
    }
    destinationpos.x = charpos.x + dashx;
    destinationpos.y = charpos.y + dashy;

    if (destinationpos.x > width - charpos.width) {
      destinationpos.x = floor(width - charpos.width);
    }
    if (destinationpos.x < 0) {
      destinationpos.x = 0;
    }
    if (destinationpos.y > height - charpos.height) {
      destinationpos.y = floor(height - charpos.height);
    }
    if (destinationpos.y < 0) {
      destinationpos.y = 0;
    }

    charpos.x = destinationpos.x;
    charpos.y = destinationpos.y;

    if (x < 0) {
      destinationpos.x = charpos.x - 1;
    }
    else {
      destinationpos.x = charpos.x + 1;
    }
  }

}

//fires the first or second projectile
function bolt1() {

  let x;
  let y;
  let theta;
  x = mouseX - (charpos.x + charpos.width / 2);
  y = mouseY - (charpos.y + charpos.height / 2);
  theta = atan(x / y);
  let ratio1 = width * 0.006;
  if (itemabilities.lightningbolt) {
    ratio1 = ratio1 * 1.8;
  }
  let vx = abs(ratio1 * sin(theta));
  let vy = abs(ratio1 * cos(theta));
  if (x < 0) {
    vx = vx * -1;
  }
  if (y < 0) {
    vy = vy * -1;
  }

  if (theta > 0) {
    theta = PI / 2 - theta;
  }
  else if (theta < 0) {
    theta = 3 * PI / 2 - theta;
  }


  let damage;
  if (rmode) {
    damage = 30 + stats.ap * 1.25;
  }
  else {
    damage = 15 + stats.ap;
  }

  if (buffs.holyfire) {
    damage = damage * 1.1;
  }
  if (buffs.ignite) {
    damage = damage * 1.1;
  }

  if (mouseX >= charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.03, height * 0.08, 1, 1, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  else if (mouseX < charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.03, height * 0.08, 1, 0, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  if (volumeControl) {
    player.wsound1.setVolume(0.5);
    player.wsound1.play();
  }

  if (itemabilities.hurricane) {
    bolt1c();
    bolt1d();
  }

  if (itemabilities.multishot) {
    let randomnum = random(0, 100);
    if (randomnum <= 100) {
      setTimeout(bolt1b, 250);
    }
  }
}

//fires the first or second multishot projectile
function bolt1b() {

  let x;
  let y;
  let theta;
  x = mouseX - (charpos.x + charpos.width / 2);
  y = mouseY - (charpos.y + charpos.height / 2);
  theta = atan(x / y);
  let ratio1 = width * 0.006;
  if (itemabilities.lightningbolt) {
    ratio1 = ratio1 * 1.8;
  }
  let vx = abs(ratio1 * sin(theta));
  let vy = abs(ratio1 * cos(theta));
  if (x < 0) {
    vx = vx * -1;
  }
  if (y < 0) {
    vy = vy * -1;
  }

  if (theta > 0) {
    theta = PI / 2 - theta;
  }
  else if (theta < 0) {
    theta = 3 * PI / 2 - theta;
  }


  let damage;
  if (rmode) {
    damage = 30 + stats.ap * 1.25;
  }
  else {
    damage = 15 + stats.ap;
  }

  if (buffs.holyfire) {
    damage = damage * 1.1;
  }
  if (buffs.ignite) {
    damage = damage * 1.1;
  }

  damage = damage * 0.25;

  if (mouseX >= charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.03, height * 0.08, 1, 1, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  else if (mouseX < charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.03, height * 0.08, 1, 0, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  if (volumeControl) {
    player.wsound1.setVolume(0.5);
    player.wsound1.play();
  }

  if (itemabilities.hurricane) {
    bolt1c();
    bolt1d();
  }
}

//Runnan's Hurrican ability
function bolt1c() {

  let x;
  let y;
  let theta;
  x = mouseX - (charpos.x + charpos.width / 2);
  y = mouseY - (charpos.y + charpos.height / 2);
  theta = atan(x / y);
  let ratio1 = width * 0.006;
  if (itemabilities.lightningbolt) {
    ratio1 = ratio1 * 1.8;
  }
  let vx = abs(ratio1 * sin(theta + radians(10)));
  let vy = abs(ratio1 * cos(theta + radians(10)));
  if (x < 0) {
    vx = vx * -1;
  }
  if (y < 0) {
    vy = vy * -1;
  }

  if (theta > 0) {
    theta = PI / 2 - theta;
  }
  else if (theta < 0) {
    theta = 3 * PI / 2 - theta;
  }

  let damage;
  if (rmode) {
    damage = 30 + stats.ap * 1.25;
  }
  else {
    damage = 15 + stats.ap;
  }

  if (buffs.holyfire) {
    damage = damage * 1.1;
  }
  if (buffs.ignite) {
    damage = damage * 1.1;
  }

  if (mouseX >= charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.03, height * 0.08, 1, 1, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  else if (mouseX < charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.03, height * 0.08, 1, 0, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  if (volumeControl) {
    player.wsound1.setVolume(0.5);
    player.wsound1.play();
  }

  if (itemabilities.multishot) {
    let randomnum = random(0, 100);
    if (randomnum <= 15) {
      setTimeout(bolt1b, 250);
    }
  }
}

//Runnan's Hurrican ability
function bolt1d() {

  let x;
  let y;
  let theta;
  x = mouseX - (charpos.x + charpos.width / 2);
  y = mouseY - (charpos.y + charpos.height / 2);
  theta = atan(x / y);
  let ratio1 = width * 0.006;
  if (itemabilities.lightningbolt) {
    ratio1 = ratio1 * 1.8;
  }
  let vx = abs(ratio1 * sin(theta - radians(10)));
  let vy = abs(ratio1 * cos(theta - radians(10)));
  if (x < 0) {
    vx = vx * -1;
  }
  if (y < 0) {
    vy = vy * -1;
  }

  if (theta > 0) {
    theta = PI / 2 - theta;
  }
  else if (theta < 0) {
    theta = 3 * PI / 2 - theta;
  }

  let damage;
  if (rmode) {
    damage = 30 + stats.ap * 1.25;
  }
  else {
    damage = 15 + stats.ap;
  }

  if (buffs.holyfire) {
    damage = damage * 1.1;
  }
  if (buffs.ignite) {
    damage = damage * 1.1;
  }

  if (mouseX >= charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.03, height * 0.08, 1, 1, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  else if (mouseX < charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.03, height * 0.08, 1, 0, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  if (volumeControl) {
    player.wsound1.setVolume(0.5);
    player.wsound1.play();
  }

  if (itemabilities.multishot) {
    let randomnum = random(0, 100);
    if (randomnum <= 15) {
      setTimeout(bolt1b, 250);
    }
  }
}

//fires the third projectile
function bolt2() {

  let x;
  let y;
  let theta;
  x = mouseX - charpos.x - charpos.width / 2;
  y = mouseY - charpos.y - charpos.height / 2;
  theta = atan(x / y);
  let ratio1 = width * 0.006;
  if (itemabilities.lightningbolt) {
    ratio1 = ratio1 * 1.8;
  }
  let vx = abs(ratio1 * sin(theta));
  let vy = abs(ratio1 * cos(theta));
  if (x < 0) {
    vx = vx * -1;
  }
  if (y < 0) {
    vy = vy * -1;
  }

  if (theta > 0) {
    theta = PI / 2 - theta;
  }
  else if (theta < 0) {
    theta = 3 * PI / 2 - theta;
  }

  let damage;
  if (rmode) {
    damage = (30 + stats.ap * 1.25) * 1.25;
  }
  else {
    damage = (15 + stats.ap) * 1.25;
  }

  if (buffs.holyfire) {
    damage = damage * 1.1;
  }
  if (buffs.ignite) {
    damage = damage * 1.1;
  }

  if (mouseX >= charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.035, height * 0.08, 2, 1, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  else if (mouseX < charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.035, height * 0.08, 2, 0, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  if (volumeControl) {
    player.wsound2.setVolume(0.5);
    player.wsound2.play();
  }

  if (itemabilities.multishot) {
    let randomnum = random(0, 100);
    if (randomnum <= 100) {
      setTimeout(bolt2b, 250);
    }
  }

  if (itemabilities.hurricane) {
    bolt2c();
    bolt2d();
  }
}

//fires the third multishot projectile
function bolt2b() {

  let x;
  let y;
  let theta;
  x = mouseX - charpos.x - charpos.width / 2;
  y = mouseY - charpos.y - charpos.height / 2;
  theta = atan(x / y);
  let ratio1 = width * 0.006;
  if (itemabilities.lightningbolt) {
    ratio1 = ratio1 * 1.8;
  }
  let vx = abs(ratio1 * sin(theta));
  let vy = abs(ratio1 * cos(theta));
  if (x < 0) {
    vx = vx * -1;
  }
  if (y < 0) {
    vy = vy * -1;
  }

  if (theta > 0) {
    theta = PI / 2 - theta;
  }
  else if (theta < 0) {
    theta = 3 * PI / 2 - theta;
  }

  let damage;
  if (rmode) {
    damage = (30 + stats.ap * 1.25) * 1.25;
  }
  else {
    damage = (15 + stats.ap) * 1.25;
  }

  if (buffs.holyfire) {
    damage = damage * 1.1;
  }
  if (buffs.ignite) {
    damage = damage * 1.1;
  }

  damage = damage * 0.25;

  if (mouseX >= charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.035, height * 0.08, 2, 1, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  else if (mouseX < charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.035, height * 0.08, 2, 0, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  if (volumeControl) {
    player.wsound2.setVolume(0.5);
    player.wsound2.play();
  }

  if (itemabilities.hurricane) {
    bolt2c();
    bolt2d();
  }
}

//fires the third projectile
function bolt2c() {

  let x;
  let y;
  let theta;
  x = mouseX - charpos.x - charpos.width / 2;
  y = mouseY - charpos.y - charpos.height / 2;
  theta = atan(x / y);
  let ratio1 = width * 0.006;
  if (itemabilities.lightningbolt) {
    ratio1 = ratio1 * 1.8;
  }
  let vx = abs(ratio1 * sin(theta + radians(10)));
  let vy = abs(ratio1 * cos(theta + radians(10)));
  if (x < 0) {
    vx = vx * -1;
  }
  if (y < 0) {
    vy = vy * -1;
  }

  if (theta > 0) {
    theta = PI / 2 - theta;
  }
  else if (theta < 0) {
    theta = 3 * PI / 2 - theta;
  }

  let damage;
  if (rmode) {
    damage = (30 + stats.ap * 1.25) * 1.25;
  }
  else {
    damage = (15 + stats.ap) * 1.25;
  }

  if (buffs.holyfire) {
    damage = damage * 1.1;
  }
  if (buffs.ignite) {
    damage = damage * 1.1;
  }

  if (mouseX >= charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.035, height * 0.08, 2, 1, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  else if (mouseX < charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.035, height * 0.08, 2, 0, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  if (volumeControl) {
    player.wsound2.setVolume(0.5);
    player.wsound2.play();
  }

  if (itemabilities.multishot) {
    let randomnum = random(0, 100);
    if (randomnum <= 15) {
      setTimeout(bolt2b, 250);
    }
  }
}

//fires the third projectile
function bolt2d() {

  let x;
  let y;
  let theta;
  x = mouseX - charpos.x - charpos.width / 2;
  y = mouseY - charpos.y - charpos.height / 2;
  theta = atan(x / y);
  let ratio1 = width * 0.006;
  if (itemabilities.lightningbolt) {
    ratio1 = ratio1 * 1.8;
  }
  let vx = abs(ratio1 * sin(theta - radians(10)));
  let vy = abs(ratio1 * cos(theta - radians(10)));
  if (x < 0) {
    vx = vx * -1;
  }
  if (y < 0) {
    vy = vy * -1;
  }

  if (theta > 0) {
    theta = PI / 2 - theta;
  }
  else if (theta < 0) {
    theta = 3 * PI / 2 - theta;
  }

  let damage;
  if (rmode) {
    damage = (30 + stats.ap * 1.25) * 1.25;
  }
  else {
    damage = (15 + stats.ap) * 1.25;
  }

  if (buffs.holyfire) {
    damage = damage * 1.1;
  }
  if (buffs.ignite) {
    damage = damage * 1.1;
  }

  if (mouseX >= charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.035, height * 0.08, 2, 1, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  else if (mouseX < charpos.x + charpos.width / 2) {
    bolthitbox.push([]); 
    bolts.push(new Bolt(charpos.x + charpos.width / 2, charpos.y + charpos.height / 2, width * 0.035, height * 0.08, 2, 0, damage, 0, vx, vy, theta, bolthitbox.length - 1));
  }
  if (volumeControl) {
    player.wsound2.setVolume(0.5);
    player.wsound2.play();
  }

  if (itemabilities.multishot) {
    let randomnum = random(0, 100);
    if (randomnum <= 15) {
      setTimeout(bolt2b, 250);
    }
  }
}

//cast timer
function cast() {

  currentTime = millis();

}

//provides some support for resizing windows during gameplay
function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  createButtons();
  loadItems();
  loadSummoners();

}