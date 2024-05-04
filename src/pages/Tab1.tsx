import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import DisplayDiceResult from '../components/containers/DisplayDiceResult';
import './Tab1.css';
import NavButton from '../buttons/navButton';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Craig's First Mobile App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Craig's First Mobile App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <DisplayDiceResult name="Dice Results" />
        <NavButton to="/tab2" text='tab 2'/> 
        <NavButton to="/tab3" text='tab 3'/> 
      </IonContent>
    </IonPage>
  );
};

export default Tab1;