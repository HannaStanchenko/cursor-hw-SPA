import Routes from './routes/Routes.js';

import Nav from './components/navigation/Nav';
import Footer from './components/footer/Footer.js';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles["App"]} >
        <header>
          <Nav />
        </header>

        <main>
          <Routes />
        </main>

        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
