NOTES:

- Bhagya:
    - Fix Regular Exprestions so first and last name can be uncapitalized at the start, make it so . can be added to email (ie: shlok.desai@gmail.com), and password should require speical character aswell. and contact page.
    - Use the Window.scroll() event to make the Calendar shift left/right through the months.
    - Add pop-ups using setTime()/setInterval() on the Home and Resources pages on random Ecological Footprint-related statistics/facts when the user goes to those pages from somewhere else. When one of those pages is reached, the pop-up will stay active for 2 1/2 minutes.
    - The Progress Chart will also be resetted to show the information the user inputted through the Foottracker's sections on a previous day from the Calendar. If they click on a future day, the div will show empty values since that day is in the future. The day that's selected will be highlighted. We can use the Windows calendar to set the current day on the website. Make the HTML for the Progress Chart and connect the buttons to the chart.
- Shlok:
    - Make contact page not have defualt error thing.
- Atheen:
    - In Login, Signup, Contact pages, the user can use the arrow keys to traverse over the boxes.
    - For the Tracker, when the user clicks a sector, a div element will appear to the right and will be a form the user fills to input data. The data will saved in a dictionary in a collection.
    - At all times, there will be another div element (known as the "Progress Chart") existing at the right of the Tracker page showing the ECOFoottracker's present levels based on the user's most recent input. This will be resetted when the user inputs any more information through one of the ECOFoottracker's sections. Bhagya can make the basic HTML; Atheen should do the final stylizing.