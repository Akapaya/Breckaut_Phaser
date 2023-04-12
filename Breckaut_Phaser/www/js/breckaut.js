var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { create: create, update: update, render: render });



var launcherVertices = [900.35,-224.963,1799.98,-224.963]; //barrinha que lancha bola
var gutterVertices = [-480.857,413.599,293.837,413.599];



var ballStart = [17.5016, -21.318];


var ballBody;
var flipperJoints = [];
var PTM = 100; 
var needReset = false;
var bost = false;

var varrinha;

var yaaaychao;

var vida = 3;

//function carregaAssets() {
//	game.load.image('tarrinha', 'img/varrinha.png',1,1);
//}
function create() {
            

    
    game.world.setBounds(-400, -520, 800, 600);
    
    game.stage.backgroundColor = '#000000';

    // Enable Box2D physics
    game.physics.startSystem(Phaser.Physics.BOX2D);
    game.physics.box2d.ptmRatio = 500;
    game.physics.box2d.gravity.y = 5000; // large gravity to make scene feel smaller
    game.physics.box2d.friction = 0.1;
    varrinha = game.add.sprite(359, 595, 'tarrinha');
    varrinha = new Phaser.Physics.Box2D.Body(game, null, 359, 595, 0);
        varrinha.setRectangle(650, 120, 0, 0);
		
			//varrinha.scale.set(1);
			//varrinha.smoothed = false;
	
    yaaaychao = new Phaser.Physics.Box2D.Body(game, null, -3250, -2295, 0);
	yaaaychao2 = new Phaser.Physics.Box2D.Body(game, null, -3650, -2295, 0);
	yaaaychao.setRectangle(350, 120, 0, 0);
	yaaaychao2.setRectangle(350, 120, 0, 0);
	yaaaychao3 = new Phaser.Physics.Box2D.Body(game, null, -2850, -2295, 0);
	yaaaychao4 = new Phaser.Physics.Box2D.Body(game, null, -2450, -2295, 0);
	yaaaychao3.setRectangle(350, 120, 0, 0);
	yaaaychao4.setRectangle(350, 120, 0, 0);
	yaaaychao5= new Phaser.Physics.Box2D.Body(game, null, -2050, -2295, 0);
	yaaaychao6 = new Phaser.Physics.Box2D.Body(game, null, -1650, -2295, 0);
	yaaaychao5.setRectangle(350, 120, 0, 0);
	yaaaychao6.setRectangle(350, 120, 0, 0);
	yaaaychao7 = new Phaser.Physics.Box2D.Body(game, null, -1250, -2295, 0);
	yaaaychao8 = new Phaser.Physics.Box2D.Body(game, null, -850, -2295, 0);
	yaaaychao7.setRectangle(350, 120, 0, 0);
	yaaaychao8.setRectangle(350, 120, 0, 0);
	yaaaychao9= new Phaser.Physics.Box2D.Body(game, null, -450, -2295, 0);
	yaaaychao10 = new Phaser.Physics.Box2D.Body(game, null, -50, -2295, 0);
	yaaaychao9.setRectangle(350, 120, 0, 0);
	yaaaychao10.setRectangle(350, 120, 0, 0);
	yaaaychao11 = new Phaser.Physics.Box2D.Body(game, null, 350, -2295, 0);
	yaaaychao12 = new Phaser.Physics.Box2D.Body(game, null, 750, -2295, 0);
	yaaaychao11.setRectangle(350, 120, 0, 0);
	yaaaychao12.setRectangle(350, 120, 0, 0);
	yaaaychao13= new Phaser.Physics.Box2D.Body(game, null, 1150, -2295, 0);
	yaaaychao14 = new Phaser.Physics.Box2D.Body(game, null, 1550, -2295, 0);
	yaaaychao13.setRectangle(350, 120, 0, 0);
	yaaaychao14.setRectangle(350, 120, 0, 0);
	yaaaychao15 = new Phaser.Physics.Box2D.Body(game, null, 1950, -2295, 0);
	yaaaychao16 = new Phaser.Physics.Box2D.Body(game, null, 2350, -2295, 0);
	yaaaychao15.setRectangle(350, 120, 0, 0);
	yaaaychao16.setRectangle(350, 120, 0, 0);
	yaaaychao17= new Phaser.Physics.Box2D.Body(game, null, 2750, -2295, 0);
	yaaaychao18 = new Phaser.Physics.Box2D.Body(game, null, 3150, -2295, 0);
	yaaaychao17.setRectangle(350, 120, 0, 0);
	yaaaychao18.setRectangle(350, 120, 0, 0);
	yaaaychao19 = new Phaser.Physics.Box2D.Body(game, null, 3550, -2295, 0);	
	yaaaychao19.setRectangle(350, 120, 0, 0);
	// linha 1
	
	yaaaychao20 = new Phaser.Physics.Box2D.Body(game, null, -3250, -2495, 0);
	yaaaychao21 = new Phaser.Physics.Box2D.Body(game, null, -3650, -2495, 0);
	yaaaychao20.setRectangle(350, 120, 0, 0);
	yaaaychao21.setRectangle(350, 120, 0, 0);
	yaaaychao22 = new Phaser.Physics.Box2D.Body(game, null, -2850, -2495, 0);
	yaaaychao23 = new Phaser.Physics.Box2D.Body(game, null, -2450, -2495, 0);
	yaaaychao22.setRectangle(350, 120, 0, 0);
	yaaaychao23.setRectangle(350, 120, 0, 0);
	yaaaychao24= new Phaser.Physics.Box2D.Body(game, null, -2050, -2495, 0);
	yaaaychao25 = new Phaser.Physics.Box2D.Body(game, null, -1650, -2495, 0);
	yaaaychao24.setRectangle(350, 120, 0, 0);
	yaaaychao25.setRectangle(350, 120, 0, 0);
	yaaaychao26 = new Phaser.Physics.Box2D.Body(game, null, -1250, -2495, 0);
	yaaaychao27 = new Phaser.Physics.Box2D.Body(game, null, -850, -2495, 0);
	yaaaychao26.setRectangle(350, 120, 0, 0);
	yaaaychao27.setRectangle(350, 120, 0, 0);
	yaaaychao28= new Phaser.Physics.Box2D.Body(game, null, -450, -2495, 0);
	yaaaychao29 = new Phaser.Physics.Box2D.Body(game, null, -50, -2495, 0);
	yaaaychao28.setRectangle(350, 120, 0, 0);
	yaaaychao29.setRectangle(350, 120, 0, 0);
	yaaaychao30 = new Phaser.Physics.Box2D.Body(game, null, 350, -2495, 0);
	yaaaychao31 = new Phaser.Physics.Box2D.Body(game, null, 750, -2495, 0);
	yaaaychao30.setRectangle(350, 120, 0, 0);
	yaaaychao31.setRectangle(350, 120, 0, 0);
	yaaaychao32= new Phaser.Physics.Box2D.Body(game, null, 1150, -2495, 0);
	yaaaychao33 = new Phaser.Physics.Box2D.Body(game, null, 1550, -2495, 0);
	yaaaychao32.setRectangle(350, 120, 0, 0);
	yaaaychao33.setRectangle(350, 120, 0, 0);
	yaaaychao34 = new Phaser.Physics.Box2D.Body(game, null, 1950, -2495, 0);
	yaaaychao35 = new Phaser.Physics.Box2D.Body(game, null, 2350, -2495, 0);
	yaaaychao34.setRectangle(350, 120, 0, 0);
	yaaaychao35.setRectangle(350, 120, 0, 0);
	yaaaychao36= new Phaser.Physics.Box2D.Body(game, null, 2750, -2495, 0);
	yaaaychao37 = new Phaser.Physics.Box2D.Body(game, null, 3150, -2495, 0);
	yaaaychao36.setRectangle(350, 120, 0, 0);
	yaaaychao37.setRectangle(350, 120, 0, 0);
	yaaaychao38 = new Phaser.Physics.Box2D.Body(game, null, 3550, -2495, 0);	
	yaaaychao38.setRectangle(350, 120, 0, 0);
	
	//linha 2
	
	yaaaychao39 = new Phaser.Physics.Box2D.Body(game, null, -3250, -2695, 0);
	yaaaychao40 = new Phaser.Physics.Box2D.Body(game, null, -3650, -2695, 0);
	yaaaychao39.setRectangle(350, 120, 0, 0);
	yaaaychao40.setRectangle(350, 120, 0, 0);
	yaaaychao41 = new Phaser.Physics.Box2D.Body(game, null, -2850, -2695, 0);
	yaaaychao42 = new Phaser.Physics.Box2D.Body(game, null, -2450, -2695, 0);
	yaaaychao41.setRectangle(350, 120, 0, 0);
	yaaaychao42.setRectangle(350, 120, 0, 0);
	yaaaychao43= new Phaser.Physics.Box2D.Body(game, null, -2050, -2695, 0);
	yaaaychao44 = new Phaser.Physics.Box2D.Body(game, null, -1650, -2695, 0);
	yaaaychao43.setRectangle(350, 120, 0, 0);
	yaaaychao44.setRectangle(350, 120, 0, 0);
	yaaaychao45 = new Phaser.Physics.Box2D.Body(game, null, -1250, -2695, 0);
	yaaaychao46 = new Phaser.Physics.Box2D.Body(game, null, -850, -2695, 0);
	yaaaychao45.setRectangle(350, 120, 0, 0);
	yaaaychao46.setRectangle(350, 120, 0, 0);
	yaaaychao47= new Phaser.Physics.Box2D.Body(game, null, -450, -2695, 0);
	yaaaychao48 = new Phaser.Physics.Box2D.Body(game, null, -50, -2695, 0);
	yaaaychao47.setRectangle(350, 120, 0, 0);
	yaaaychao48.setRectangle(350, 120, 0, 0);
	yaaaychao49 = new Phaser.Physics.Box2D.Body(game, null, 350, -2695, 0);
	yaaaychao50 = new Phaser.Physics.Box2D.Body(game, null, 750, -2695, 0);
	yaaaychao49.setRectangle(350, 120, 0, 0);
	yaaaychao50.setRectangle(350, 120, 0, 0);
	yaaaychao51= new Phaser.Physics.Box2D.Body(game, null, 1150, -2695, 0);
	yaaaychao52 = new Phaser.Physics.Box2D.Body(game, null, 1550, -2695, 0);
	yaaaychao51.setRectangle(350, 120, 0, 0);
	yaaaychao52.setRectangle(350, 120, 0, 0);
	yaaaychao53 = new Phaser.Physics.Box2D.Body(game, null, 1950, -2695, 0);
	yaaaychao54 = new Phaser.Physics.Box2D.Body(game, null, 2350, -2695, 0);
	yaaaychao53.setRectangle(350, 120, 0, 0);
	yaaaychao54.setRectangle(350, 120, 0, 0);
	yaaaychao55= new Phaser.Physics.Box2D.Body(game, null, 2750, -2695, 0);
	yaaaychao56 = new Phaser.Physics.Box2D.Body(game, null, 3150, -2695, 0);
	yaaaychao55.setRectangle(350, 120, 0, 0);
	yaaaychao56.setRectangle(350, 120, 0, 0);
	yaaaychao57 = new Phaser.Physics.Box2D.Body(game, null, 3550, -2695, 0);	
	yaaaychao57.setRectangle(350, 120, 0, 0);
	// linha 3
	yaaaychao58 = new Phaser.Physics.Box2D.Body(game, null, -3250, -2895, 0);
	yaaaychao59 = new Phaser.Physics.Box2D.Body(game, null, -3650, -2895, 0);
	yaaaychao58.setRectangle(350, 120, 0, 0);
	yaaaychao59.setRectangle(350, 120, 0, 0);
	yaaaychao60 = new Phaser.Physics.Box2D.Body(game, null, -2850, -2895, 0);
	yaaaychao61 = new Phaser.Physics.Box2D.Body(game, null, -2450, -2895, 0);
	yaaaychao60.setRectangle(350, 120, 0, 0);
	yaaaychao61.setRectangle(350, 120, 0, 0);
	yaaaychao62= new Phaser.Physics.Box2D.Body(game, null, -2050, -2895, 0);
	yaaaychao63 = new Phaser.Physics.Box2D.Body(game, null, -1650, -2895, 0);
	yaaaychao62.setRectangle(350, 120, 0, 0);
	yaaaychao63.setRectangle(350, 120, 0, 0);
	yaaaychao64 = new Phaser.Physics.Box2D.Body(game, null, -1250, -2895, 0);
	yaaaychao65 = new Phaser.Physics.Box2D.Body(game, null, -850, -2895, 0);
	yaaaychao64.setRectangle(350, 120, 0, 0);
	yaaaychao65.setRectangle(350, 120, 0, 0);
	yaaaychao66= new Phaser.Physics.Box2D.Body(game, null, -450, -2895, 0);
	yaaaychao67 = new Phaser.Physics.Box2D.Body(game, null, -50, -2895, 0);
	yaaaychao66.setRectangle(350, 120, 0, 0);
	yaaaychao67.setRectangle(350, 120, 0, 0);
	yaaaychao68 = new Phaser.Physics.Box2D.Body(game, null, 350, -2895, 0);
	yaaaychao69 = new Phaser.Physics.Box2D.Body(game, null, 750, -2895, 0);
	yaaaychao68.setRectangle(350, 120, 0, 0);
	yaaaychao69.setRectangle(350, 120, 0, 0);
	yaaaychao70= new Phaser.Physics.Box2D.Body(game, null, 1150, -2895, 0);
	yaaaychao71 = new Phaser.Physics.Box2D.Body(game, null, 1550, -2895, 0);
	yaaaychao70.setRectangle(350, 120, 0, 0);
	yaaaychao71.setRectangle(350, 120, 0, 0);
	yaaaychao72 = new Phaser.Physics.Box2D.Body(game, null, 1950, -2895, 0);
	yaaaychao73 = new Phaser.Physics.Box2D.Body(game, null, 2350, -2895, 0);
	yaaaychao72.setRectangle(350, 120, 0, 0);
	yaaaychao73.setRectangle(350, 120, 0, 0);
	yaaaychao74= new Phaser.Physics.Box2D.Body(game, null, 2750, -2895, 0);
	yaaaychao75 = new Phaser.Physics.Box2D.Body(game, null, 3150, -2895, 0);
	yaaaychao74.setRectangle(350, 120, 0, 0);
	yaaaychao75.setRectangle(350, 120, 0, 0);
	yaaaychao76 = new Phaser.Physics.Box2D.Body(game, null, 3550, -2895, 0);	
	yaaaychao76.setRectangle(350, 120, 0, 0);
	//linha 4
	yaaaychao77 = new Phaser.Physics.Box2D.Body(game, null, -3250, -3095, 0);
	yaaaychao78 = new Phaser.Physics.Box2D.Body(game, null, -3650, -3095, 0);
	yaaaychao77.setRectangle(350, 120, 0, 0);
	yaaaychao78.setRectangle(350, 120, 0, 0);
	yaaaychao79 = new Phaser.Physics.Box2D.Body(game, null, -2850, -3095, 0);
	yaaaychao80 = new Phaser.Physics.Box2D.Body(game, null, -2450, -3095, 0);
	yaaaychao79.setRectangle(350, 120, 0, 0);
	yaaaychao80.setRectangle(350, 120, 0, 0);
	yaaaychao81= new Phaser.Physics.Box2D.Body(game, null, -2050, -3095, 0);
	yaaaychao82 = new Phaser.Physics.Box2D.Body(game, null, -1650, -3095, 0);
	yaaaychao81.setRectangle(350, 120, 0, 0);
	yaaaychao82.setRectangle(350, 120, 0, 0);
	yaaaychao83 = new Phaser.Physics.Box2D.Body(game, null, -1250, -3095, 0);
	yaaaychao84 = new Phaser.Physics.Box2D.Body(game, null, -850, -3095, 0);
	yaaaychao83.setRectangle(350, 120, 0, 0);
	yaaaychao84.setRectangle(350, 120, 0, 0);
	yaaaychao85= new Phaser.Physics.Box2D.Body(game, null, -450, -3095, 0);
	yaaaychao86 = new Phaser.Physics.Box2D.Body(game, null, -50, -3095, 0);
	yaaaychao85.setRectangle(350, 120, 0, 0);
	yaaaychao86.setRectangle(350, 120, 0, 0);
	yaaaychao88 = new Phaser.Physics.Box2D.Body(game, null, 350, -3095, 0);
	yaaaychao89 = new Phaser.Physics.Box2D.Body(game, null, 750, -3095, 0);
	yaaaychao88.setRectangle(350, 120, 0, 0);
	yaaaychao89.setRectangle(350, 120, 0, 0);
	yaaaychao90= new Phaser.Physics.Box2D.Body(game, null, 1150, -3095, 0);
	yaaaychao91 = new Phaser.Physics.Box2D.Body(game, null, 1550, -3095, 0);
	yaaaychao90.setRectangle(350, 120, 0, 0);
	yaaaychao91.setRectangle(350, 120, 0, 0);
	yaaaychao92 = new Phaser.Physics.Box2D.Body(game, null, 1950, -3095, 0);
	yaaaychao93 = new Phaser.Physics.Box2D.Body(game, null, 2350, -3095, 0);
	yaaaychao92.setRectangle(350, 120, 0, 0);
	yaaaychao93.setRectangle(350, 120, 0, 0);
	yaaaychao94= new Phaser.Physics.Box2D.Body(game, null, 2750, -3095, 0);
	yaaaychao95 = new Phaser.Physics.Box2D.Body(game, null, 3150, -3095, 0);
	yaaaychao94.setRectangle(350, 120, 0, 0);
	yaaaychao95.setRectangle(350, 120, 0, 0);
	yaaaychao96 = new Phaser.Physics.Box2D.Body(game, null, 3550, -3095, 0);	
	yaaaychao96.setRectangle(350, 120, 0, 0);
	
	
	teto = new Phaser.Physics.Box2D.Body(game, null, 400, -5295, 0);
        teto.setRectangle(9000, 320, 0, 0);
	
	parede1 = new Phaser.Physics.Box2D.Body(game, null, -3970, -2440, 0);
        parede1.setRectangle(32, 6500, 0, 0);
	parede2 = new Phaser.Physics.Box2D.Body(game, null, 3970, -2440, 0);
        parede2.setRectangle(32, 6500, 0, 0);

    // Make the ground body
    var mainBody = new Phaser.Physics.Box2D.Body(this.game, null, 0, 0, 0);
    

    
    // Add gutter fixture
    gutterFixture = mainBody.addEdge(-4500, gutterVertices[1], 4800, gutterVertices[3]);
    gutterFixture.SetSensor(true);
    
    // Set restitution for launcher
    game.physics.box2d.restitution = 2; 
    mainBody.addEdge(varrinha);
    
    // ball
    game.physics.box2d.restitution = 0.1;
    ballBody = new Phaser.Physics.Box2D.Body(this.game, null, 359, -100);
    ballBody.setCircle(0.64 * PTM);
    ballBody.setFixtureContactCallback(gutterFixture, onHitGutter, this);
	ballBody.setFixtureContactCallback(varrinha, onHitVarrinha, this);
	ballBody.setFixtureContactCallback(yaaaychao, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao2, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao3, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao4, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao5, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao6, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao7, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao8, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao9, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao10, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao11, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao12, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao13, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao14, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao15, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao16, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao17, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao18, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao19, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao20, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao21, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao22, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao23, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao24, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao25, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao26, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao27, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao28, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao29, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao30, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao31, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao32, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao33, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao34, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao35, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao36, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao37, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao38, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao39, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao40, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao41, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao42, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao43, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao44, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao45, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao46, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao47, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao48, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao49, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao50, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao51, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao52, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao53, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao54, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao55, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao56, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao57, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao58, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao59, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao60, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao61, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao62, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao63, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao64, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao65, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao66, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao67, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao68, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao69, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao70, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao71, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao72, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao73, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao74, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao75, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao76, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao77, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao78, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao79, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao80, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao81, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao82, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao83, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao84, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao85, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao86, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao88, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao89, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao90, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao91, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao92, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao93, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao94, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao95, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(yaaaychao96, onHityaaaychao, this);
	ballBody.setFixtureContactCallback(teto, onHitteto, this);
	ballBody.setFixtureContactCallback(parede1, onHitParede1, this);
	ballBody.setFixtureContactCallback(parede2, onHitParede2, this);
    ballBody.bullet = true;


    
    // Flipper joints
    var motorSpeed = 2;
    var motorTorque = 100;  
    cursors = game.input.keyboard.createCursorKeys();
    

}

function onHitParede1(body1, body2, fixture1, fixture2, begin)
{
	ballBody.velocity.x = 2500;
}

function onHitParede2(body1, body2, fixture1, fixture2, begin)
{
	ballBody.velocity.x = -2000;
}

function onHitGutter(body1, body2, fixture1, fixture2, begin) {
    needReset = true; // this occurs inside the world Step, so don't do the actual reset here
}

function onHitVarrinha(body1, body2, fixture1, fixture2, begin)
{
	game.physics.box2d.gravity.y = -5000;
	bost = true;
}

function onHityaaaychao(body1,body2,fixture1,fixture2,begin)
{
	
	game.physics.box2d.gravity.y = 5000;
	//ballBody.destroy(this.body2);
	//yaaaychao.destroy();
	
	body2.destroy();
	//alert(this.ballBody)
}

function onHitteto(body1, body2, fixture1, fixture2, begin)
{
	game.physics.box2d.gravity.y = 5000;
}


function update() {
        
	
    if (needReset)
    {
		varrinha.x = 359;
		varrinha.y = 595;
        ballBody.x = 359;
        ballBody.y = -1500;
        ballBody.velocity.x = 0;
        ballBody.velocity.y = 0;
        ballBody.angularVelocity = 0;
        needReset = false;
    }
    if(bost)
		{
			if(cursors.left.isDown)
				{
					ballBody.velocity.x = -1400;
				}
			else
				{
					if(cursors.right.isDown)
						{
							ballBody.velocity.x = 1400;
						}
					else
						{
							ballBody.velocity.x = 0;
						}
				}
			bost = false;
		}
    var flipperSpeed = 30; // rad/s
    
    if (cursors.left.isDown)
    {
		if(varrinha.x > -3600)
			{
				varrinha.y = 9;
				varrinha.x -= 30;
			}
    }
    else
    {
       varrinha.y = 9;
    }
    
    if (cursors.right.isDown)
    {
		if(varrinha.x < 3600)
			{
        		varrinha.y = 9;
        		varrinha.x += 30;
			}
    }
    else
    {
        varrinha.y = 9;
    }
    
}

function render() {

    game.debug.box2dWorld();

}