// Country code mapping for visitor counter
export const COUNTRY_CODES: Record<string, string> = {
    'US': 'US',
    'GB': 'UK',
    'IN': 'IND',
    'MX': 'MX',
    'DE': 'DE',
    'FR': 'FR',
    'JP': 'JP',
    'BR': 'BR',
    'CA': 'CA',
    'AU': 'AU',
    'CZ': 'CZ',
    'IT': 'IT',
    'ES': 'ES',
    'NL': 'NL',
    'SE': 'SE',
    'CH': 'CH',
    'SG': 'SG',
    'HK': 'HK',
    'NZ': 'NZ',
    'KR': 'KR',
    'CN': 'CN',
}

// Get country code display name - returns 2-3 letter code
export function getCountryCode(countryCode?: string): string {
    if (!countryCode) return 'XX'
    const code = countryCode.toUpperCase()
    return COUNTRY_CODES[code] || code.slice(0, 3)
}
