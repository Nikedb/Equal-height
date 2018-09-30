$(document).foundation()

// all elems same height, vanilla version

function sameHeights () {

  var nodeList = document.getElementsByClassName('card');
  var elems = [].slice.call(nodeList);

  var tallest = Math.max.apply(Math, elems.map(function(elem, index) {
    elem.style.minHeight = ''; // clean first
    return elem.offsetHeight;
  }));

  elems.forEach(function(elem, index, arr){ 
    elem.style.minHeight = tallest + 'px';
  });
  
}

var resized = true;
var timeout = null;

var refresh = function(){
  if(resized) {
    requestAnimationFrame(sameHeights);
  }
	clearTimeout(timeout);
	timeout = setTimeout( refresh, 100);
  resized = false;
};

window.addEventListener('resize', function() { resized = true; });

refresh();




// jquery version
/*

function sameHeights () {
  var elems = $('article');
  elems.css('min-height', Math.max.apply(Math, elems.map(function() { 
    return $(this).height();
  }).get() ));
}

$('window').on('resize', function() { resized = true; });

refresh();

*/