import { useState } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import styles from './App.module.css';

export default function App() {
  const [query, setQuery] = useState('');
  return (
    <div className={styles.App}>
      <Searchbar onSubmit={data => setQuery(data)} />
      <ImageGallery query={query} />
    </div>
  );
}
