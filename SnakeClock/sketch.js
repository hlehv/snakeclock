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

let XMAXmin;
let XMINmin;
let YMINmin;
let YMAXmin;

let XMAXsec;
let XMINsec;
let YMINsec;
let YMAXsec;

let SQUARESIZE;

let currminute;

function setup() {
	createCanvas(657,500); // make an HTML canvas element width x height pixels

	XMAX = width - 20;
	XMIN = 10;
	YMIN = 20;
	YMAX = height - 30;

	XMAXmin = width - 40;
	XMINmin = 50;
	YMINmin = 120;
	YMAXmin = height - 80;

	XMAXsec = width - 100;
	XMINsec = 100;
	YMINsec = 180;
	YMAXsec = height - 100;

	xhour = XMIN;
	xmin = XMINmin;
	xsec = XMINsec;

	yhour = YMIN;
	ymin = YMINmin;
	ysec = YMINsec;

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

	
	//hour snake clock
	fill('rgb(0,235,255)');
	stroke('rgb(0,235,255)');
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
		} else if (lastposx >= (XMAX - SQUARESIZE - 5) && lastposy <= YMAX + 1 && lastposy > YMIN)
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
		xhour += 1;
		//square(xhour, YMIN, SQUARESIZE);
	} else if (xhour >= XMAX && yhour < YMAX)
	{
		yhour += 1;
		//square (XMAX, yhour, SQUARESIZE);
	} else if (xhour > XMIN && yhour >= YMAX)
	{
		xhour -= 1;
		//square (xhour, YMAX, SQUARESIZE);
	} else if (xhour <= XMIN && yhour > YMIN)
	{
		yhour -= 1;
		//square(XMIN, yhour, SQUARESIZE);
	}

	if (currminute != minute())
	{
		currminute = minute();
		console.log(minute());
	}

	//minute snake clock

	fill('rgb(255,0,245)');
	stroke('rgb(255,0,245)');

	lastposx = xmin;
	lastposy = ymin;
	for (let i = 0; i < minute(); i++)
	{
		let xpos;
		let ypos;
		if (lastposx <= XMAXmin + 1 && lastposy <= (YMINmin + SQUARESIZE + 5) && lastposx > (XMINmin + SQUARESIZE + 5))
		{
			xpos = lastposx - SQUARESIZE - 5;
			ypos = YMINmin;
		} else if (lastposx >= (XMAXmin - SQUARESIZE - 5) && lastposy <= YMAXmin + 1)
		{
			xpos = XMAXmin;
			ypos = lastposy - SQUARESIZE - 5;
		} else if (lastposy >= (YMAXmin - SQUARESIZE - 5) && lastposx >= XMINmin)
		{
			xpos = lastposx + SQUARESIZE + 5;
			ypos = YMAXmin;
		} else {
			xpos = XMINmin;
			ypos = lastposy + SQUARESIZE + 5;
		}

		square (xpos, ypos, SQUARESIZE);
		lastposx = xpos;
		lastposy = ypos;
	}

	if (xmin < XMAXmin && ymin <= YMINmin)
	{
		xmin += 4;
	} else if (xmin >= XMAXmin && ymin < YMAXmin)
	{
		ymin += 4;
	} else if (xmin > XMINmin && ymin >= YMAXmin)
	{
		xmin -= 4;
	} else if (xmin <= XMINmin && ymin > YMINmin)
	{
		ymin -= 4;
	}

	//second snake clock
	fill('rgb(0,255,0)');
	stroke('rgb(0,255,0)');

	lastposx = xsec;
	lastposy = ysec;
	for (let i = 0; i < second(); i++)
	{
		let xpos;
		let ypos;
		if (lastposx <= XMAXsec + 1 && lastposy <= (YMINsec + SQUARESIZE + 6) && lastposx > (XMINsec + SQUARESIZE + 6))
		{
			xpos = lastposx - SQUARESIZE - 5;
			ypos = YMINsec;
		} else if (lastposx >= (XMAXsec - SQUARESIZE - 4) && lastposy <= YMAXsec + 1)
		{
			xpos = XMAXsec;
			ypos = lastposy - SQUARESIZE - 5;
		} else if (lastposy >= (YMAXsec - SQUARESIZE - 4) && lastposx >= XMINsec)
		{
			xpos = lastposx + SQUARESIZE + 5;
			ypos = YMAXsec;
		} else {
			xpos = XMINsec;
			ypos = lastposy + SQUARESIZE + 5;
		}

		square (xpos, ypos, SQUARESIZE);
		lastposx = xpos;
		lastposy = ypos;
	}

	if (xsec < XMAXsec && ysec <= YMINsec)
	{
		xsec += 8;
	} else if (xsec >= XMAXsec && ysec < YMAXsec)
	{
		ysec += 8;
	} else if (xsec > XMINsec && ysec >= YMAXsec)
	{
		xsec -= 8;
	} else if (xsec <= XMINsec && ysec > YMINsec)
	{
		ysec -= 8;
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
