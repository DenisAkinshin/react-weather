export const useDataTime = (time) => {

    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    let data = new Date(time * 1000)
    let day = daysOfWeek[data.getDay()]
    let hours = data.getHours()
    let minutes = data.getMinutes()

    return [day, hours, minutes]

}