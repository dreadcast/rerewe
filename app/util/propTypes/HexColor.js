export default function HexColor(props, propName, componentName) {
	if (!/^#[0-9A-F]{6}$/i.test(props[propName])) {
		return new Error(props[propName] + ' is not a valid Hex color.');
	}
}
