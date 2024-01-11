var contentful = require('contentful');

var client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getEntriesByContentType(content_type) {
    return client.getEntries({
      content_type: content_type,
    })
    .then(function (entries) {
      return entries;
    });
}

export async function getEntryBySlug(content_type, slug) {
  return client.getEntries({
    content_type: content_type,
    'fields.slug': slug,
  })
  .then(function (entries) {
    return entries;
  });
}

export async function getLastTwoBlogsExcludingSlug(content_type, excludedSlug) {
  return client.getEntries({
    content_type: content_type,
    order: '-fields.publishDate',
    limit: 3, // Get the last three entries
  })
  .then(function (entries) {
    // Filter out the entry with the excluded slug
    const filteredEntries = entries.items.filter(entry => entry.fields.slug !== excludedSlug);

    // If there are more than two entries left, remove the oldest one
    if (filteredEntries.length > 2) {
      filteredEntries.pop();
    }

    return filteredEntries;
  });
}
