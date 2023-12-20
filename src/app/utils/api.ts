export async function apiCall(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', body?: object) {
    const apiKey = process.env.NEXT_PUBLIC_PROPSTACK_API_KEY;
    if (!apiKey) {
      console.error('API-Schlüssel ist nicht definiert!');
      return;
    }

    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': apiKey
        }
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error('Es gab einen Fehler bei der Anfrage.');
    }

    return response.json();
}