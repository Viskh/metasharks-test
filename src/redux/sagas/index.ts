import { call, put, takeEvery } from "redux-saga/effects";
import { IEpisode } from "../../models/IEpisode";

export const getEpisodes = async () => {
  const res = await fetch("https://breakingbadapi.com/api/episodes");
  const episodes = await res.json();

  return episodes;
};

export function* workerLoadSaga() {
  yield put({ type: "LOAD_EPISODES_PENDING"})
  const data: IEpisode[] = yield call(getEpisodes);
  yield put({ type: "LOAD_EPISODES_FULFILLED", payload: data });
}

export function* watchClickSaga() {
  yield takeEvery("CLICK_LOAD_EPISODE", workerLoadSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
