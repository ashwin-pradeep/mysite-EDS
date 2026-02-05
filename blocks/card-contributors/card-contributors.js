export default function decorate(block) {
  // For each contributor card, group the social buttons
  // into a single row container so we can style them
  // as a unified bar under the profile.
  [...block.children].forEach((row) => {
    const [, contentColumn] = row.children || [];
    if (!contentColumn) return;

    const buttons = contentColumn.querySelectorAll('.button-container');
    if (!buttons.length) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'card-contributors-buttons';

    buttons.forEach((btn) => {
      wrapper.append(btn);
    });

    contentColumn.append(wrapper);
  });
}
