import app from './app';

const PORT = app.get('PORT');

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
