export default function decorate(block) {
	const rows = Array.from(block.children);

	if (!rows.length) return;

	// Treat every even row as a header (Accordion 1, 2, 3, 4)
	// and the immediately following row as its description.
	const itemPairs = [];
	for (let i = 0; i < rows.length; i += 2) {
		const labelRow = rows[i];
		const descriptionRow = rows[i + 1];
		if (!descriptionRow) break;
		itemPairs.push({ labelRow, descriptionRow });
	}

	itemPairs.forEach(({ labelRow, descriptionRow }) => {
		labelRow.classList.add('accordion-item-label');
		descriptionRow.classList.add('accordion-item-description');

		const labelButton = labelRow.querySelector('p');
		if (labelButton) {
			labelButton.setAttribute('role', 'button');
			labelButton.setAttribute('tabindex', '0');
		}

		const toggle = () => {
			const isOpen = descriptionRow.classList.contains('is-open');
			// Close all descriptions first
			itemPairs.forEach(({ descriptionRow: desc }) => {
				desc.classList.remove('is-open');
			});
			// Open this one if it was closed
			if (!isOpen) {
				descriptionRow.classList.add('is-open');
			}
		};

		// Click handler on the whole header row
		labelRow.addEventListener('click', toggle);

		// Keyboard accessibility
		labelRow.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				toggle();
			}
		});
	});
}

