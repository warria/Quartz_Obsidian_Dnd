// @ts-ignore
import script from "./scripts/npcSearch.inline"
import { QuartzComponent, QuartzComponentConstructor } from "./types"
import style from "./styles/npcSearch.scss"

const NpcSearch: QuartzComponent = ({ fileData }) => {
  // Näytä hakukenttä vain NPC-hakemiston sivulla.
  if (!fileData.slug?.toLowerCase().includes("npct")) {
    return <></>
  }

  return (
    <div class="npc-search">
      <label for="npc-search-input">🔎 Etsi NPC:tä nimellä</label>
      <input
        id="npc-search-input"
        type="search"
        placeholder="Esim. Sho Dusk, Livia, Ret..."
        autocomplete="off"
      />
      <div
        id="npc-search-results"
        aria-live="polite"
      />
    </div>
  )
}

NpcSearch.css = style
NpcSearch.afterDOMLoaded = script

export default (() => NpcSearch) satisfies QuartzComponentConstructor
