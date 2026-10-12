function setupNpcSearch() {
  const input = document.getElementById("npc-search-input") as HTMLInputElement | null
  const results = document.getElementById("npc-search-results")
  const article = document.querySelector("article")

  if (!input || !results || !article) return

  if (input.dataset.npcSearchReady === "true") return
  input.dataset.npcSearchReady = "true"

  const normalize = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("fi")
      .trim()

  // Etsi listakohdat, joissa on NPC-linkki.
  const entries = Array.from(article.querySelectorAll("li"))
    .map((element, index) => {
      const link = element.querySelector(":scope > a, :scope > p > a")
      if (!link) return null

      const name = link.textContent?.trim() ?? ""
      if (!name) return null

      if (!element.id) {
        const slug = normalize(name)
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")
        element.id = `npc-${slug}-${index}`
      }

      return { element, name, search: normalize(name) }
    })
    .filter((entry) => entry !== null)

  function renderResults() {
    const query = normalize(input!.value)
    results!.replaceChildren()

    if (!query) return

    const matches = entries.filter((entry) => entry.search.includes(query)).slice(0, 15)

    if (matches.length === 0) {
      const message = document.createElement("p")
      message.className = "npc-search-empty"
      message.textContent = "NPC:tä ei löytynyt."
      results!.append(message)
      return
    }

    for (const entry of matches) {
      const link = document.createElement("a")
      link.href = `#${entry.element.id}`
      link.textContent = entry.name

      link.addEventListener("click", (event) => {
        event.preventDefault()
        history.replaceState(null, "", `#${entry.element.id}`)
        entry.element.scrollIntoView({ behavior: "smooth", block: "start" })
        input!.value = ""
        results!.replaceChildren()
      })

      results!.append(link)
    }
  }

  input.addEventListener("input", renderResults)
}

document.addEventListener("nav", setupNpcSearch)

