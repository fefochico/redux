import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddToCounter, ChangeBrand, ExtractToCounter } from "./appState.actions";
import { IAppState, AppStateModel } from "./appState.model";

@State({
  name: 'counter',
  defaults: {
    count: 0,
    brand: 'azul'
  }
})
export class AppState {
  @Selector()
  static getCount(state: AppStateModel) { return state.count; }

  // Añade un valor al contador
  @Action(AddToCounter)
  add({ getState, patchState }: StateContext<IAppState>) {
    patchState({count: getState().count+1, brand: getState().brand});
  }


  // Elimina valor al contador
  @Action(ExtractToCounter)
  remove({ getState, patchState }: StateContext<IAppState>) {
    patchState({count: getState().count-1, brand: getState().brand});
  }

  // Cambiando la marca de la aplicacion
  @Action(ChangeBrand)
  changeBrand({ getState, patchState }: StateContext<IAppState>, {payload}: ChangeBrand) {
    patchState({count: getState().count, brand: payload});
  }
}