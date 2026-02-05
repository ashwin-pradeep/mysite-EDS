export default function decorate(block) {
  const row = block.firstElementChild;
  if (!row) return;

  const [leftCol, rightCol] = row.children;
  if (leftCol) leftCol.classList.add('faq-section-left');
  if (rightCol) rightCol.classList.add('faq-section-right');
}
