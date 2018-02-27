/*var database = [
{  username: "bostjan",
    password: "tara"}
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "Whats uo?!"
      
    },
    {
        username: "sally",
        timeline: "What the fuck?"
    }
    
];
    
var userNamePrompt = prompt("Whats your username?");
var passwordprompt = prompt("Whats your password?");

function signIn(user, pass) {
    if (user === database[0].username  && pass === database[0].password) {
        console.log(newsFeed);
            } else {
                alert("Access denied!");
            }
}

signIn(userNamePrompt, passwordprompt);
*/

/*function showImage(imgName) {
    document.getElementById('largeImg').src = imgName;
    showLargeImagePanel();
    unselectAll();
}
function showLargeImagePanel() {
    document.getElementById('largeImgPanel').style.visibility = 'visible';
}
function unselectAll() {
    if(document.selection) document.selection.empty();
    if(window.getSelection) window.getSelection().removeAllRanges();
}
function hideMe(obj) {
    obj.style.visibility = 'hidden';
}
*/

$( document ).ready(function() {
    $('.img-thumbnail').popover({
      html: true,
      trigger: 'hover',
      placement: 'bottom',
      content: function () {
        return 
          '<img class="img-thumbnail" style="float:right;width:500px;max-width:500px;" src="
          +$(this)[0].src + '" />';
      }
    });
  });

