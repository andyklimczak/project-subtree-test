function getProjectVersion() {
  return 4.0;
}

if(getProjectVersion() === getSubProjectVersion()) {
  console.log('project version match');
} else {
  console.log('project version does not match');
}
