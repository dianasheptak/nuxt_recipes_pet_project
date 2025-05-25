import { defineSitemapEventHandler} from "#sitemap/server/composables/defineSitemapEventHandler";
import { type RecipeResponse} from "~/types/types";
import type { SitemapUrlInput } from "#sitemap/types";

export default defineSitemapEventHandler(async () => {
    const res: RecipeResponse = await $fetch(`https://dummyjson.com/recipes?limit=12`)

    const sitemapUrls: SitemapUrlInput[] = res.recipes.map((item) => ({
        loc: `/recipes/${item.id}`,
    }))

    return sitemapUrls;
})