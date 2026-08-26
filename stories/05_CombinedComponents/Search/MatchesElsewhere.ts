import { html } from 'lit'

export type SearchLocation = {
  name: string
  count: number
  url: string
}

export const MatchesElsewhere = (
  searchTerm: string,
  otherSearchLocations: SearchLocation[]
) => {
  return html`
    <div class="container my-60">
      <div class="relative overflow-hidden rounded-large bg-primary-50">
        <div class="p-20">
          <h2 class="mb-20 text-xl font-bold text-primary-700">
            <span class="text-primary-900">${searchTerm}</span>
            wurde auch hier gefunden:
          </h2>
          <ul>
            ${otherSearchLocations.map((l) => {
              return html`
                <li class="mt-10">
                  ${
                    l.count === 0
                      ? html`<span
                          class="link with-icon pointer-events-none opacity-75"
                          >${l.name} (${l.count})</span
                        >`
                      : html`<a class="link with-icon" href="${l.url}"
                          >${l.name} (${l.count})</a
                        >`
                  }
                </li>
              `
            })}
          </ul>
        </div>
      </div>
    </div>
  `
}
