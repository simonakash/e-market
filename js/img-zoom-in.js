function zoom(e){
var zoomer = e.currentTarget;
e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
x = offsetX/zoomer.offsetWidth*100
y = offsetY/zoomer.offsetHeight*100
zoomer.style.backgroundPosition = x + '% ' + y + '%';
}
/*-------
<div x-show="tab === 'tab1'" class="cursor-zoomin" onmousemove='zoom(event)' style='background-image: url(images/2__85707.1528614702.jpg)' >
<img class=" duration-500 w-full hover:opacity-0" src="images/2__85707.1528614702.jpg" alt="">
</div>
-------*/