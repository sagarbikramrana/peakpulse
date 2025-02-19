export function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const href = this.getAttribute("href")
      if (href) {
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
}

