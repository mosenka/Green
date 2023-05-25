declare module "*.svg" {
	interface BrowserSpriteSymbol {
		id: string;
		viewBox: string;
		content: string;
		node: SVGSymbolElement;
	}

	const value: BrowserSpriteSymbol;
	export default value;
}
