let xhour;
let xmin;
let xsec;

let yhour;
let ymin;
let ysec;

let XMAX;
let YMAX;
let XMIN;
let YMIN;

let SQUARESIZE;

let currminute;

function setup() {
	createCanvas(1300,900); // make an HTML canvas element width x height pixels
	xhour = width / 2;
	xmin = width / 2;
	xsec = width / 2;

	yhour = 20;
	ymin = 50;
	ysec = 80;

	XMAX = width - 30;
	XMIN = 20;
	YMIN = 80;
	YMAX = height - 30;

	SQUARESIZE = 17;

	currminute = minute();
}

function draw() {
	background(0);
	/*textSize(32);
	fill(180);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(0);
	text(second(), 10, 90);*/

	/*for (let i = 0; i < hour(); i++)
	{
		let xpos = (xhour - 14 * i) % width;
		let ypos = (yhour + 14 * i) % height;
		
		if (xpos < XMAX && ypos <= YMIN)
		{
			square(xpos, 20, 10);
		} else if (xpos >= XMAX && ypos < YMAX)
		{
			square (XMAX, ypos, 10);
		} else if (xpos > XMIN && ypos >= YMAX)
		{
			square (xpos, YMAX, 10);
		} else if (xpos <= XMIN && ypos > YMIN)
		{
			square(XMIN, ypos, 10);
		}
	}

	if (xhour < XMAX && yhour <= YMIN)
	{
		xhour += 3;
	} else if (xhour >= XMAX && yhour < YMAX)
	{
		yhour += 3;
	} else if (xhour > XMIN && yhour >= YMAX)
	{
		xhour -= 3;
	} else if (xhour <= XMIN && yhour > YMIN)
	{
		yhour -= 3;
	}*/

	if (currminute != minute())
	{
		currminute = minute();
		console.log(minute());
	}

	//create the hour snake
	fill('rgb(0,255,0)');
	stroke('rgb(0,255,0)');
	for (let i = 0; i < hour(); i++)
	{
		let xpos = (xhour - (SQUARESIZE + 5) * i) % width;
		square(xpos, height / 2 - 80, SQUARESIZE);
		
		if (xpos >= width)
		{
			xhour = 0;
		}
	}

	xhour = xhour + .25;
	
	//create the minute snake
	fill('rgb(255,0,245)');
	stroke('rgb(255,0,245)');
	for (let i = 0; i < minute(); i++)
	{
		let xpos = (xmin - ((SQUARESIZE + 5) * i)) % width;
		square(xpos, height / 2, SQUARESIZE);

		if (xpos >= width)
		{
			xmin = 0;
		}
	}

	xmin = xmin + .75;

	//create the second snake
	fill('rgb(0,235,255)');
	stroke('rgb(0,235,255)');

	
	for (let i = 0; i < second(); i++)
	{
		let xpos = (xsec - ((SQUARESIZE + 5) * i)) % width;
		square(xpos, height / 2 + 80, SQUARESIZE);
		
		if (xpos >= width)
		{
			xsec = 0;
		}
	}

	xsec = xsec + 1;
}
