
/* Nav slider*/
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

/*About slider*/
function openAbout() {
  document.getElementById("aboutslider").style.width = "100%";
 // document.getElementById("main").style.marginLeft = "100%";
}

function closeAbout() {
  document.getElementById("aboutslider").style.width = "0%";
 // document.getElementById("main").style.marginLeft = "100%";
}

/*Project slider*/
function openProjects() {
  document.getElementById("projectslider").style.width = "100%";
 // document.getElementById("main").style.marginLeft = "100%";
}

function closeProjects() {
  document.getElementById("projectslider").style.width = "0%";
 // document.getElementById("main").style.marginLeft = "100%";
}

/*Contact slider*/
function openContact() {
  document.getElementById("contactslider").style.width = "100%";
 // document.getElementById("main").style.marginLeft = "100%";
}

function closeContact() {
  document.getElementById("contactslider").style.width = "0%";
 // document.getElementById("main").style.marginLeft = "100%";
}


/*mouse follow*/
var $container = $('.front-container');
var $drone = $('.floating-text');
var droneCenter = {
  x: $drone.width() / 2,
  y: $drone.height() / 2
};

$container.on('mousemove', function(event) {
  $drone.css('transform', `translate3d(${event.offsetX - droneCenter.x}px, ${event.offsetY - droneCenter.y}px, 0)`);
});


/* Dark theme toggle*/
function toggleTheme() {
  let theme = document.getElementsByTagName('link')[0];

  if (theme.getAttribute('href') === 'darkstyle.css') {
      return theme.setAttribute('href', 'lightstyle.css');
  }
  theme.setAttribute('href', 'darkstyle.css');
}


// create the sliding body containers to open and closed elements 