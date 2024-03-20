// window.onscroll = function()
// {
//   console.log(window.scrollY)
// }

window.onscroll = function(){
  if(window.scrollY>=300)
  {
    document.getElementById('header').style.backgroundColor="rgba(0, 0, 0, 0.6)";
  }

  else
  {
    document.getElementById('header').style.backgroundColor="transparent";
  }
}




function showSidebar()
{
  const sidebar = document.querySelector('.side-bar');
  sidebar.style.display = 'flex';
}


function hideSidebar()
{
  const sidebar = document.querySelector('.side-bar');
  sidebar.style.display = 'none';
}
