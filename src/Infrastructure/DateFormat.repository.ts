import { DateTime } from "luxon"

export const DateTimeNowUtc=()=>{
    return DateTime.now().toISO()
}

export const DateTimeToLocalTZm6= (fecha: Date) =>{
    return DateTime.fromISO(fecha.toString(), { zone: 'America/Mexico_City'})
}



