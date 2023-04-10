const randomYDirection = () => {
    const directions = ['up', 'down']
    const index = Math.round(Math.random());
    return directions[index]
}

export default randomYDirection