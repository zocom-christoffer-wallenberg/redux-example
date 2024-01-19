const increment = (data) => {
    return {
        type: 'INCREMENT', // Vad för uppdatering ska vi göra (Öka värdet i räknaren)
        payload: data // Den data vi vill spara i vår store
    }
}

const decrement = (data) => {
    return {
        type: 'DECREMENT',
        payload: data
    }
}

export { increment, decrement }