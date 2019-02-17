import { all, takeLatest } from "redux-saga/effects";

import { addFavoriteRequest } from "./favorites";

export default function* rootSaga() {
  console.tron.log("sagas...");
  return yield all([takeLatest("ADD_FAVORITE_REQUEST", addFavoriteRequest)]);
}
