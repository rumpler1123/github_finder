// Init Github 
const github = new Github;

// Init UI 
const ui = new UI;

// Search input 
const searcUser = document.getElementById('searchUser');

// Search inpust event listener 
searcUser.addEventListener('keyup', (e) => {
  // Get unput text 
  const userText = e.target.value;

  if(userText !== ''){
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        // show alert 
        ui.showAlert('User not found','alert alert-danger');
      }else{
        //show profile 
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    // clear profile 
    ui.clearProfile();

  }
})