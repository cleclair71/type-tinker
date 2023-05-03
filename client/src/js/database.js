import { openDB } from 'idb';

const initdb = async () =>
  openDB('texttinker', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('texttinker')) {
        console.log('texttinker database already exists');
        return;
      }
      db.createObjectStore('texttinker', { keyPath: 'id', autoIncrement: true });
      console.log('texttinker database created');
    },
  });

// Method to accept content and add it to the database
export const putDb = async (content) => {
  const db = await initdb();
  const tx = db.transaction('texttinker', 'readwrite');
  const store = tx.objectStore('texttinker');
  await store.put({ content });
  await tx.done;
  console.log('Content added to the database');
};

// logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await initdb();
  const tx = db.transaction('texttinker', 'readonly');
  const store = tx.objectStore('texttinker');
  const allContent = await store.getAll();
  await tx.done;
  console.log('Content retrieved from the database');
  return allContent;
};

initdb();
