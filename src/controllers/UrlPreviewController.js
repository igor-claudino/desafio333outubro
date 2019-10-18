const { urlPreview } = require("url-preview");

class UrlPreviewController {
  async store(req, res) {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "A URL must be submitted." });
    }

    const data = await urlPreview(url);

    if (Object.keys(data).length === 0)
      return res.status(400).json({ error: "Invalid URL." });

    let urlDescription = {};
    if (data["og:url"])
      urlDescription.domain = data["og:url"]
        .replace("http://", "")
        .replace("https://", "")
        .split(/[/?#]/)[0];
    else
      urlDescription.domain = url
        .replace("http://", "")
        .replace("https://", "")
        .split(/[/?#]/)[0];

    if (data["og:title"] || data.title)
      urlDescription.title = data["og:title"] || data.title;
    if (data["og:site_name"]) urlDescription.sitename = data["og:site_name"];
    if (data["og:description"] || data.description)
      urlDescription.description = data["og:description"] || data.description;
    if (data["og:image"]) urlDescription.thumbnail = data["og:image"];

    return res.json({ ...urlDescription });
  }
}

module.exports = new UrlPreviewController();
