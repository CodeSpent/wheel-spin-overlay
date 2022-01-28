import { getStoreBuilder } from 'vuex-typex';
import { SegmentState } from './modules/wheel';

export interface RootState {
  segments: SegmentState;
}

export const storeBuilder = getStoreBuilder<RootState>();
