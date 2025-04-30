const isDev = import.meta.env.MODE === 'development'
export function log(...data) {
    if(isDev)
        console.log(...data)
}
