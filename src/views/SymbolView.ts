import { Container, Graphics, Text, TextStyle } from 'pixi.js';

export class SymbolView extends Container {
	private text: Text;
	private background: Graphics;

	constructor(symbol: string) {
		super();

		const size = 100;

		this.background = new Graphics();

		this.background.rect(0, 0, size, size).fill(0x4a4a4a).stroke({
			color: 0xffffff,
			width: 2,
		});

		this.text = new Text({
			text: symbol,
			style: new TextStyle({
				fill: 0xffffff,
				fontWeight: 'bold',
				fontSize: symbol.length > 2 ? 22 : 40,
				align: 'center',
				wordWrap: true,
				wordWrapWidth: 90,
			}),
		});

		this.text.anchor.set(0.5);
		this.text.x = size / 2;
		this.text.y = size / 2;

		this.addChild(this.background);
		this.addChild(this.text);
	}

	public setSymbol(symbol: string) {
		this.text.text = symbol;

		this.text.style = new TextStyle({
			fill: 0xffffff,
			fontWeight: 'bold',
			fontSize: symbol.length > 2 ? 22 : 40,
			align: 'center',
			wordWrap: true,
			wordWrapWidth: 90,
		});
	}

	public highlight() {
		this.background.clear();

		this.background.rect(0, 0, 100, 100).fill(0xffd54f).stroke({
			color: 0xffffff,
			width: 2,
		});
	}

	public clearHighlight() {
		this.background.clear();

		this.background.rect(0, 0, 100, 100).fill(0x4a4a4a).stroke({
			color: 0xffffff,
			width: 2,
		});
	}
}
