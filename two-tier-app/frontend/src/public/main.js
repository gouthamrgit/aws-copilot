document.getElementById('btn').addEventListener('click', async () => {
  const out = document.getElementById('out');
  out.textContent = 'Calling backend...';
  try {
    const res = await fetch('/api/hello');
    const data = await res.json();
    out.textContent = JSON.stringify(data, null, 2);
  } catch (e) {
    out.textContent = `Error: ${e.message}`;
  }
});
