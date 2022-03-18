export function updateTree(newTree, newNode, k, e) {
  let idNewNode = newNode.ids;
  for (let key in newTree) {
    const val = newTree[key];
    if (val === idNewNode) {
      newTree[k] = e;
    }
    if (typeof val === "object") {
      updateTree(val, newNode);
    }
  }
}
