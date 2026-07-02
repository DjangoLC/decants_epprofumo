// Next App Router genera /sitemap.xml a partir de esta función.
// Landing de una sola página → una sola URL (la home).
export default function sitemap() {
  return [
    {
      url: 'https://decants.epprofumo.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
