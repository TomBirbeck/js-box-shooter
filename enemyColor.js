const randomEnemyColor = () => {
const colors = [
    'red',
    'green',
    'blue',
    'green',
    'gold',
    'orange'
]
const index = Math.round((Math.random() * (colors.length - 1)));
return colors[index]
}

export default randomEnemyColor