import { createDirectus, rest, readItems } from "@directus/sdk"

const directus = createDirectus(process.env.DIRECTUS_URL!).with(rest())

export async function authenticateDirectus() {
  try {
    await directus.login(process.env.DIRECTUS_EMAIL!, process.env.DIRECTUS_PASSWORD!)
  } catch (error) {
    console.error("Failed to authenticate with Directus:", error)
    throw new Error("Failed to authenticate with Directus")
  }
}

export async function fetchItems<T>(collection: string): Promise<T[]> {
  try {
    await authenticateDirectus()
    const items = await directus.request(readItems(collection))
    return items as T[]
  } catch (error) {
    console.error(`Failed to fetch items from ${collection}:`, error)
    throw new Error(`Failed to fetch items from ${collection}`)
  }
}

export async function fetchItem<T>(collection: string, id: string): Promise<T> {
  try {
    await authenticateDirectus()
    const item = await directus.request(readItems(collection, { filter: { id: { _eq: id } } }))
    if (item.length === 0) {
      throw new Error(`Item not found in ${collection}`)
    }
    return item[0] as T
  } catch (error) {
    console.error(`Failed to fetch item from ${collection}:`, error)
    throw new Error(`Failed to fetch item from ${collection}`)
  }
}

