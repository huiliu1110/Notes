Reference:
1. https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids
2. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
3. https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction
4. https://www.w3.org/TR/css-grid-1/
5. https://www.w3.org/TR/css-grid-2/
6. https://drafts.csswg.org/css-grid/
7. https://caniuse.com/#search=grid

CSS Grid Inspector: Firefox Grid Inspector.

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


```
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;                 //  explicit grid
}

.container {
  display: grid;
  grid-auto-columns: 200px;                       // implicit grid
                                                  // by default, tracks created in the implicit grid are auto sized 
                                                  // `grid-auto-columns` property gives implicit grid tracks a size
}

.container {
  display: grid;
  grid-auto-columns: minmax(100px, auto);         // the minimum size is 100 pixels, the maximum is auto
}
```

```
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```
1. Ask grid to create as many columns as will fit into the container.
2. Grid is creating as many 200 pixel columns as will fit into the container.
3. Then sharing whatever space is leftover between all of the columns - the maximum is 1fr which distributes space evenly between tracks.

```
header {
  grid-column: 1 / 3;                             // Line-based placement
                                                  // Lines start at 1
                                                  // same as: grid-column-start: 1; grid-column-end: 3;
  grid-row: 1;
}

aside {
  grid-column: 1;                                 // ???? `grid-column: 1 / 1;`
  grid-row: 2;
}

article {
  grid-column: 2;                                 // ???? `grid-column: 2 / 3;`
  grid-row: 2;
}

footer {
  grid-column: 1 / 3;
  grid-row: 3;
}
```
1. use -1 to target the end column or row line.

```
.container {
  display: grid;
  grid-template-areas:                            // Positioning with grid-template-areas
    "header header"
    "sidebar  content"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
}

header {
  grid-area: header;
}

aside {
  grid-area: sidebar;
}

article: {
  grid-area: content;
}

footer {
  grid-area: footer;
}
```
1. You need to have every cell of the grid filled.
2. To span across two cells, repeat the name.
3. To leave a cell empty, use a . (period).
4. Areas must be rectangular — you can’t have an L-shaped area for example.
5. Areas can't be repeated in different locations.

```
.container {
  display: grid;
  grid-template-columns: repeat(16, minmax(0,1fr));   // A CSS Grid, grid framework
  grid-gap: 20px;
}

header {
  grid-column: 1 / 13;
  grid-row: 1;
}

article {
  grid-column: 4 / 13;
  grid-row: 2;
}

aside {
  grid-column: 1 / 4;
  grid-row: 2;
}

footer {
  grid-column: 1 / 13;
  grid-row: 3;
}
```
