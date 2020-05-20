
export const GetCookieValue = (name: string) =>
    document.cookie
        .replace(' ', '')
        .split(';')
        .map(cookie => cookie.split('='))
        .find(cookie => cookie[0] === name)?.pop();
