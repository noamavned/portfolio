var typed = new Typed('#HomeTypedElement', {
    strings: [
        '<i class="fa-brands fa-python"></i> Python',
        'C',
        'C#',
        '<i class="fa-brands fa-java"></i> Java',
        '<i class="fa-brands fa-js"></i> JavaScript',
        '<i class="fa-brands fa-html5"></i> HTML',
        '<i class="fa-brands fa-css3-alt"></i> CSS',
        '<i class="fa-brands fa-sass"></i> SASS',
        '<i class="fa-brands fa-less"></i> LESS',
        '<i class="fa-solid fa-database"></i> SQL',
    ],
    typeSpeed: 100,
    loop: true,
    shuffle: true,
});

function cycleFrames (_nyanCat, _currentFrame) {
	_nyanCat.classList = []
	_nyanCat.classList.add(`frame${_currentFrame}`)
}

(function () {
	let nyanCat = document.getElementById('nyan-cat')
	let currentFrame = 1

	setInterval(function () {
		currentFrame = (currentFrame % 6) + 1
		cycleFrames(nyanCat, currentFrame)
	}, 70)
})()

function DownloadPdf() {
    const file = "https://raw.githubusercontent.com/noamavned/portfolio/main/src/Resume.pdf";
    var el = document.createElement('a');
    el.href = file;
    el.setAttribute('download', '')
    el.click();
}
