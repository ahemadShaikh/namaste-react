


const h1 = React.createElement('div', {id:"heading", className:"new"}, React.createElement(
    "div",{}, [React.createElement('h1', {id:'hey'}, "Hi, Here im"), React.createElement('h2', {id:'by'}, "Hi, yo im")]
))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(h1)

console.log(h1)