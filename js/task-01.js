const categories = document.querySelectorAll(`li.item`);

console.log(`Number of categories:`, categories.length);

categories.forEach((category) => {
  const categoryName = category.querySelector(`h2`);
  const liItems = category.querySelectorAll(`li`);

  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${liItems.length}`);
});
