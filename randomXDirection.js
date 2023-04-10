const randomXDirection = () => {
    const directions = ['left', 'right']
    const index = Math.round(Math.random());
    return directions[index]
}

export default randomXDirection