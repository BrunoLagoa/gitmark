import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { addFavoriteSuccess } from "../../store/actions/favorites";

export function* addFavoriteRequest(action) {
  const response = yield call(api.get, `/repos/${action.payload.repoName}`);

  console.tron.log("saga chamada");

  yield put(addFavoriteSuccess(response.data));
}
