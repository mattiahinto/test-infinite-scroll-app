# ScrollApp

Create a responsive web application that queries an API and displays the results (grid or list) paginated by lazy
loading or infinite scroll

For each item show only the title, the body will be shown on click (modal or accordion)

As an API you can use https://jsonplaceholder.typicode.com/posts

To execute paginated requests, value the two parameters \_start = 0 and \_limit = 10, then to have the first page with 10
elements the endpoint becomes https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10

It is preferable to use React (hooks and context) with the styled-components library to build the layout

## Development

1. `npm i`
2. `npm start`
