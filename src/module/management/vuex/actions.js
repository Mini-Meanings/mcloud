import * as types from './mutation-types';
import * as srv from '../api/service';

export const selectedProject = ({ commit }, project) => {
  commit(types.SELECTED_PROJECT,{
    project : project
  });
};

export const getMenuList = ({ commit ,state }, parmas ) => {
  return new Promise((resolve,reject) => {
    if(!state.menuList.length){
      srv.getSystemMenu(parmas).then(res => {
        let menuList = res.result;
        resolve(menuList);
        commit(types.GET_MENU_LIST,menuList)
      }).catch(error =>{
        reject(error)
      });
    }else{
      resolve(state.menuList);
      commit(types.GET_MENU_LIST,state.menuList);
    }
  })
};


