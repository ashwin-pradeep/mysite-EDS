export default function decorate(block) {
	const row = block.firstElementChild;

	if (!row) return;

	const [textColumn, imageColumn] = row.children;

	if (textColumn) {
		textColumn.classList.add('error-text');
	}

	if (imageColumn) {
		imageColumn.classList.add('error-media');
	}
}

