
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




/* Dark theme toggle*/
function toggleTheme() {
  let theme = document.getElementsByTagName('link')[0];

  if (theme.getAttribute('href') === 'darkstyle.css') {
      return theme.setAttribute('href', 'lightstyle.css');
  }
  theme.setAttribute('href', 'darkstyle.css');
}


// create the sliding body containers to open and closed elements 