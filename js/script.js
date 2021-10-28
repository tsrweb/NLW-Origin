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
changeSocialMediaLinks()
