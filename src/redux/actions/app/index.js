import { getData, storeData } from "../../../services/localStorage";
import { HTTP_GET_REQUEST } from "../../../services/http";
import { normalizedData } from "../../../utils/helper";

const fetchEntities = () => ({ type: "FETCH_ENTITIES" });

const fetchEntitiesSuccess = (payload) => ({
  type: "FETCH_ENTITIES_SUCCESS",
  payload,
});

const fetchEntitiesFailure = (err) => ({
  type: "FETCH_ENTITIES_FAILURE",
  payload: err,
});

const startAddingEntity = () => ({ type: "START_ADDING_ENTITY" });

const addEntitySuccess = (payload) => ({ type: "ADD_ENTITY_SUCCESS", payload });

const addEntityFailure = (error) => ({
  type: "ADD_ENTITY_FAILURE",
  payload: error,
});

const startDeletingEntity = () => ({ type: "START_DELETING_ENTITY" });

const deleteEntitySuccess = (payload) => ({
  type: "DELETE_ENTITY_SUCCESS",
  payload,
});

const deleteEntityFailure = (err) => ({
  type: "DELETE_ENTITY_FAILURE",
  payload: err,
});

const startEditingEntity = () => ({
  type: "START_EDITING_ENTITY",
});

const editEntitySuccess = (payload) => ({
  type: "EDIT_ENTITY_SUCCESS",
  payload,
});

const editEntityFailure = (err) => ({
  type: "EDIT_ENTITY_FAILURE",
  payload: err,
});

export function fetchEntitiesAsync() {
  return (dispatch) => {
    dispatch(fetchEntities());

    return getData("entities")
      .then((res) => {
        if (res) dispatch(fetchEntitiesSuccess(res));
        else {
          let url = "http://www.mocky.io/v2/5c3e15e63500006e003e9795";
          HTTP_GET_REQUEST(
            url,
            (res) => {
              let data = normalizedData(res.data.products);
              storeData("entities", data.entities)
                .then((res) => dispatch(fetchEntitiesSuccess(res)))
                .catch((err) => dispatch(fetchEntitiesFailure(err.message)));
            },
            (error) => console.log("ERROR", error),
            () => {}
          );
        }
      })
      .catch((err) => dispatch(fetchEntitiesFailure(err.message)));
  };
}

export function addEntityAsync(entity) {
  return (dispatch) => {
    dispatch(startAddingEntity());

    return getData("entities")
      .then((res) => {
        var lastProductId = Object.keys(res.products).length;
        var lastPriceId = Object.keys(res.prices).length;

        res.prices[lastPriceId + 1] = {
          id: lastPriceId + 1,
          price: parseFloat(entity.price),
          date: `${new Date().toISOString().split(".")[0]}+00:00`,
        };

        res.products[lastProductId + 1] = {
          id: lastProductId + 1,
          name: entity.name,
          prices: [lastPriceId + 1],
        };

        storeData("entities", res)
          .then((res) => {
            dispatch(addEntitySuccess(res));
          })
          .catch((err) => {
            dispatch(addEntityFailure(err.message));
          });
      })
      .catch((err) => {
        dispatch(addEntityFailure(err.message));
      });
  };
}

export function deleteEntityAsync(entityId) {
  return (dispatch) => {
    dispatch(startDeletingEntity());
    return getData("entities")
      .then((res) => {
        delete res.products[entityId];
        storeData("entities", res)
          .then((res) => {
            dispatch(deleteEntitySuccess(res));
          })
          .catch((err) => dispatch(deleteEntityFailure(err.message)));
      })
      .catch((err) => dispatch(deleteEntityFailure(err.message)));
  };
}

export function editEntityAsync(entity) {
  return (dispatch) => {
    dispatch(startEditingEntity());
    return getData("entities")
      .then((res) => {
        if (entity.name !== res.products[entity.productId].name) {
          res.products[entity.productId].name = entity.name;
        }
        if (entity.price !== res.prices[entity.priceId].price) {
          var lastPriceId = Object.keys(res.prices).length;
          res.prices[lastPriceId + 1] = {
            id: lastPriceId + 1,
            price: parseFloat(entity.price),
            date: `${new Date().toISOString().split(".")[0]}+00:00`,
          };
          res.products[entity.productId].prices.push(lastPriceId + 1);
        }
        storeData("entities", res)
          .then((res) => {
            dispatch(editEntitySuccess(res));
          })
          .catch((err) => dispatch(editEntityFailure(err.message)));
      })
      .catch((err) => dispatch(editEntityFailure(err.message)));
  };
}
