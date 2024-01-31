const Queue = require("../lib/queue");

/*
If graph is empty (has no keys), return false.

If startUser is equal to endUser, return true.

Initialize a new array, enqueued, that contains startUser.

Initialize a new empty queue named discovered.

Enqueue startUser.

While discovered isn't empty, do the following:

Dequeue a value from discovered and name it user.

For each friend followedUser in graph[user], do the following:

If followedUser is equal to endUser, return true.

If enqueued doesn't include followedUser, do the following:

Add followedUser to enqueued.

Enqueue friend to discovered.

Return false.
*/

const connected = (G, s, r) => {
  const users = Object.keys(G);
  if (users.length === 0) return false;
  if (s === r) return true;
  let discovered = new Queue();

  discovered.enqueue(s);
  const enqueued = [s];

  while (discovered.first) {
    const user = discovered.dequeue();
    const following = G[user];
    for (let followedUser of following) {
      if (followedUser === r) return true;
      if (!enqueued.includes(followedUser)) {
        enqueued.push(followedUser);
        discovered.enqueue(followedUser);
      }
    }
  }
  return false;
};

module.exports = connected;
