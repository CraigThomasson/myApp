import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import DisplayCharacterSheet from '../components/containers/DisplayCharacterSheet';
import './Tab2.css';
import React from 'react';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Character Sheet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Character Sheet</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="center-content">
          <DisplayCharacterSheet />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
