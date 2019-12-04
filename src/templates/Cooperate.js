import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactGA from 'react-ga';
import {settings} from '../settings/Settings';

const Cooperate = () => {
  ReactGA.initialize(settings.analytics);
  ReactGA.pageview(settings.wordpressLink + settings.cooperationSite);
    return (
        <div>
          <Header />
            <main className='container-single single-content'>
              <h1>Współpraca</h1>
              <h2>O blogu</h2>
              <div className='cooperation-box'>
                <div className='cooperation-icon'><i className='fas fa-globe-europe fa-fw'></i></div>
                <div>
                  <p>Aktywne podróże to blog stworzony z myślą o osobach uwielbiających spędzać czas aktywnie, zwiedzać nowe zakątki świata, wędrować po górach a zimą jeździć na nartach.</p>
                  <p>Prowadzę bloga od kilku lat, opisując na nim swoje podróże i zwiedzone miejsca. Traktuję go jako hobby.</p>
                </div>
              </div>
              <h2>Formy współpracy</h2>
              <div className='cooperation-box'>
                <div className='cooperation-icon'><i className='fas fa-user-friends fa-fw'></i></div>
                <div>
                  <p>Na blogu zamieszczam linki do innych stron oraz artykuły sponsorowane. Jestem otwarta również na inne formy współpracy zgodne z tematyką bloga.</p>
                </div>
              </div>
              <h2>Ruch na blogu</h2>
              <div className='cooperation-box'>
                <div className='cooperation-icon'><i className='fas fa-chart-line fa-fw'></i></div>
                <div>
                  <p>W 2018 roku bloga odwiedziło 17 624 użytkowników a szczyt ruchu przypada na miesiące letnie. Wówczas na bloga trafia około 2000 użytkowników miesięcznie.</p>
                </div>
              </div>
              <h2>Kontakt</h2>
              <div className='cooperation-box'>
                <div className='cooperation-icon'><i className='fas fa-at fa-fw'></i></div>
                <div>
                  <p>W sprawie współpracy proszę o kontakt na poniższy adres mailowy: {settings.email}</p>
                </div>
              </div>
            </main>
          <Footer />
        </div>
    )
}

export default Cooperate;
