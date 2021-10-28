const linksSocialMedia = {
  github: 'tsrweb',
  youtube: 'channel/UC6g9UmSuoPg7hI2A8lJ-KZg',
  facebook: 'tiago.rodrigues.12720100',
  instagram: 'tiago.rodrigueess',
  twitter: 'DestroyerTSR'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userGitHub.textContent = data.login
      userImage.src = data.avatar_url
    })
}

changeSocialMediaLinks()
getGitHubProfileInfos()
