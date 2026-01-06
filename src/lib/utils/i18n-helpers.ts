export function resolveKey(obj: any, path: string): string {
    const parts = path.split('.');
    let current = obj;

    for (const p of parts) {
        if (current?.[p] === undefined) return path;
        current = current[p];
    }

    return String(current);
}