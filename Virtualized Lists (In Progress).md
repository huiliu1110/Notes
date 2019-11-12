References: 
https://medium.com/front-end-field-guide/efficiently-rendering-lists-in-react-c1e5d2260af3  

---

One solution is to use a virtualized list (react-virtualized) that renders only what the user sees on the screen. When the user scrolls down, the items are seamlessly replaced with new content.

Another solution is to use react-window, the key difference is this one is significantly smaller and lightweight.

---
Recording the performance over time in Firefox developer tool, see the stark difference between versions.
Using react-window, the performance rarely dipped below 60fps and didn't suffer from any noticeable slow down when scrolling.
