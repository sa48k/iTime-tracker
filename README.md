# iTime-tracker
Amesbury School - Maire iTime Tracker

Make the tracker sheet writable to all with link in domain on weekday mornings, then lock it so it is open to teachers only after school.

Paste code into the Google Apps Script editor on the iTime tracker spreadsheet (Tools > Script Editor).
Run the 'CreateTriggers' function ONCE to create the triggers for each weekday. Default: PUBLIC at 8am, LOCKED at 3pm (+/- 15 mins)
Triggers can be checked at https://script.google.com/home/triggers
