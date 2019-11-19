#### Please read aloud.

1. The Web Storage API provides mechanisms by which browsers can securely store key/value pairs, in a much more intuitive fashion than using cookies.
2. The two mechanisms within Web Storage are sessionStorage and localStorage.

#### sessionStorage
1. sessionStorage maintains a separate storage area for each give origin that's available for the duration of the page session.
2. Stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
3. Storage limit is larger than a cookie (at most 5MB).

#### localStorage
1. localStorage maintains a separate storage area for each give origin, and persists even when the browser is closed and reopened.
2. localStorage stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser caches / Locally Stored Data.
3. Storage limit is the maximum amongst the three.
