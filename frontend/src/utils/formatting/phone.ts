export function formatPhoneNumber(phoneNumber: string): string {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    if (cleanedPhoneNumber.length === 11) {
        return cleanedPhoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    if (cleanedPhoneNumber.length === 10) {
        return cleanedPhoneNumber.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }

    return phoneNumber;
}