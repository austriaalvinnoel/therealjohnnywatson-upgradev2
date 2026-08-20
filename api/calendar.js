const CALENDAR_URL = "https://calendar.google.com/calendar/ical/thewatsonshow%40gmail.com/public/basic.ics";
function unfold(text) { return text.replace(/\r?\n[ \t]/g, ""); }
function valueOf(line) { const index = line.indexOf(":"); return index === -1 ? "" : line.slice(index + 1).trim(); }
function cleanText(value) { return value.replace(/<br\s*\/?>/gi, "\n").replace(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi, "$2 ($1)").replace(/<[^>]*>/g, "").replace(/\\n/g, "\n").trim(); }
function extractUrl(value) { return value.match(/href=["'](https?:\/\/[^"']+)["']/i)?.[1] || value.match(/https?:\/\/[^\s<>"')]+/i)?.[0] || ""; }
function parseDate(raw) {
  const value = raw.replace(/[^0-9TZ]/g, "");
  if (/^\d{8}$/.test(value)) return new Date(Date.UTC(Number(value.slice(0,4)), Number(value.slice(4,6))-1, Number(value.slice(6,8)))).toISOString();
  if (/^\d{8}T\d{6}Z$/.test(value)) return new Date(Date.UTC(Number(value.slice(0,4)), Number(value.slice(4,6))-1, Number(value.slice(6,8)), Number(value.slice(9,11)), Number(value.slice(11,13)), Number(value.slice(13,15)))).toISOString();
  if (/^\d{8}T\d{6}$/.test(value)) return new Date(Number(value.slice(0,4)), Number(value.slice(4,6))-1, Number(value.slice(6,8)), Number(value.slice(9,11)), Number(value.slice(11,13)), Number(value.slice(13,15))).toISOString();
  return null;
}
function parseEvents(ics) {
  const now = Date.now();
  return unfold(ics).split("BEGIN:VEVENT").slice(1).map((block) => {
    const lines = block.split(/\r?\n/);
    const getLine = (name) => lines.find((item) => item.startsWith(name)) || "";
    const get = (name) => valueOf(getLine(name));
    const descriptionRaw = get("DESCRIPTION");
    const startLine = getLine("DTSTART");
    const endLine = getLine("DTEND");
    return {
      id: get("UID") || crypto.randomUUID(),
      title: cleanText(get("SUMMARY")) || "Johnny Watson Show",
      location: cleanText(get("LOCATION")),
      description: cleanText(descriptionRaw),
      url: get("URL") || extractUrl(descriptionRaw),
      start: startLine ? parseDate(valueOf(startLine)) : null,
      end: endLine ? parseDate(valueOf(endLine)) : null,
      allDay: /VALUE=DATE/.test(startLine) || /^DTSTART:\d{8}/.test(startLine),
    };
  }).filter((event) => event.start && new Date(event.end || event.start).getTime() >= now)
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
}
export default async function handler(req, res) {
  try {
    const response = await fetch(CALENDAR_URL, { headers: { "User-Agent": "JohnnyWatsonWebsite/1.0" } });
    if (!response.ok) return res.status(502).json({ error: "Calendar feed unavailable" });
    const events = parseEvents(await response.text());
    return res.status(200).setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=900").json({ events });
  } catch { return res.status(500).json({ error: "Unable to load calendar" }); }
}
