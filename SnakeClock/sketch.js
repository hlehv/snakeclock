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

	XMAX = width - 30;
	XMIN = 20;
	YMIN = 80;
	YMAX = height - 30;

	xhour = XMIN;
	xmin = XMIN;
	xsec = XMIN;

	yhour = YMIN;
	ymin = YMIN;
	ysec = YMIN;

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

	let lastposx = xhour;
	let lastposy = yhour;
	for (let i = 0; i < hour(); i++)
	{
		let xpos;
		let ypos;
		if (lastposx <= XMAX + 1 && lastposy <= (YMIN + SQUARESIZE + 5))
		{
			xpos = lastposx - SQUARESIZE - 5;
			ypos = YMIN;
		} else if (lastposx >= (XMAX - SQUARESIZE - 5) && lastposy <= YMAX + 1)
		{
			xpos = XMAX;
			ypos = lastposy - SQUARESIZE - 5;
		} else if (lastposx <= XMAX && lastposx > XMIN && lastposy >= YMAX)
		{
			xpos = lastposx + SQUARESIZE + 5;
			ypos = YMAX;
		} else if (lastposx <= XMIN && lastposy <= YMAX - SQUARESIZE - 5)
		{
			xpos = XMIN;
			ypos = lastposy - SQUARESIZE - 5;
		}
		
		
		/*else if (lastposx > XMIN && lastposy >= YMAX && lastposx < XMAX - SQUARESIZE - 5)
		{
			xpos = lastpox + SQUARESIZE + 5;
			ypos = YMAX;
		}*/
		square (xpos, ypos, SQUARESIZE);
		lastposx = xpos;
		lastposy = ypos;
	}

	if (xhour < XMAX && yhour <= YMIN)
	{
		xhour += 3;
		//square(xhour, YMIN, SQUARESIZE);
	} else if (xhour >= XMAX && yhour < YMAX)
	{
		yhour += 3;
		//square (XMAX, yhour, SQUARESIZE);
	} else if (xhour > XMIN && yhour >= YMAX)
	{
		xhour -= 3;
		//square (xhour, YMAX, SQUARESIZE);
	} else if (xhour <= XMIN && yhour > YMIN)
	{
		yhour -= 3;
		//square(XMIN, yhour, SQUARESIZE);
	}

	if (currminute != minute())
	{
		currminute = minute();
		console.log(minute());
	}

	/*
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
		let xpos = ((xsec - ((SQUARESIZE + 5) * i)) % width);
		square(xpos, height / 2 + 80, SQUARESIZE);
		
		if (xpos >= width)
		{
			xsec = 0;
		}
	}

	xsec = xsec + 1;*/
}
