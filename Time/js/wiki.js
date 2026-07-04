const WIKI_SUMMARY = "https://en.wikipedia.org/api/rest_v1/page/summary/";

export async function fetchWikiSummary(title) {
  const url = `${WIKI_SUMMARY}${encodeURIComponent(title.replace(/ /g, "_"))}`;
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`Wikipedia: ${res.status}`);
  const data = await res.json();
  return {
    title: data.title,
    extract: data.extract,
    url: data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${title}`,
    thumbnail: data.thumbnail?.source || null,
  };
}
