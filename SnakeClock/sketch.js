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

/*let XMAXmin;
let XMINmin;
let YMINmin;
let YMAXmin;*/

let SQUARESIZE;

let currminute;

function setup() {
	createCanvas(1300,900); // make an HTML canvas element width x height pixels

	XMAX = width - 30;
	XMIN = 20;
	YMIN = 80;
	YMAX = height - 30;

	/*XMAXmin = width - 50;
	XMINmin = 50;
	YMINmin = 120;
	YMAXmin = height - 80;*/

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

	/*
	//hour snake clock
	let lastposx = xhour;
	let lastposy = yhour;
	for (let i = 0; i < hour(); i++)
	{
		let xpos;
		let ypos;
		if (lastposx <= XMAX + 1 && lastposy <= (YMIN + SQUARESIZE + 5) && lastposx > (XMIN + SQUARESIZE + 5))
		{
			xpos = lastposx - SQUARESIZE - 5;
			ypos = YMIN;
		} else if (lastposx >= (XMAX - SQUARESIZE - 5) && lastposy <= YMAX + 1)
		{
			xpos = XMAX;
			ypos = lastposy - SQUARESIZE - 5;
		} else if (lastposy >= (YMAX - SQUARESIZE - 5) && lastposx >= XMIN)
		{
			xpos = lastposx + SQUARESIZE + 5;
			ypos = YMAX;
		} else {
			xpos = XMIN;
			ypos = lastposy + SQUARESIZE + 5;
		}

		square (xpos, ypos, SQUARESIZE);
		lastposx = xpos;
		lastposy = ypos;
	}

	if (xhour < XMAX && yhour <= YMIN)
	{
		xhour += 8;
		//square(xhour, YMIN, SQUARESIZE);
	} else if (xhour >= XMAX && yhour < YMAX)
	{
		yhour += 8;
		//square (XMAX, yhour, SQUARESIZE);
	} else if (xhour > XMIN && yhour >= YMAX)
	{
		xhour -= 8;
		//square (xhour, YMAX, SQUARESIZE);
	} else if (xhour <= XMIN && yhour > YMIN)
	{
		yhour -= 8;
		//square(XMIN, yhour, SQUARESIZE);
	}*/

	if (currminute != minute())
	{
		currminute = minute();
		console.log(minute());
	}

	//minute snake clock
	let lastposx = xmin;
	let lastposy = ymin;
	for (let i = 0; i < hour(); i++)
	{
		let xpos;
		let ypos;
		if (lastposx <= XMAX + 1 && lastposy <= (YMIN + SQUARESIZE + 5) && lastposx > (XMIN + SQUARESIZE + 5))
		{
			xpos = lastposx - SQUARESIZE - 5;
			ypos = YMIN;
		} else if (lastposx >= (XMAX - SQUARESIZE - 5) && lastposy <= YMAX + 1)
		{
			xpos = XMAX;
			ypos = lastposy - SQUARESIZE - 5;
		} else if (lastposy >= (YMAX - SQUARESIZE - 5) && lastposx >= XMIN)
		{
			xpos = lastposx + SQUARESIZE + 5;
			ypos = YMAX;
		} else {
			xpos = XMIN;
			ypos = lastposy + SQUARESIZE + 5;
		}

		square (xpos, ypos, SQUARESIZE);
		lastposx = xpos;
		lastposy = ypos;
	}

	if (xmin < XMAX && ymin <= YMIN)
	{
		xmin += 8;
		//square(xhour, YMIN, SQUARESIZE);
	} else if (xmin >= XMAX && ymin < YMAX)
	{
		ymin += 8;
		//square (XMAX, yhour, SQUARESIZE);
	} else if (xmin > XMIN && ymin >= YMAX)
	{
		xmin -= 8;
		//square (xhour, YMAX, SQUARESIZE);
	} else if (xmin <= XMIN && ymin > YMIN)
	{
		ymin -= 8;
		//square(XMIN, yhour, SQUARESIZE);
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
