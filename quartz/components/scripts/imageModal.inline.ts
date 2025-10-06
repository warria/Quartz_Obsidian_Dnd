document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("article img")
  
  images.forEach((img) => {
    img.addEventListener("click", () => {
      const modal = document.createElement("div")
      modal.className = "image-modal"
      
      const modalImg = document.createElement("img")
      modalImg.src = (img as HTMLImageElement).src
      
      modal.appendChild(modalImg)
      document.body.appendChild(modal)
      
      modal.style.display = "block"
      
      modal.addEventListener("click", () => {
        modal.remove()
      })
    })
  })
})