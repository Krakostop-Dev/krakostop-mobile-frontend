import * as TaskManager from 'expo-task-manager';
import { KRAKOSTOP_BG_LOCATION_TASK } from './LocationConfig';
import { sendLocationToServer } from '../communication/CommunicationMenager';

TaskManager.defineTask(KRAKOSTOP_BG_LOCATION_TASK, ({ data, error }) => {
  if (error) {
    return;
  }
  if (data) {
    sendLocationToServer(data.locations[0]);
  }
});
