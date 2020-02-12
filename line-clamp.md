References: https://css-tricks.com/line-clampin/

```
.line-clamp-1,
.line-clamp-2,
.line-clamp-3 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@supports (display: -webkit-box) {
  .line-clamp-2,
  .line-clamp-3 {
    /* autoprefixer: off */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

  .line-clamp-2 {
    /* autoprefixer: off */
    -webkit-line-clamp: 2;
  }

  .line-clamp-3 {
    /* autoprefixer: off */
    -webkit-line-clamp: 3;
  }
}
```
