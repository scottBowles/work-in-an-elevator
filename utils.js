export function resetOnNewDate(resetState) {
  try {
    const storedDate = window.localStorage.getItem('date');
    const currentDate = new Date().toDateString();
    if (storedDate !== currentDate) {
      console.log('cleared');
      window.localStorage.clear();
      window.localStorage.setItem('date', currentDate);
      resetState();
    }
  } catch (e) {
    console.log(e);
  }
}
