import { InjectionToken } from '@angular/core';

import * as GeneralConfigData from '@app/branding/general';
import { GeneralConfigModel } from '../models/general.model';

export const GENERAL_CONFIG_DATA = new InjectionToken<GeneralConfigModel>(
  'general.config'
);

export const GeneralConfig: GeneralConfigModel = { ...GeneralConfigData }