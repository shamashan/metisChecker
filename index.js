function updateSt() {
  const elements = document.getElementsByTagName("img");
  const btns = document.getElementsByTagName("button");
  // const next = document.querySelector('[title="Suivant"]');

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if (el.classList?.contains("icon") && el.alt?.includes("Non terminé")) {
      el.click();
    }
  }

  for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    if (btn.classList?.contains("btn-default") && !btn.getAttribute("style")) {
      btn.click();
    }
  }
  console.log("All done");
}

updateSt();
