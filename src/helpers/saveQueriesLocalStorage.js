/**
 * Saves query to localStorage
 */
export const saveQueriesLocalStorage = data => {
  localStorage.setItem("savedQueries", JSON.stringify(data));
};
