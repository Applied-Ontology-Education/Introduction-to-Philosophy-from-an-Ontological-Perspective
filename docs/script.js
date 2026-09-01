const topics = [
  'A brief history of ontology',
  'The meaning of life',
  'The ontology of social reality',
  'Ontology leaves philosophy',
  'Why computer science needs philosophy',
  'The Semantic Web',
  'Toward a standard top-level ontology',
  'Ontology and large-scale data integration'
];

const list = document.querySelector('#lecture-list');
topics.forEach((topic, index) => {
  const item = document.createElement('article');
  item.className = 'lecture';
  const number = document.createElement('span');
  number.textContent = String(index + 1).padStart(2, '0');
  const heading = document.createElement('h3');
  heading.textContent = topic;
  item.append(number, heading);
  list.append(item);
});

