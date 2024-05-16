import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import DisplayCharacterSheet from '../components/containers/DisplayCharacterSheet';
import './Tab2.css';
import React from 'react';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <DisplayCharacterSheet/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
