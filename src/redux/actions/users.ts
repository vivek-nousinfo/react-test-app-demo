import * as type from '../types';
import * as WORKSPACE from '../types';

export interface GetWorkspaces {
  type: WORKSPACE.GET_WORKSPACES;
}
export interface GetWorkspacesSuccess {
  type: WORKSPACE.GET_WORKSPACES_SUCCESS;
  data: any;
}
export interface GetWorkspacesFailure {
  type: WORKSPACE.GET_WORKSPACES_FAILURE;
  error: Error;
}

export type GetWorkspacesType = GetWorkspaces | GetWorkspacesSuccess | GetWorkspacesFailure;

export function getUsers(): GetWorkspaces {
  console.log("action call")

  return {
    type: type.GET_WORKSPACES,
  }
}

export function GetWorkspacesSuccess(data: any): GetWorkspacesSuccess {
  return {
    type: type.GET_WORKSPACES_SUCCESS,
    data
  }
}
export function GetWorkspacesFailure(error: Error): GetWorkspacesFailure {
  return {
    type: type.GET_WORKSPACES_FAILURE,
    error
  }
}