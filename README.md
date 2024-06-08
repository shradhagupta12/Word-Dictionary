# Word-Dictionary
# Header.jsx
I have a made a Word Dictionary that will display meaning for search word

Firstly 3 useState 1st state is for storing user input 2nd state is for to store output that's Fetched from API 3rd state is for to throw error if their is not data from API

const API consist of API that is Dynamical update by user input

click is async function which is use to handle API working .In try const response which fetch API if the response is not ok it will show an error as Failed to fetch data

and in const data it the response is ok it will convert the response in JSON format and in which if condition is been made if data & data.length is greater than 0 run the below code else setLetter as null and display error

const change is to get the user input useEffect is made to get default value when website is first time loaded

In return a div is made for search Bar. In which input box is available in which onChange event is their to get the input data as entered by user and button is made which run the click function when clicked

props are been send to Main.jsx letter and error

# =========================================
# Main.jsx
In Main letter , error is declared which is props from Header.jsx

If no data is fetch Display error Msg

and then in return the html code where then json data is mapped to display required data for the search in H1 word is fetch from API than letter is iterated and available meaning is display .map is used to iterates the array
