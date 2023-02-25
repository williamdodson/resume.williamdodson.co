# Project Notes

## Data Source

The data used to populate the `*.json` files that power each section of the resume comes from a Google Sheets document. The URL is not listed here for security purposes (I have no desire to allow folks to muck around with my resume). For my future self, its just a sheet named "Resume". :)

There is a Google Apps Script that generates the JSON from the sheet data, which is then copied and pasted back into the `*.json` files. It's a bit of a tedious manual approach, but it works for now. The idea was derived from this blog post about exporting Google Sheets to JSON:

[How to Convert a Google Spreadsheet to JSON-Formatted Text ](https://thenewstack.io/how-to-convert-google-spreadsheet-to-json-formatted-text/)

I am still looking for a simple, feasible, and inexpensive alternative to store my resume data. Until then this works for me.
