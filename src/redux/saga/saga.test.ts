import { put, takeLatest } from 'redux-saga/effects';
// import { cloneableGenerator } from 'redux-saga/testing-utils';
import * as TILES from '../types';
import { fetchUsers, userSaga } from "../saga/userSaga";
describe("should run watcher", () => {
    it("should run fetch call", () => {

    })
})
describe('should execute function in saga watcher', () => {
  const generator = userSaga();
  generator.next()
  generator.next()
  generator.next()
  console.log(generator.next().done, "=======>>>>")
  console.log(takeLatest(TILES.GET_WORKSPACES, fetchUsers), "-----------,,,,,,,")
  it('Should render watcher saga', () => {
    expect(generator.next().value).deepEqual(takeLatest(TILES.GET_WORKSPACES, fetchUsers));
  });
});