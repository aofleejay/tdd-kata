import { Item, GildedRose } from './gilded-rose'

describe('Gilded Rose', function () {
  it('At the end of each day our system lowers both values for every item', function () {
    const gildedRose = new GildedRose([new Item('foo', 1, 1)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toBe(0)
    expect(items[0].quality).toBe(0)
  })

  it('Once the sell by date has passed, Quality degrades twice as fast', function () {
    const gildedRose = new GildedRose([new Item('foo', 0, 2)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(0)
  })

  it('The Quality of an item is never negative', function () {
    const gildedRose = new GildedRose([new Item('foo', 1, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(0)
  })

  it('"Aged Brie" actually increases in Quality the older it gets', function () {
    const gildedRose = new GildedRose([new Item('Aged Brie', 1, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(1)
  })

  it('The Quality of an item is never more than 50', function () {
    const gildedRose = new GildedRose([new Item('Aged Brie', 1, 50)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(50)
  })

  it('"Sulfuras", being a legendary item, never has to be sold or decreases in Quality', function () {
    const gildedRose = new GildedRose([
      new Item('Sulfuras, Hand of Ragnaros', 1, 1),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(1)
    expect(items[0].sellIn).toBe(1)
  })

  it('Backstage passes increase quality when date pass', function () {
    const gildedRose = new GildedRose([
      new Item('Backstage passes to a TAFKAL80ETC concert', 11, 1),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(2)
  })

  it('Backstage passes increase quality by 2 when 10 day left', function () {
    const gildedRose = new GildedRose([
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 1),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(3)
  })

  it('Backstage passes increase quality by 3 when 5 day left', function () {
    const gildedRose = new GildedRose([
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 1),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(4)
  })

  it('Backstage passes decrease quality to 0 when sellin passed', function () {
    const gildedRose = new GildedRose([
      new Item('Backstage passes to a TAFKAL80ETC concert', 0, 2),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(0)
  })
})
