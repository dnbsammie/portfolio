import { writable } from 'svelte/store';

export function createLocalTimeStore(locale = 'es-CO', timeZone = 'America/Bogota') {
    const localTime = writable('');

    function updateTime() {
        const currentTime = new Date();

        const hour = currentTime.toLocaleTimeString(locale, {
            timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        localTime.set(hour);
    }

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return {
        subscribe: localTime.subscribe,
        stop: () => clearInterval(interval)
    };
}
