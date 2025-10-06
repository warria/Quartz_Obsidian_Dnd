document.addEventListener("nav", () => {
  setTimeout(() => {
    const images = document.querySelectorAll("article img")
    
    images.forEach((img) => {
      img.addEventListener("click", function(e) {
        e.preventDefault()
        
        const modal = document.createElement("div")
        modal.className = "image-modal"
        modal.style.display = "block"
        
        const modalImg = document.createElement("img")
        modalImg.src = this.src
        modalImg.alt = this.alt
        
        modal.appendChild(modalImg)
        document.body.appendChild(modal)
        
        modal.addEventListener("click", function() {
          document.body.removeChild(modal)
        })
      })
    })
  }, 100)
})