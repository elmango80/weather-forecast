export function getDocuments(snapshot) {
  const results = [];

  snapshot.forEach((document) => {
    results.push({
      id: document.id,
      ...document.data(),
    });
  });

  return results;
}
