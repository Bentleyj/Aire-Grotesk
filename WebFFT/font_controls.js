function setFontVariationSettings(text, scal, asce, desc, diac)
{
	if (scal < 1)
		scal = 1
	if (asce < 1)
		asce = 1
	if (desc < 1)
		desc = 1
	if (diac < 1)
		diac = 1
    var settings =  "font-variation-settings: 'SCAL' " + scal + ", 'BASE' 500, 'SPAC' 100, 'wght' 188.563, 'OPTI' 31.9816, 'HEIG' 338.898, 'CAPS' 462.677, 'CAPA' 420.056, 'CAPB' 334.816, 'ASCE' " + asce + ", 'DESC' " + desc + ", 'DIAC' " +  diac + " , 'MONO' 100, 'CURV' 0;"

    text.setAttribute('style', ('font-variation-settings', settings));
}

function renderDebugFFT(buffer, length, width, height) {
    // clear the background
    canvasContext.clearRect(0,0,width,height)

    canvasContext.fillStyle = 'rgb(0, 0, 0)'
    canvasContext.fillRect(0, 0, width, height)

    var barWidth = (width / length) * 2.5
    var x = 0

    for(var i = 0; i < length; i += 1) {
    	var barHeight = map(buffer[i], 0, 250, 0, height)
    	canvasContext.fillStyle = 'rgb( 200,50,50)'
    	canvasContext.fillRect(x, height-barHeight, barWidth, barHeight)
    	x += barWidth + 1;
    }
}