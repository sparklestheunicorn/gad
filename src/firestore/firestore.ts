import {StoreAccessor} from "mobx-firelink";
import {GetNodeChildrenL2, GetNodeChildren} from "../subrepos/dm-server/Source/@Shared/Store/firebase/nodes";
import {mainMap_rootNodeID} from "../pages/Questions";
import {MapNodeL2} from "../subrepos/dm-server/Source/@Shared/Store/firebase/nodes/@MapNode";

export function GetFinalNodeTitle(node: MapNodeL2) {
	//if (node == null) return "";
	let result = node.current.titles.base;
	// in the GAD client/ui, replace "CC" with the full "Climate Change"
	result = result.replace(/(^|\W)CC(\W|$)/g, "$1Climate Change$2");
	return result;
}

export const GetQuestions = StoreAccessor(s=>()=> {
	const questions = GetNodeChildrenL2(mainMap_rootNodeID);
  questions.sort((a, b)=>a.createdAt - b.createdAt); // until we have a way to manually specify the order, use node creation-time
  return questions;
});
export const GetQuestionPositions = StoreAccessor(s=>(questionID: string)=> {
	return GetNodeChildrenL2(questionID);
});
export const GetPositionReasons = StoreAccessor(s=>(positionID: string)=> {
	return GetNodeChildrenL2(positionID);
});