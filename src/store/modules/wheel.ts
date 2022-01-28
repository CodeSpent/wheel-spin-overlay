// @ts-ignore
import { db } from '../../services/lowdb';
import lodash from 'lodash';

interface Segment {
  id: number;
  name: string;
  bgColor: string;
  fontColor: string;
}

export interface SegmentState {
  segments: Segment[];
}

const state: SegmentState = {
  segments: []
};

function getSegments(state: SegmentState) {
  return state.segments;
}

const getters = {
  getSegments
};

function addSegment(state: SegmentState, segment: Segment) {
  state.segments.push(segment);
}

const mutations = {
  addSegment
};

function hydrateSegments(state: SegmentState) {
  db.chain.get('segments').value();
}

const actions = {
  hydrateSegments
};

export default {
  state,
  getters,
  mutations,
  actions
};
