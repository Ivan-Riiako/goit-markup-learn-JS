const friends = ['frien1', 'frien-2', 'frien3', 'frien4', 'frien5', 'frien6', 'frien7', 'frien8', 'frien9'];
console.table(friends);
const lastIndexFriends = friends.length - 1;
console.log(lastIndexFriends);
for (let i = 0; i <= lastIndexFriends; i += 1){
    console.log(friends[i])
}