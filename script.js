document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target") || 500;
      const count = +counter.innerText;
      const increment = Math.ceil(target / 100);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCounter, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
});
