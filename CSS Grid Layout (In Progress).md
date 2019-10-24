Reference:
1. https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids
2. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
3. https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction
4. https://www.w3.org/TR/css-grid-1/
5. https://www.w3.org/TR/css-grid-2/
6. https://drafts.csswg.org/css-grid/
7. https://caniuse.com/#search=grid

---

Flexbox is a one-dimensional layout method for laying out items in rows or columns.  
CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns.

---

A grid will typically have columns, rows, and then gaps between each row and column - commonly referred to as gutters.


```
.container {
  display: grid;                                  // gives you a one column grid.
  grid-template-columns: 1fr 2fr 1fr 2fr;         // add some columns to the grid, can be any lenght unit, percentages, fr unit
  grid-gap: 20px;                                 // set gaps between tracks, can be any lenght unit, percentages, not an fr unit
  gap: 20px;                                      // add both `grid-gap` and `gap` properties will be safe.
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr 2fr);      // repeat notation, same as `1fr 2fr 1fr 2fr`
                                                  // the first value is how many times you want to the track listing to repeat
                                                  // the second value is a track listing, which may be one or more tracks that you want to repeat
}
```

1. The `fr` unit distributes available space in proportion.
2. 
