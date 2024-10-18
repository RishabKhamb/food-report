export function transformDate(date: string): string {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('en-GB');
}

export function maskPhoneNumber(phone: string): string {
    if (phone && phone.length >= 10) {
        return 'xxxxxxx' + phone.slice(7, 10);
    }
    return phone;
}