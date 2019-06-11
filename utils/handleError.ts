export default (...e: any[]) => {
  // tbd, should probably report to an error reporting service, and
  // show some kind of global "Something went wrong!  Reload and try
  // again" message
  // tslint:disable-next-line no-console
  console.error(...e)
  if (window.trackEror) {
    window.trackError(...e) 
  }
}
