export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const REMOVE_ADDED_FEATURE = "REMOVE_ADDED_FEATURE";
export const ADD_ADDITIONAL_FEATURE = "ADD_ADDITIONAL_FEATURE";

export function addFeature(feature) {
    return {type: ADD_FEATURE, payload: feature}
}

export function removeFeature(feature) {
    return {type: REMOVE_FEATURE, payload: feature}
}

export function removeAddedFeature(feature) {
    return {type: REMOVE_ADDED_FEATURE, payload: feature}
}

export function addAdditionalFeature(feature) {
    return {type: ADD_ADDITIONAL_FEATURE, payload: feature}
}