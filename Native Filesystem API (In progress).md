#### Drag and Drop

Reference: 
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API  
https://github.com/react-dropzone/react-dropzone  
https://github.com/react-dropzone/react-dropzone/issues/276  


Problems:
file MIME type is not recognized as same across platforms.  
.csv file in OSX is recognized as text/csv, whereas in Windows it is recognized as application/vnd.ms-excel.

#### MIME type
Reference:  
https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types  
https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types  


#### Download and Display
1) `<a href>`
2) `<a href download>`
3) https://stackoverflow.com/a/23797348/3561, want a custom authentication header with the download request.
4) use HTML cookies 


#### CSVToArray:

Converts a comma-separated values (CSV) string to a 2D array.
```
CSVToArray('a,b\nc,d'); // [['a','b'],['c','d']];
CSVToArray('a;b\nc;d', ';'); // [['a','b'],['c','d']];
CSVToArray('col1,col2\na,b\nc,d', ',', true); // [['a','b'],['c','d']];
```

Use Array.prototype.slice() and Array.prototype.indexOf('\n') to remove the first row (title row) if omitFirstRow is true.  
Use String.prototype.split('\n') to create a string for each row,  
then String.prototype.split(delimiter) to separate the values in each row.  
Omit the second argument, delimiter, to use a default delimiter of `,`.  
Omit the third argument, omitFirstRow, to include the first row (title row) of the CSV string.  


```
const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));
```
