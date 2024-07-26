async function fetchGreeting() {
    const request = JSON.stringify({
        query: 'query { greeting }',
      });

      const requestHeaders = {
        'Content-Type': 'application/json',
      };
    const response = await fetch('http://localhost:9000/', {
      method: 'POST',
      headers: requestHeaders,
      body: request,
    });
    const { data } = await response.json();
    return data.greeting;
  }
  
  fetchGreeting().then((greeting) => {
    document.getElementById('greeting-session-id').textContent = greeting;
  });