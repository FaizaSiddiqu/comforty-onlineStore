const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: 'your-project-id', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  token: 'your-sanity-token', // Generate a token from Sanity Manage
  useCdn: false,
});

async function deleteDuplicates() {
  // Fetch all products
  const query = `*[_type == "products"] | order(_createdAt asc) {
    _id,
    "slug": slug.current,
    _createdAt
  }`;

  const products = await client.fetch(query);

  // Track seen slugs
  const seenSlugs = new Set();

  for (const product of products) {
    if (seenSlugs.has(product.slug)) {
      // Delete duplicate product
      await client.delete(product._id);
      console.log(`Deleted duplicate product: ${product.slug} (ID: ${product._id})`);
    } else {
      seenSlugs.add(product.slug);
    }
  }

  console.log('Duplicate deletion process completed.');
}

deleteDuplicates().catch(console.error);