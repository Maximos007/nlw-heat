const LinksSocialMedia = {
  github: 'Maximos007',
  youtube: '',
  facebook: '',
  instagram: 'w.asleyy',
  twitter: ''
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
    const social = li.getAttribute('class');
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
  };
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`;
  console.log(url);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      userProfile.href = data.html_url
      avatar_url.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

