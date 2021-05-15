import { MutationTree } from 'vuex';
import { CoreState } from '@/store/types';
import { StockSubscription } from './types';

// You can't invoke mutations from other mutations via Vuex but you can directly invoke them
import {mutations as coreMutations} from '@/store/core/mutations';

export const mutations: MutationTree<CoreState> = {  
  addModels(state: CoreState, models: StockSubscription[]){
    coreMutations.addModels(state, models);
  },

  select(state: CoreState, model: StockSubscription){
    coreMutations.select(state, model);
  },

  update(state: CoreState, model: StockSubscription){
    coreMutations.update(state, model);
  },

  updateSelectedCopy(state: CoreState, updated: StockSubscription){    
    coreMutations.updateSelectedCopy(state, updated);
  },

  delete(state: CoreState, model: StockSubscription) {    
    coreMutations.delete(state, model);
  }
};