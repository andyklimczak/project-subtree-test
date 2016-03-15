function getProjectVersion() {
  return 1.0;
}

if(getProjectVersion() === getSubProjectVersion()) {
  console.log('project version match');
} else {
  console.log('project version does not match');
}
