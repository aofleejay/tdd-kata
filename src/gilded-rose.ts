export class Item {
  name: string
  sellIn: number
  quality: number

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

export class GildedRose {
  items: Array<Item>

  constructor(items = [] as Array<Item>) {
    this.items = items
  }

  private isAgedBrie(item: Item): boolean {
    return item.name === 'Aged Brie'
  }

  private isBackstage(item: Item): boolean {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert'
  }

  private isSulfuras(item: Item): boolean {
    return item.name === 'Sulfuras, Hand of Ragnaros'
  }

  private updateAgedBrieQuality(item: Item) {
    item.sellIn = item.sellIn - 1
    item.quality = Math.min(item.quality + 1, 50)
  }

  private updateItemQuality(item: Item) {
    item.sellIn = item.sellIn - 1

    if (item.sellIn < 0) {
      item.quality = Math.max(item.quality - 2, 0)
    } else {
      item.quality = Math.max(item.quality - 1, 0)
    }
  }

  private updateSulfurasQuality() {}

  private updateBackstageQuality(item: Item) {
    if (item.sellIn <= 0) {
      item.quality = 0
    } else if (item.sellIn <= 5) {
      item.quality = Math.min(item.quality + 3, 50)
    } else if (item.sellIn <= 10) {
      item.quality = Math.min(item.quality + 2, 50)
    } else {
      item.quality = Math.min(item.quality + 1, 50)
    }

    item.sellIn = item.sellIn - 1
  }

  updateQuality() {
    for (const item of this.items) {
      if (this.isAgedBrie(item)) {
        this.updateAgedBrieQuality(item)
      } else if (this.isSulfuras(item)) {
        this.updateSulfurasQuality()
      } else if (this.isBackstage(item)) {
        this.updateBackstageQuality(item)
      } else {
        this.updateItemQuality(item)
      }
    }

    return this.items
  }
}
